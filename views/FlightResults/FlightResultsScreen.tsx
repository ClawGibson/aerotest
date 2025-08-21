import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StatusBar } from 'react-native';

import { FlightCardItem } from '../../components/FlightCardItem/FlightCardItem';
import { useFlightContext } from '../../contexts/FlightContext';
import { useFlightDetailsViewModel } from '../../viewmodels/FlightDetailsViewModel';
import { FlightResultsStyles } from './styles';

export const FlightResultsScreen: React.FC = () => {
	const { hideFav } = useLocalSearchParams<{ hideFav?: string }>();

	const router = useRouter();
	const { selectFlight, onUpdateFavorite } = useFlightDetailsViewModel();
	const { flightsVM: flights } = useFlightContext();

	const handleUpdateFavorite = (flightId: string) => {
		onUpdateFavorite(flightId);
	};

	const handleFlightPress = (id: string) => {
		selectFlight(id);
		router.push('/flight-details');
	};
	const handleBack = () => {
		router.back();
	};

	return (
		<FlightResultsStyles.Container>
			<StatusBar barStyle='dark-content' />
			<FlightResultsStyles.Header>
				<FlightResultsStyles.BackButton onPress={handleBack}>
					<FlightResultsStyles.BackText>‹</FlightResultsStyles.BackText>
				</FlightResultsStyles.BackButton>
				<FlightResultsStyles.HeaderContent>
					<FlightResultsStyles.FlightNumber>
						{flights?.length > 0
							? flights[0].operatingAndCode
							: 'Flight Number'}
					</FlightResultsStyles.FlightNumber>
					<FlightResultsStyles.FlightDate>
						<FlightResultsStyles.DateText>
							{flights?.length > 0 ? flights[0].formattedTime : 'Date'}
						</FlightResultsStyles.DateText>
						<FlightResultsStyles.ChangeButton>
							<FlightResultsStyles.ChangeText>
								Change
							</FlightResultsStyles.ChangeText>
						</FlightResultsStyles.ChangeButton>
					</FlightResultsStyles.FlightDate>
				</FlightResultsStyles.HeaderContent>
			</FlightResultsStyles.Header>

			<FlightResultsStyles.Content>
				<FlightResultsStyles.RouteHeader>
					<FlightResultsStyles.RouteTitle>
						{flights?.length > 0 ? flights[0].route : 'Search Results'}
					</FlightResultsStyles.RouteTitle>
					<FlightResultsStyles.ResultsCount>
						{flights?.length} results
					</FlightResultsStyles.ResultsCount>
				</FlightResultsStyles.RouteHeader>
				<FlatList
					data={flights}
					keyExtractor={(item) => item.id + ':' + item.favorite}
					renderItem={({ item }) => (
						<FlightCardItem
							key={`${item.id}:${item.favorite}`}
							id={item.id}
							status={item.status}
							isFavorite={item.favorite}
							departureAirport={item.departureAirport}
							arrivalAirport={item.arrivalAirport}
							showToggle={hideFav !== 'true'}
							durationInHours={item.durationInHours}
							formattedTime={item.formattedTime}
							operatingAndCode={item.operatingAndCode}
							statusText={item.statusText}
							onSeeDetails={handleFlightPress}
							onFavoriteToggle={() => handleUpdateFavorite(item.id)}
						/>
					)}
					showsVerticalScrollIndicator={false}
					extraData={flights.map((flight) => flight.favorite)}
					ListEmptyComponent={
						<FlightResultsStyles.EmptyState>
							<FlightResultsStyles.EmptyText>
								No flights found for your search criteria
							</FlightResultsStyles.EmptyText>
						</FlightResultsStyles.EmptyState>
					}
				/>
			</FlightResultsStyles.Content>
		</FlightResultsStyles.Container>
	);
};
