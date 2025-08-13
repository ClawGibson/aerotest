export interface Segment {
	segmentCode: string;
	departureAirport: string;
	arrivalAirport: string;
	departureDateTime: string;
	arrivalDateTime: string;
	flightStatus: string;
	operatingCarrier: string;
	marketingCarrier: string;
	operatingFlightCode: string;
	marketingFlightCode: string;
	flightDurationInMinutes: number;
	aircraftType: string;
	stops: any[];
}

export interface OutGate {
	accuracy: string;
	dateTimeUtc: string;
	dateTimeLocal: string;
	sourceType: string;
}

export interface Flight {
	id: string;
	status: string;
	boardingTerminal: string;
	boardingGate: string;
	boardingTime: string;
	estimatedDepartureTime: string;
	estimatedArrivalTime: string;
	delayInMinutes: number;
	arrivalTerminal: string;
	arrivalGate: string;
	segment: Segment;
	outGate: OutGate;
	legType: string;
	totalFlightTimeInMinutes: number;
	favorite: boolean;
}

export enum FlightStatus {
	IN_THE_AIR = 'IN_THE_AIR',
	DELAYED = 'DELAYED',
	ON_TIME = 'ON_TIME',
	ARRIVED = 'ARRIVED',
}

export interface ApiResponse {
	flightStatusCollection: FlightStatus[];
}
