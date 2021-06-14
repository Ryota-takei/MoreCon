import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Pages = "newPosts" | "inProduction" | "finish";
export type Log = "post" | "production" | "want";

export interface PageState {
  currentPage: Pages;
  myPageLog: Log;
}
const initialState: PageState = {
  currentPage: "newPosts",
  myPageLog: "post",
};

// どこのページを見ているかを管理
export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changePageState: (state, action: PayloadAction<Pages>) => {
      state.currentPage = action.payload;
    },
    changePageLog: (state, action: PayloadAction<Log>) => {
      state.myPageLog = action.payload;
    },
  },
});

export const { changePageState, changePageLog } = pageSlice.actions;

export const selectPage = (state: RootState) => state.page.currentPage;
export const selectPageLog = (state: RootState) => state.page.myPageLog;

export default pageSlice.reducer;
