import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { FloatingDateInput } from '../../components/FloatingLabelInput/FloatingDateInput';
import { FloatingLabelInput } from '../../components/FloatingLabelInput/FloatingLabelInput';
import { CalendarIcon } from '../../components/FloatingLabelInput/IconComponents';
import { ETrackerTabs } from '../../enums/ETrackerTabs';
import { useFlightTrackingViewModel } from '../../viewmodels/FlightTrackingViewModel';
import { FlightTrackingStyles } from './styles';

const INITIAL_FLIGHT_NUMBER = '500';
const INITIAL_DEPARTURE_CITY = 'Mexico City';
const INITIAL_ARRIVAL_CITY = 'Cancún';

export const FlightTrackingScreen: React.FC = () => {
	const router = useRouter();
	const [flightNumber, setFlightNumber] = useState(INITIAL_FLIGHT_NUMBER);
	const [departureCity, setDepartureCity] = useState(INITIAL_DEPARTURE_CITY);
	const [arrivalCity, setArrivalCity] = useState(INITIAL_ARRIVAL_CITY);

	const {
		loading,
		error,
		activeTab,
		selectedDate,
		handleTabChange,
		handleDateChange,
		handleFlightSearch,
		handleDestinationSearch,
	} = useFlightTrackingViewModel();

	const handleSearch = async () => {
		if (activeTab === ETrackerTabs.FLIGHT_NUMBER) {
			if (!flightNumber.trim()) return;
			await handleFlightSearch(flightNumber);
			router.push('/flight-results?hideFav=true');
		} else {
			if (!departureCity.trim() || !arrivalCity.trim()) return;
			await handleDestinationSearch(departureCity, arrivalCity);
			router.push('/flight-results?hideFav=false');
		}
	};

	const isSearchDisabled =
		loading ||
		(activeTab === ETrackerTabs.FLIGHT_NUMBER
			? !flightNumber.trim()
			: !departureCity.trim() || !arrivalCity.trim());

	return (
		<FlightTrackingStyles.Container>
			<StatusBar barStyle='dark-content' />
			<FlightTrackingStyles.Content>
				<FlightTrackingStyles.Header>
					<FlightTrackingStyles.Title>
						Track your flight
					</FlightTrackingStyles.Title>
					<FlightTrackingStyles.Subtitle>
						Keep you informed in real time!
					</FlightTrackingStyles.Subtitle>
				</FlightTrackingStyles.Header>

				<FlightTrackingStyles.TabContainer>
					<FlightTrackingStyles.Tab
						active={activeTab === ETrackerTabs.FLIGHT_NUMBER}
						onPress={() => handleTabChange(ETrackerTabs.FLIGHT_NUMBER)}
					>
						<FlightTrackingStyles.TabText
							active={activeTab === ETrackerTabs.FLIGHT_NUMBER}
						>
							Flight Number
						</FlightTrackingStyles.TabText>
					</FlightTrackingStyles.Tab>
					<FlightTrackingStyles.Tab
						active={activeTab === ETrackerTabs.DESTINATION}
						onPress={() => handleTabChange(ETrackerTabs.DESTINATION)}
					>
						<FlightTrackingStyles.TabText
							active={activeTab === ETrackerTabs.DESTINATION}
						>
							Destination
						</FlightTrackingStyles.TabText>
					</FlightTrackingStyles.Tab>
				</FlightTrackingStyles.TabContainer>

				{activeTab === ETrackerTabs.FLIGHT_NUMBER ? (
					<FlightTrackingStyles.InputContainer>
						<FlightTrackingStyles.FirstInputWrapper>
							<FloatingLabelInput
								label='Flight number'
								value={flightNumber}
								onChangeText={setFlightNumber}
								autoCapitalize='characters'
								keyboardType='numeric'
								leftText='AM'
							/>
						</FlightTrackingStyles.FirstInputWrapper>
						<FlightTrackingStyles.SecondInputWrapper>
							<FloatingDateInput
								label='Date of departure'
								value={selectedDate}
								onChange={handleDateChange}
								rightIcon={<CalendarIcon />}
							/>
						</FlightTrackingStyles.SecondInputWrapper>
					</FlightTrackingStyles.InputContainer>
				) : (
					<>
						<FlightTrackingStyles.InputContainer>
							<FlightTrackingStyles.InputWrapper>
								<FloatingLabelInput
									label='Origin'
									value={departureCity}
									onChangeText={setDepartureCity}
									autoCapitalize='characters'
									rightText='MEX'
								/>
							</FlightTrackingStyles.InputWrapper>
							<FlightTrackingStyles.InputWrapper>
								<FloatingLabelInput
									label='Destination'
									value={arrivalCity}
									onChangeText={setArrivalCity}
									autoCapitalize='characters'
									rightText='CUN'
								/>
							</FlightTrackingStyles.InputWrapper>
						</FlightTrackingStyles.InputContainer>
						<FloatingDateInput
							label='Date of departure'
							value={selectedDate}
							onChange={handleDateChange}
							rightIcon={<CalendarIcon />}
						/>
					</>
				)}

				{error && (
					<FlightTrackingStyles.ErrorText>
						{error}
					</FlightTrackingStyles.ErrorText>
				)}

				<FlightTrackingStyles.SearchButton
					disabled={isSearchDisabled}
					onPress={handleSearch}
				>
					<FlightTrackingStyles.SearchButtonText>
						{loading ? 'Searching...' : 'Search Flight'}
					</FlightTrackingStyles.SearchButtonText>
				</FlightTrackingStyles.SearchButton>

				<FlightTrackingStyles.HelpText>
					Can&apos;t find your flight number?{'\n'}
					Try searching by{' '}
					<FlightTrackingStyles.HelpLink>
						{activeTab === ETrackerTabs.FLIGHT_NUMBER
							? 'destination'
							: 'flight number'}
					</FlightTrackingStyles.HelpLink>
				</FlightTrackingStyles.HelpText>
			</FlightTrackingStyles.Content>
		</FlightTrackingStyles.Container>
	);
};
