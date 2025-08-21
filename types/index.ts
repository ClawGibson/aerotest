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

interface FlightViewModel {
	id: string;
	favorite: boolean;
	departureAirport: string;
	arrivalAirport: string;
	arrivalGate: string;
	arrivalTerminal: string;
	boardingTerminal: string;
	boardingTime: string;
	route: string;
	status: string;
	statusText: string;
	durationInHours: string;
	formattedTime: string;
	operatingAndCode: string;
}
interface SelectedFlightData {
	id: string;
	favorite: boolean;
	departureAirport: string;
	arrivalAirport: string;
	arrivalGate: string;
	status: string;
	arrivalTerminal: string;
	boardingTerminal: string;
	boardingTime: string;
	route: string;
	statusText: string;
	durationInHours: string;
	formattedTime: string;
	operatingAndCode: string;
	flightNumber: string;
	operator: string;
	formattedDate: string;
	formattedArrivalTime: string;
}
interface SelectedFlightDetails {
	loading: boolean;
	error: string | null;
	selectedFlight: SelectedFlightData | null;
}

export interface FlightContextType {
	flights: Flight[];
	selectedFlight: Flight | null;
	setFlightData: (flights: Flight[]) => void;
	updateFlightFavorite: (flightId: string) => void;
	selectFlight: (flightId: string) => void;
	clearFlights: () => void;
	flightsVM: FlightViewModel[];
	selectedFlightDetails: SelectedFlightDetails;
}
