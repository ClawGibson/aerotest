import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import 'react-native-get-random-values';
import 'react-native-reanimated';

import { FlightProvider } from '../contexts/FlightContext';

const queryClient = new QueryClient();

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<FlightProvider>
				<Slot />
			</FlightProvider>
		</QueryClientProvider>
	);
}
