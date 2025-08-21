import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import { ETrackerTabs } from '../enums/ETrackerTabs';
import { ServiceFactory } from '../factories/ServiceFactory';
import { Flight } from '../types';

const INITIAL_DATE = '2023-11-21T06:24:00.000Z';

const flightRepository = ServiceFactory.createFlightRepository();

export const useTrackFlight = () => {
	return useMutation({
		mutationFn: async ({
			flightNumber,
			date,
		}: {
			flightNumber: string;
			date: string;
		}) => {
			const flights = await flightRepository.trackFlight(flightNumber, date);
			return flights.map((flight) => ({ ...flight } as Flight));
		},
		onError: (error) => {
			console.error('Error tracking flight:', error);
		},
	});
};

export const useGetFlightDestinations = () => {
	return useMutation({
		mutationFn: async ({
			origin,
			destination,
			date,
		}: {
			origin: string;
			destination: string;
			date: string;
		}) => {
			const flights = await flightRepository.getFlightDestinations(
				origin,
				destination,
				date,
			);
			return flights.map((flight) => ({ ...flight } as Flight));
		},
		onError: (error) => {
			console.error('Error getting flight destinations:', error);
		},
	});
};

export const useUIManager = () => {
	const [activeTab, setActiveTab] = useState<ETrackerTabs>(
		ETrackerTabs.FLIGHT_NUMBER,
	);
	const [selectedDate, setSelectedDate] = useState(INITIAL_DATE);

	return {
		activeTab,
		selectedDate,
		setActiveTab,
		setSelectedDate,
	};
};
