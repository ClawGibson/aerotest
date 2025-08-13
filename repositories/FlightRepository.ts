import { FlightModel } from '../models/Flight';
import { Flight } from '../types';

import NumeroDeVueloResponse from '../mocks/NumerodeVueloResponse.json';
import OrigenDestinoResponse from '../mocks/OrigenDestinoResponse.json';

const FLIGHT_NOT_FOUND: FlightModel[] = [];

export interface FlightSearchParams {
	flightNumber?: string;
	departureAirport?: string;
	arrivalAirport?: string;
	date?: string;
}

export interface IFlightRepository {
	trackFlight(flightNumber: string, date: string): Promise<FlightModel[]>;
	getFlightDestinations(
		origin: string,
		destination: string,
		date: string,
	): Promise<FlightModel[]>;
}

export class FlightRepository implements IFlightRepository {
	private baseUrl: string;

	constructor(baseUrl: string = 'API_BASE_URL') {
		this.baseUrl = baseUrl;
	}

	async trackFlight(
		flightNumber: string,
		date: string,
	): Promise<FlightModel[]> {
		try {
			const mockFlights = NumeroDeVueloResponse.flightStatusCollection;
			const flights = mockFlights.filter((flight: Flight) => {
				const flightCode =
					flight.segment.marketingFlightCode ||
					flight.segment.operatingFlightCode;
				const flightDate = flight.segment.departureDateTime.split('T')[0];
				const normalizedDate = date.split('T')[0];

				return flightCode === flightNumber && flightDate === normalizedDate;
			});

			return flights.map((flight: Flight) => new FlightModel(flight));
		} catch {
			return FLIGHT_NOT_FOUND;
		}
	}

	async getFlightDestinations(
		origin: string,
		destination: string,
		date: string,
	): Promise<FlightModel[]> {
		try {
			const mockFlights = OrigenDestinoResponse.flightStatusCollection;

			if (!mockFlights) return FLIGHT_NOT_FOUND;

			return mockFlights.map((flight: Flight) => new FlightModel(flight));
		} catch {
			return FLIGHT_NOT_FOUND;
		}
	}
}
