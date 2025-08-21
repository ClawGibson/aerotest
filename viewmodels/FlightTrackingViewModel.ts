import { useCallback } from 'react';

import { useFlightContext } from '../contexts/FlightContext';
import { ETrackerTabs } from '../enums/ETrackerTabs';
import {
	useGetFlightDestinations,
	useTrackFlight,
	useUIManager,
} from '../hooks/useFlightQueries';

export const useFlightTrackingViewModel = () => {
	const trackFlightMutation = useTrackFlight();
	const getDestinationsMutation = useGetFlightDestinations();
	const { setFlightData } = useFlightContext();
	const { activeTab, selectedDate, setActiveTab, setSelectedDate } =
		useUIManager();

	const handleTabChange = useCallback(
		(tab: ETrackerTabs) => {
			setActiveTab(tab);
		},
		[setActiveTab],
	);

	const handleDateChange = useCallback(
		(date: string) => {
			setSelectedDate(date);
		},
		[setSelectedDate],
	);

	const handleFlightSearch = useCallback(
		async (flightNumber: string) => {
			try {
				const result = await trackFlightMutation.mutateAsync({
					flightNumber,
					date: selectedDate,
				});
				setFlightData(result);
			} catch (error) {
				console.error('Flight search failed:', error);
			}
		},
		[trackFlightMutation, selectedDate, setFlightData],
	);

	const handleDestinationSearch = useCallback(
		async (departureCity: string, arrivalCity: string) => {
			try {
				const result = await getDestinationsMutation.mutateAsync({
					origin: departureCity,
					destination: arrivalCity,
					date: selectedDate,
				});
				setFlightData(result);
			} catch (error) {
				console.error('Destination search failed:', error);
			}
		},
		[getDestinationsMutation, selectedDate, setFlightData],
	);

	return {
		loading:
			trackFlightMutation.isPending || getDestinationsMutation.isPending,
		error:
			trackFlightMutation.error?.message ||
			getDestinationsMutation.error?.message ||
			null,
		activeTab,
		selectedDate,
		handleTabChange,
		handleDateChange,
		handleFlightSearch,
		handleDestinationSearch,
	};
};
