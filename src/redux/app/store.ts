import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../slices/user/userSlice';
import postReducer from '../slices/post/postSlice';
import pageReducer from '../slices/page/pageSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    page: pageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
