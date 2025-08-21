import { FlightModel } from '../models/Flight';
import { Flight } from '../types';

import NumeroDeVueloResponse from '../mocks/NumerodeVueloResponse.json';
import OrigenDestinoResponse from '../mocks/OrigenDestinoResponse.json';

const FLIGHT_NOT_FOUND: FlightModel[] = [];

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
			await this.simulateNetworkDelay();

			const mockFlights = NumeroDeVueloResponse.flightStatusCollection;
			const flights = mockFlights.filter((flight: Partial<Flight>) => {
				const flightCode =
					flight.segment?.marketingFlightCode ||
					flight.segment?.operatingFlightCode;
				const flightDate = flight.segment?.departureDateTime.split('T')[0];
				const normalizedDate = date.split('T')[0];

				return flightCode === flightNumber && flightDate === normalizedDate;
			});

			return flights.map(
				(flight: Partial<Flight>) => new FlightModel(flight),
			);
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
			await this.simulateNetworkDelay();

			const mockFlights = OrigenDestinoResponse.flightStatusCollection;

			if (!mockFlights) return FLIGHT_NOT_FOUND;

			return mockFlights.map(
				(flight: Partial<Flight>) => new FlightModel(flight),
			);
		} catch {
			return FLIGHT_NOT_FOUND;
		}
	}

	private async simulateNetworkDelay(ms: number = 800): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	static getCacheKey(method: string, ...params: any[]): string[] {
		return [method, ...params.map((p) => String(p))];
	}
}
