import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices';
import { usersApi } from './api/usersApi';

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
