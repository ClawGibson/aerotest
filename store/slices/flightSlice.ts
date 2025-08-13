import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ServiceFactory } from '../../factories/ServiceFactory';
import { Flight } from '../../types';

interface FlightState {
	flights: Flight[];
	selectedFlight: Flight | null;
	loading: boolean;
	error: string | null;
}

const initialState: FlightState = {
	flights: [],
	selectedFlight: null,
	loading: false,
	error: null,
};

export const trackFlight = createAsyncThunk(
	'flight/trackFlight',
	async ({ flightNumber, date }: { flightNumber: string; date: string }) => {
		const repository = ServiceFactory.createFlightRepository();
		const response = await repository.trackFlight(flightNumber, date);

		if (!response) {
			throw new Error('Tracking failed');
		}

		return response.map((flight) => ({ ...flight } as Flight));
	},
);

export const getFlightDestinations = createAsyncThunk(
	'flight/getFlightDestinations',
	async ({
		origin,
		destination,
		date,
	}: {
		origin: string;
		destination: string;
		date: string;
	}) => {
		const repository = ServiceFactory.createFlightRepository();
		const response = await repository.getFlightDestinations(
			origin,
			destination,
			date,
		);

		if (!response) {
			throw new Error('Failed to get flight destinations');
		}

		return response.map((flight) => ({ ...flight } as Flight));
	},
);

const flightSlice = createSlice({
	name: 'flight',
	initialState,
	reducers: {
		setSelectedFlight: (state, action: PayloadAction<string>) => {
			const foundFlight = state.flights.find(
				(flight) => flight.id === action.payload,
			);
			state.selectedFlight = foundFlight || null;
		},
		clearFlights: (state) => {
			state.flights = [];
			state.selectedFlight = null;
			state.error = null;
		},
		updateFlightFavorite: (state, { payload: id }: PayloadAction<string>) => {
			const updated = state.flights.map((f) => {
				if (f.id !== id) return { ...f };
				return { ...f, favorite: !f.favorite };
			});

			state.flights = updated
				.slice()
				.sort((a, b) => Number(b.favorite) - Number(a.favorite));
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(trackFlight.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(trackFlight.fulfilled, (state, action) => {
				state.loading = false;
				state.flights = action.payload;
			})
			.addCase(trackFlight.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Tracking failed';
			})
			.addCase(getFlightDestinations.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getFlightDestinations.fulfilled, (state, action) => {
				state.loading = false;
				state.flights = action.payload;
			})
			.addCase(getFlightDestinations.rejected, (state, action) => {
				state.loading = false;
				state.error =
					action.error.message || 'Failed to get flight destinations';
			});
	},
});

export const { setSelectedFlight, clearFlights, updateFlightFavorite } =
	flightSlice.actions;
export default flightSlice.reducer;
