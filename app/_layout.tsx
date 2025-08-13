import { Slot } from 'expo-router';
import 'react-native-get-random-values';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { store } from '../store';

export default function RootLayout() {
	return (
		<Provider store={store}>
			<Slot />
		</Provider>
	);
}
