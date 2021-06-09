import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type Pages = "newPosts" | "inProduction"| "finish"

export interface PageState {
  currentPage: Pages
}
const initialState: PageState = {
  currentPage: "newPosts"
}

export const pageSlice = createSlice({
  name:"page",
  initialState, 
  reducers: {
    changePageState:(state, action:PayloadAction<Pages>) => {
      state.currentPage = action.payload
    }
  }
})

export const { changePageState} = pageSlice.actions

export const selectPage = (state: RootState) => state.page.currentPage

export default pageSlice.reducer;