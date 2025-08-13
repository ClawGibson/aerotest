import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../store';
import { selectedFlightDetails } from '../store/selectors/flightSelector';
import {
	setSelectedFlight,
	updateFlightFavorite,
} from '../store/slices/flightSlice';

import { FLIGHT_STATUS_COLOR, IDLE_COLOR } from '../constants/FlightStatuses';

export const useFlightDetailsViewModel = () => {
	const dispatch = useDispatch<AppDispatch>();

	const { selectedFlight, loading, error } = useSelector(
		selectedFlightDetails,
	);

	const selectFlight = useCallback(
		(flightId: string) => {
			dispatch(setSelectedFlight(flightId));
		},
		[dispatch],
	);

	const handleUpdateFavorite = useCallback(
		(id: string) => {
			dispatch(updateFlightFavorite(id));
		},
		[dispatch],
	);

	const getStatusColor = useCallback(() => {
		if (!selectedFlight) return IDLE_COLOR;

		return (
			FLIGHT_STATUS_COLOR[
				selectedFlight.status as keyof typeof FLIGHT_STATUS_COLOR
			] || IDLE_COLOR
		);
	}, [selectedFlight]);

	return {
		selectedFlight,
		loading,
		error,
		selectFlight,
		getStatusColor,
		onUpdateFavorite: handleUpdateFavorite,
	};
};
