import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ETrackerTabs } from '../enums/ETrackerTabs';
import { AppDispatch, RootState } from '../store';
import {
	getFlightDestinations,
	trackFlight,
} from '../store/slices/flightSlice';
import { setActiveTab, setSelectedDate } from '../store/slices/uiSlice';

export const useFlightTrackingViewModel = () => {
	const dispatch = useDispatch<AppDispatch>();

	const { flights, loading, error } = useSelector(
		(state: RootState) => state.flight,
	);

	const { activeTab, selectedDate } = useSelector(
		(state: RootState) => state.ui,
	);

	const handleTabChange = useCallback(
		(tab: ETrackerTabs) => {
			dispatch(setActiveTab(tab));
		},
		[dispatch],
	);

	const handleDateChange = useCallback(
		(date: string) => {
			dispatch(setSelectedDate(date));
		},
		[dispatch],
	);

	const handleFlightSearch = useCallback(
		(flightNumber: string) => {
			dispatch(trackFlight({ flightNumber, date: selectedDate }));
		},
		[dispatch, selectedDate],
	);

	const handleDestinationSearch = useCallback(
		(departureCity: string, arrivalCity: string) => {
			dispatch(
				getFlightDestinations({
					origin: departureCity,
					destination: arrivalCity,
					date: selectedDate,
				}),
			);
		},
		[dispatch, selectedDate],
	);
	return {
		flights,
		loading,
		error,
		activeTab,
		selectedDate,
		handleTabChange,
		handleDateChange,
		handleFlightSearch,
		handleDestinationSearch,
	};
};
