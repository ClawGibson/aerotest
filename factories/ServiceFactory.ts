import {
	FlightRepository,
	IFlightRepository,
} from '../repositories/FlightRepository';

export enum ServiceType {
	FLIGHT_REPOSITORY = 'FLIGHT_REPOSITORY',
}

export class ServiceFactory {
	private static instances: Map<ServiceType, any> = new Map();

	static create<T>(serviceType: ServiceType): T {
		if (this.instances.has(serviceType)) {
			return this.instances.get(serviceType);
		}

		let instance: any;

		switch (serviceType) {
			case ServiceType.FLIGHT_REPOSITORY:
				instance = new FlightRepository();
				break;
			default:
				throw new Error(`Unknown service type: ${serviceType}`);
		}

		this.instances.set(serviceType, instance);
		return instance;
	}

	static createFlightRepository(): IFlightRepository {
		return this.create<IFlightRepository>(ServiceType.FLIGHT_REPOSITORY);
	}
}
