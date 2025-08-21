import React, { createContext, ReactNode, useContext, useState } from 'react';

import {
	generateFlightsVM,
	generateSelectedFlightDetails,
} from './utils/flights';

import { Flight, FlightContextType } from '../types';

const FlightContext = createContext<FlightContextType | undefined>(undefined);

interface FlightProviderProps {
	children: ReactNode;
}

export const FlightProvider: React.FC<FlightProviderProps> = ({ children }) => {
	const [flights, setFlights] = useState<Flight[]>([]);
	const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

	const updateFlightFavorite = (flightId: string) => {
		setFlights((prevFlights) => {
			const updated = prevFlights.map((f) => {
				if (f.id !== flightId) return { ...f };
				return { ...f, favorite: !f.favorite };
			});

			return updated
				.slice()
				.sort((a, b) => Number(b.favorite) - Number(a.favorite));
		});
	};

	const selectFlightById = (flightId: string) => {
		const flight = flights.find((f) => f.id === flightId);
		setSelectedFlight(flight || null);
	};

	const setFlightData = (newFlights: Flight[]) => {
		setFlights(newFlights);
	};

	const clearFlights = () => {
		setFlights([]);
		setSelectedFlight(null);
	};

	const flightsVM = generateFlightsVM(flights);

	const selectedFlightDetails = selectedFlight
		? generateSelectedFlightDetails(selectedFlight)
		: {
				loading: false,
				error: 'Flight not found',
				selectedFlight: null,
		  };

	return (
		<FlightContext.Provider
			value={{
				flights,
				selectedFlight,
				setFlightData,
				updateFlightFavorite,
				selectFlight: selectFlightById,
				clearFlights,
				flightsVM,
				selectedFlightDetails,
			}}
		>
			{children}
		</FlightContext.Provider>
	);
};

export const useFlightContext = (): FlightContextType => {
	const context = useContext(FlightContext);
	if (!context) {
		throw new Error('useFlightContext must be used within a FlightProvider');
	}
	return context;
};
