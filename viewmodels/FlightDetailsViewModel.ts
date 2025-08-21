import { useCallback } from 'react';

import { FLIGHT_STATUS_COLOR, IDLE_COLOR } from '../constants/FlightStatuses';
import { useFlightContext } from '../contexts/FlightContext';

export const useFlightDetailsViewModel = () => {
	const { selectedFlightDetails, selectFlight, updateFlightFavorite } =
		useFlightContext();

	const handleUpdateFavorite = useCallback(
		(id: string) => {
			updateFlightFavorite(id);
		},
		[updateFlightFavorite],
	);

	const getStatusColor = useCallback(() => {
		if (!selectedFlightDetails.selectedFlight) return IDLE_COLOR;

		return (
			FLIGHT_STATUS_COLOR[
				selectedFlightDetails.selectedFlight
					.status as keyof typeof FLIGHT_STATUS_COLOR
			] || IDLE_COLOR
		);
	}, [selectedFlightDetails.selectedFlight]);

	return {
		selectedFlight: selectedFlightDetails.selectedFlight,
		loading: selectedFlightDetails.loading,
		error: selectedFlightDetails.error,
		selectFlight,
		getStatusColor,
		onUpdateFavorite: handleUpdateFavorite,
	};
};
