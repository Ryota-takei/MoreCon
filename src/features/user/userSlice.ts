import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { GetUser } from "../../types/user";

export interface UserState {
  isAdmin: boolean;
  user: GetUser 
}

const initialState: UserState = {
  isAdmin: false,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getCurrentUserStatus: (state, action) => {
      state.isAdmin = action.payload;
      console.log(action.payload);
    },
    getUserInformation:(state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {},
});

export const { getCurrentUserStatus, getUserInformation } = userSlice.actions;

export const selectIsAdmin = (state: RootState) => state.user.isAdmin;
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
