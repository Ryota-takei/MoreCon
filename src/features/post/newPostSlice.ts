import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Post } from "../../types/post/NewPots";

export type PostState = {
  posts: Post[];
  nextToken?: string | null;
};

type EditInputType = {
  id: string | undefined;
  content: string;
  title: string;
};

const initialState: PostState = {
  posts: [],
  nextToken: null,
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
    editPosts: (state, action: PayloadAction<EditInputType>) => {
      const post = state.posts.find((post) => post?.id === action.payload?.id);
      if (post) {
        post.title = action.payload?.title;
        post.content = action.payload?.content;
      }
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
} = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectNextToken = (state: RootState) => state.posts.nextToken;

export default postsSlice.reducer;
