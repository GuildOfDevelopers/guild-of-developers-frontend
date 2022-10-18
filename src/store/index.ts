import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { dataApi } from './dataSlice';

export const store = configureStore({
  reducer: {
    [dataApi.reducerPath]: dataApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
