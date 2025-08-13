import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StatusBar } from 'react-native';

import { CITY_NAMES_BY_AIRPORT } from '../../constants/Cities';
import { useFlightDetailsViewModel } from '../../viewmodels/FlightDetailsViewModel';
import { FlightDetailsStyles } from './styles';

export const FlightDetailsScreen: React.FC = () => {
	const router = useRouter();
	const { selectedFlight, loading, error } = useFlightDetailsViewModel();

	const handleBack = () => {
		router.back();
	};

	if (loading) {
		return (
			<FlightDetailsStyles.Container>
				<FlightDetailsStyles.LoadingContainer>
					<FlightDetailsStyles.LoadingText>
						Loading flight details...
					</FlightDetailsStyles.LoadingText>
				</FlightDetailsStyles.LoadingContainer>
			</FlightDetailsStyles.Container>
		);
	}

	if (error || !selectedFlight) {
		return (
			<FlightDetailsStyles.Container>
				<FlightDetailsStyles.ErrorContainer>
					<FlightDetailsStyles.ErrorText>
						{error || 'Flight details not available'}
					</FlightDetailsStyles.ErrorText>
				</FlightDetailsStyles.ErrorContainer>
			</FlightDetailsStyles.Container>
		);
	}

	return (
		<FlightDetailsStyles.Container>
			<StatusBar barStyle='light-content' />

			<FlightDetailsStyles.BackgroundImage
				source={{
					uri: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3',
				}}
			>
				<FlightDetailsStyles.HeaderContent>
					<FlightDetailsStyles.BackButton onPress={handleBack}>
						<FlightDetailsStyles.BackText>‹</FlightDetailsStyles.BackText>
					</FlightDetailsStyles.BackButton>
				</FlightDetailsStyles.HeaderContent>
			</FlightDetailsStyles.BackgroundImage>

			<FlightDetailsStyles.DetailsContainer>
				<ScrollView showsVerticalScrollIndicator={false}>
					<FlightDetailsStyles.FlightHeader>
						<FlightDetailsStyles.DepartureWrapper>
							<FlightDetailsStyles.FlightNumber>
								<FlightDetailsStyles.FlightOperator>
									{selectedFlight.operator}{' '}
								</FlightDetailsStyles.FlightOperator>
								{selectedFlight.flightNumber}
							</FlightDetailsStyles.FlightNumber>
							<FlightDetailsStyles.FlightDate>
								{selectedFlight.formattedDate}
							</FlightDetailsStyles.FlightDate>
						</FlightDetailsStyles.DepartureWrapper>
						<FlightDetailsStyles.StatusBadge
							status={selectedFlight.status}
						>
							<FlightDetailsStyles.StatusText>
								{selectedFlight.statusText}
							</FlightDetailsStyles.StatusText>
						</FlightDetailsStyles.StatusBadge>
					</FlightDetailsStyles.FlightHeader>
					<FlightDetailsStyles.FlightRoute>
						<FlightDetailsStyles.TimeContainer>
							<FlightDetailsStyles.Time>
								{selectedFlight.formattedTime}
							</FlightDetailsStyles.Time>
							<FlightDetailsStyles.Airport>
								{selectedFlight.departureAirport}
							</FlightDetailsStyles.Airport>
						</FlightDetailsStyles.TimeContainer>

						<FlightDetailsStyles.FlightLine>
							<FlightDetailsStyles.FlightDot style={{ left: 0 }} />
							<FlightDetailsStyles.FlightDot style={{ right: 0 }} />
							<FlightDetailsStyles.PlaneIcon />
						</FlightDetailsStyles.FlightLine>

						<FlightDetailsStyles.TimeContainer>
							<FlightDetailsStyles.Time>
								{selectedFlight.formattedTime}
							</FlightDetailsStyles.Time>
							<FlightDetailsStyles.Airport>
								{selectedFlight.arrivalAirport}
							</FlightDetailsStyles.Airport>
						</FlightDetailsStyles.TimeContainer>
					</FlightDetailsStyles.FlightRoute>

					<FlightDetailsStyles.SectionTitle>
						Flight details
					</FlightDetailsStyles.SectionTitle>

					<FlightDetailsStyles.DetailSection>
						<FlightDetailsStyles.DetailHeader>
							<FlightDetailsStyles.DetailIcon>
								🛫
							</FlightDetailsStyles.DetailIcon>
							<FlightDetailsStyles.DetailTitle>
								Departure
							</FlightDetailsStyles.DetailTitle>
							<FlightDetailsStyles.DetailLocation>
								{CITY_NAMES_BY_AIRPORT[selectedFlight.departureAirport]}{' '}
								- {selectedFlight.boardingTerminal}
							</FlightDetailsStyles.DetailLocation>
						</FlightDetailsStyles.DetailHeader>

						<FlightDetailsStyles.DetailRowWrapper>
							<FlightDetailsStyles.DetailRow>
								<FlightDetailsStyles.DetailLabel>
									Terminal
								</FlightDetailsStyles.DetailLabel>
								<FlightDetailsStyles.DetailLabel>
									Gate
								</FlightDetailsStyles.DetailLabel>
								<FlightDetailsStyles.DetailLabel>
									Boarding
								</FlightDetailsStyles.DetailLabel>
							</FlightDetailsStyles.DetailRow>

							<FlightDetailsStyles.DetailRow>
								<FlightDetailsStyles.DetailValue>
									{selectedFlight.arrivalTerminal || 'N/A'}
								</FlightDetailsStyles.DetailValue>
								<FlightDetailsStyles.DetailValue>
									{selectedFlight.arrivalGate || 'N/A'}
								</FlightDetailsStyles.DetailValue>
								<FlightDetailsStyles.DetailValue>
									{selectedFlight.boardingTime}
								</FlightDetailsStyles.DetailValue>
							</FlightDetailsStyles.DetailRow>
						</FlightDetailsStyles.DetailRowWrapper>
					</FlightDetailsStyles.DetailSection>

					<FlightDetailsStyles.DetailSection>
						<FlightDetailsStyles.DetailHeader>
							<FlightDetailsStyles.DetailIcon>
								🛬
							</FlightDetailsStyles.DetailIcon>
							<FlightDetailsStyles.DetailTitle>
								Arrival
							</FlightDetailsStyles.DetailTitle>
							<FlightDetailsStyles.DetailLocation>
								{CITY_NAMES_BY_AIRPORT[selectedFlight.arrivalAirport]} -
								Terminal {selectedFlight.arrivalTerminal}
							</FlightDetailsStyles.DetailLocation>
						</FlightDetailsStyles.DetailHeader>

						<FlightDetailsStyles.DetailRowWrapper>
							<FlightDetailsStyles.DetailRow>
								<FlightDetailsStyles.DetailLabel>
									Terminal
								</FlightDetailsStyles.DetailLabel>
								<FlightDetailsStyles.DetailLabel>
									Est. Landing
								</FlightDetailsStyles.DetailLabel>
							</FlightDetailsStyles.DetailRow>

							<FlightDetailsStyles.DetailRow>
								<FlightDetailsStyles.DetailValue>
									{selectedFlight.arrivalTerminal}
								</FlightDetailsStyles.DetailValue>
								<FlightDetailsStyles.DetailValue>
									{selectedFlight.formattedTime}
								</FlightDetailsStyles.DetailValue>
							</FlightDetailsStyles.DetailRow>
						</FlightDetailsStyles.DetailRowWrapper>
					</FlightDetailsStyles.DetailSection>
				</ScrollView>
			</FlightDetailsStyles.DetailsContainer>
		</FlightDetailsStyles.Container>
	);
};
