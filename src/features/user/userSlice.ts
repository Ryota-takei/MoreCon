import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserState {
  isAdmin: boolean
}

const initialState: UserState = {
 isAdmin: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getCurrentUserStatus: (state, action) => {
     state.isAdmin = action.payload
     console.log(action.payload)
    },
}});

export const { getCurrentUserStatus } = userSlice.actions;

export const selectIsAdmin = (state: RootState) => state.user.isAdmin

export default userSlice.reducer;
