import { FlightModel } from '../../models/Flight';
import { Flight } from '../../types';

export const generateFlightsVM = (flights: Flight[]) => {
	return flights.map((f) => {
		const model = new FlightModel(f);
		return {
			id: model.id,
			favorite: model.favorite,
			departureAirport: model.segment.departureAirport,
			arrivalAirport: model.segment.arrivalAirport,
			arrivalGate: model.arrivalGate,
			arrivalTerminal: model.arrivalTerminal,
			boardingTerminal: model.boardingTerminal,
			boardingTime: model.boardingTime,
			route: model.getFormattedRoute(),
			status: model.status,
			statusText: model.getStatusText(),
			durationInHours: model.getDurationInHours(),
			formattedTime: model.getFormattedTime(model.estimatedArrivalTime),
			operatingAndCode: model.getOperatingAndCode(),
		};
	});
};

export const generateSelectedFlightDetails = (selectedFlight: Flight) => {
	const model = new FlightModel(selectedFlight);
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
};
