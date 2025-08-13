import { FlightStatus } from '../types';

export const FLIGHT_STATUS_COLOR: Record<FlightStatus, string> = {
	[FlightStatus.IN_THE_AIR]: '#1872B3',
	[FlightStatus.DELAYED]: '#FECB2F',
	[FlightStatus.ON_TIME]: '#2E9509',
	[FlightStatus.ARRIVED]: '#000000',
};

export const IDLE_COLOR = '#666666';
