import { v4 as uuidv4 } from 'uuid';
import {
	Flight as FlightInterface,
	FlightStatus,
	OutGate,
	Segment,
} from '../types';

const DEFAULT_TXT = '';
const DEFAULT_MINUTES = 0;

export class FlightModel implements FlightInterface {
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

	constructor(data: Partial<FlightInterface>) {
		this.id = data?.id || this.generateRandomId();
		this.status = data?.status || DEFAULT_TXT;
		this.boardingTerminal = data?.boardingTerminal || DEFAULT_TXT;
		this.boardingGate = data?.boardingGate || DEFAULT_TXT;
		this.boardingTime = data?.boardingTime || DEFAULT_TXT;
		this.estimatedDepartureTime = data?.estimatedDepartureTime || DEFAULT_TXT;
		this.estimatedArrivalTime = data?.estimatedArrivalTime || DEFAULT_TXT;
		this.delayInMinutes = data?.delayInMinutes || DEFAULT_MINUTES;
		this.arrivalTerminal = data?.arrivalTerminal || DEFAULT_TXT;
		this.arrivalGate = data?.arrivalGate || DEFAULT_TXT;
		this.segment = data?.segment || {
			segmentCode: DEFAULT_TXT,
			departureAirport: DEFAULT_TXT,
			arrivalAirport: DEFAULT_TXT,
			departureDateTime: DEFAULT_TXT,
			arrivalDateTime: DEFAULT_TXT,
			flightStatus: DEFAULT_TXT,
			operatingCarrier: DEFAULT_TXT,
			marketingCarrier: DEFAULT_TXT,
			operatingFlightCode: DEFAULT_TXT,
			marketingFlightCode: DEFAULT_TXT,
			flightDurationInMinutes: DEFAULT_MINUTES,
			aircraftType: DEFAULT_TXT,
			stops: [],
		};
		this.outGate = data?.outGate || {
			accuracy: DEFAULT_TXT,
			dateTimeUtc: DEFAULT_TXT,
			dateTimeLocal: DEFAULT_TXT,
			sourceType: DEFAULT_TXT,
		};
		this.legType = data?.legType || DEFAULT_TXT;
		this.totalFlightTimeInMinutes =
			data?.totalFlightTimeInMinutes || DEFAULT_MINUTES;
		this.favorite = data?.favorite || false;
	}

	generateRandomId(): string {
		return uuidv4();
	}

	isArrived(): boolean {
		return this.status === FlightStatus.ARRIVED;
	}

	isDelayed(): boolean {
		return this.status === FlightStatus.DELAYED;
	}

	isOnTime(): boolean {
		return this.status === FlightStatus.ON_TIME;
	}

	isInTheAir(): boolean {
		return this.status === FlightStatus.IN_THE_AIR;
	}

	getStatusText(): string {
		const statusMap: { [key in FlightStatus]: string } = {
			[FlightStatus.ARRIVED]: 'Arrived',
			[FlightStatus.IN_THE_AIR]: 'In the Air',
			[FlightStatus.DELAYED]: 'Delayed',
			[FlightStatus.ON_TIME]: 'On Time',
		};

		return statusMap[this.status as FlightStatus] || 'Unknown';
	}

	getOperatingAndCode(): string {
		return `${this.getOperator()} ${this.getFlightNumber()}`;
	}

	getFormattedRoute(): string {
		return `${this.segment.departureAirport} to ${this.segment.arrivalAirport}`;
	}

	getFlightNumber(): string {
		return (
			this.segment.marketingFlightCode || this.segment.operatingFlightCode
		);
	}

	getOperator(): string {
		return this.segment.operatingCarrier || this.segment.marketingCarrier;
	}

	getAirline(): string {
		return this.segment.marketingCarrier || this.segment.operatingCarrier;
	}

	getDurationInHours(): string {
		const hours = Math.floor(this.totalFlightTimeInMinutes / 60);
		const minutes = this.totalFlightTimeInMinutes % 60;
		return `${hours}h ${minutes}m`;
	}

	getFormattedTime(date: string): string {
		if (isNaN(new Date(date).getTime())) {
			return '--';
		}

		const options: Intl.DateTimeFormatOptions = {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		};
		return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
	}

	getFormattedDate(date: string): string {
		if (isNaN(new Date(date).getTime())) {
			return '--';
		}

		return new Date(date).toLocaleDateString(undefined, {
			weekday: 'long',
			month: 'short',
			day: '2-digit',
		});
	}

	getDelayText(): string {
		if (this.delayInMinutes > 0) {
			const hours = Math.floor(this.delayInMinutes / 60);
			const minutes = this.delayInMinutes % 60;
			if (hours > 0) {
				return `${hours}h ${minutes}m delayed`;
			}
			return `${minutes}m delayed`;
		}
		return '';
	}
}
