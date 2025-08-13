import { configureStore } from '@reduxjs/toolkit';
import flightSlice from './slices/flightSlice';
import uiSlice from './slices/uiSlice';

export const store = configureStore({
	reducer: {
		flight: flightSlice,
		ui: uiSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
