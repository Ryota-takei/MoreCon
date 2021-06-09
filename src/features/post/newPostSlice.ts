import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Post } from "../../types/post/NewPots";

export type PostState = {
  posts: Post[];
  nextToken?: string | null;
  isNewPost: boolean;
};

const initialState: PostState = {
  posts: [],
  nextToken: null,
  isNewPost: true,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    initialQuery: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    additionalQuery: (state, action: PayloadAction<Post[]>) => {
      state.posts = [...state.posts, ...action.payload];
    },
    subscriptionPosts: (state, action: PayloadAction<Post>) => {
      state.posts = [action.payload, ...state.posts];
    },
    fetchNextToken: (state, action: PayloadAction<string>) => {
      state.nextToken = action.payload;
    },
    deletePosts: (state, action: PayloadAction<string>) => {
      const newPosts = state.posts.filter(
        (post) => post?.id !== action.payload
      );
      state.posts = [...newPosts];
    },
    editPosts: (state, action: PayloadAction<Post>) => {
      if (action.payload?.type === "inProduction") {
        const newPosts = state.posts.filter(
          (post) => post?.id !== action.payload?.id
        );
        state.posts = [...newPosts]
      } else {
        const post = state.posts.find(
          (post) => post?.id === action.payload?.id
        );
        if (post && post.type === "new" && action.payload) {
          post.title = action.payload.title;
          post.content = action.payload.content;
        }  else {
          state.posts = [...state.posts, action.payload]
        }
      }
    },
    changePostStatus: (state, action: PayloadAction<boolean>) => {
      state.isNewPost = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  initialQuery,
  additionalQuery,
  subscriptionPosts,
  fetchNextToken,
  deletePosts,
  editPosts,
  changePostStatus,
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectNextToken = (state: RootState) => state.posts.nextToken;
export const selectIsNewPost = (state: RootState) => state.posts.isNewPost;

export default postsSlice.reducer;
