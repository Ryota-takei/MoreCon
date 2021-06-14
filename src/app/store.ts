import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import postReducer from '../features/post/postSlice';
import pageReducer from '../features/page/pageSlice';

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
