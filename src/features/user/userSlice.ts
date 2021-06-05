import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Auth, API, graphqlOperation } from "aws-amplify";

import { RootState } from "../../app/store";
import { getUser } from "../../graphql/queries";
import { GetUserGraph } from "../../hooks/auth/UseSignIn";
import { GetUser } from "../../types/user/user";

export interface UserState {
  isAdmin: boolean;
  user: GetUser;
}

const initialState: UserState = {
  isAdmin: false,
  user: null,
};

export const getCurrentUserInformation = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkApi) => {
    try {
      const user = await Auth.currentUserInfo().then((user) => {
        return user;
      });
      const currentUser = (await API.graphql(
        graphqlOperation(getUser, { id: user.username })
      )) as GetUserGraph;
      return currentUser.data.getUser;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getCurrentUserStatus: (state, action) => {
      state.isAdmin = action.payload;
      console.log(action.payload);
    },
    getUserInformation: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUserInformation.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
        }
      })
      .addCase(getCurrentUserInformation.rejected, (state, action) => {
        console.log(action.payload);
        alert("エラーが発生しました");
      });
  },
});

export const { getCurrentUserStatus, getUserInformation } = userSlice.actions;

export const selectIsAdmin = (state: RootState) => state.user.isAdmin;
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
