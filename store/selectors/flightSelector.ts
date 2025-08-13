import { createSelector } from '@reduxjs/toolkit';
import { FlightModel } from '../../models/Flight';
import { RootState } from '../../store';
import { Flight as FlightInterface } from '../../types';

export const selectFlightsPlain = (state: RootState) =>
	state.flight.flights as FlightInterface[];

export const selectFlights = createSelector([selectFlightsPlain], (flights) =>
	flights.map((f) => new FlightModel(f)),
);

export const selectedFlightsVM = createSelector(
	[selectFlightsPlain],
	(flights) =>
		flights.map((f) => {
			const model = new FlightModel(f);

			return {
				id: model.id,
				favorite: model.favorite,
				status: model.status,
				departureAirport: model.segment.departureAirport,
				arrivalAirport: model.segment.arrivalAirport,
				arrivalGate: model.arrivalGate,
				arrivalTerminal: model.arrivalTerminal,
				boardingTerminal: model.boardingTerminal,
				boardingTime: model.boardingTime,
				route: model.getFormattedRoute(),
				statusText: model.getStatusText(),
				durationInHours: model.getDurationInHours(),
				formattedTime: model.getFormattedTime(model.estimatedArrivalTime),
				operatingAndCode: model.getOperatingAndCode(),
			};
		}),
);

export const selectedFlightPlain = (state: RootState) =>
	state.flight.selectedFlight as FlightInterface;

export const selectedFlightDetails = createSelector(
	[selectedFlightPlain],
	(flight) => {
		if (!flight) {
			return {
				loading: false,
				error: 'Flight not found',
				selectedFlight: null,
			};
		}

		const model = new FlightModel(flight);

		return {
			loading: false,
			error: null,
			selectedFlight: {
				id: model.id,
				favorite: model.favorite,
				departureAirport: model.segment.departureAirport,
				arrivalAirport: model.segment.arrivalAirport,
				arrivalGate: model.arrivalGate,
				status: model.status,
				arrivalTerminal: model.arrivalTerminal,
				boardingTerminal: model.boardingTerminal,
				boardingTime: model.boardingTime,
				route: model.getFormattedRoute(),
				statusText: model.getStatusText(),
				durationInHours: model.getDurationInHours(),
				formattedTime: model.getFormattedTime(model.estimatedArrivalTime),
				operatingAndCode: model.getOperatingAndCode(),
				flightNumber: model.getFlightNumber(),
				operator: model.getOperator(),
				formattedDate: model.getFormattedDate(model.estimatedDepartureTime),
				formattedArrivalTime: model.getFormattedTime(
					model.estimatedArrivalTime,
				),
			},
		};
	},
);
