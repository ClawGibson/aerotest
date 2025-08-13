import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
	activeTab: 'Flight Number' | 'Destination';
	isDatePickerVisible: boolean;
	selectedDate: string;
}

const initialState: UiState = {
	activeTab: 'Flight Number',
	isDatePickerVisible: false,
	selectedDate: '2023-11-21T06:24:00.000Z',
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setActiveTab: (
			state,
			action: PayloadAction<'Flight Number' | 'Destination'>,
		) => {
			state.activeTab = action.payload;
		},
		setDatePickerVisible: (state, action: PayloadAction<boolean>) => {
			state.isDatePickerVisible = action.payload;
		},
		setSelectedDate: (state, action: PayloadAction<string>) => {
			state.selectedDate = action.payload;
		},
	},
});

export const { setActiveTab, setDatePickerVisible, setSelectedDate } =
	uiSlice.actions;
export default uiSlice.reducer;
