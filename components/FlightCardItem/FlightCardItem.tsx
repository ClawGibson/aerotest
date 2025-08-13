import React from 'react';

import { CustomToggle } from '../CustomToggle/CustomToggle';
import { FlightCardItemStyles } from './styles';

interface FlightCardItemProps {
	id: string;
	status: string;
	isFavorite: boolean;
	departureAirport: string;
	arrivalAirport: string;
	showToggle?: boolean;
	statusText: string;
	formattedTime: string;
	operatingAndCode: string;
	durationInHours: string;
	onSeeDetails: (id: string) => void;
	onFavoriteToggle: () => void;
}

export const FlightCardItem: React.FC<FlightCardItemProps> = ({
	id,
	status,
	isFavorite,
	departureAirport,
	arrivalAirport,
	showToggle = true,
	statusText,
	formattedTime,
	operatingAndCode,
	durationInHours,
	onSeeDetails,
	onFavoriteToggle,
}) => {
	return (
		<FlightCardItemStyles.FlightCard>
			<FlightCardItemStyles.Header>
				<FlightCardItemStyles.StatusBadge status={status}>
					<FlightCardItemStyles.StatusText>
						{statusText}
					</FlightCardItemStyles.StatusText>
				</FlightCardItemStyles.StatusBadge>
				{showToggle && (
					<CustomToggle onToggle={onFavoriteToggle} active={isFavorite} />
				)}
			</FlightCardItemStyles.Header>
			<FlightCardItemStyles.FlightRoute>
				<FlightCardItemStyles.TimeContainer>
					<FlightCardItemStyles.Time>
						{formattedTime}
					</FlightCardItemStyles.Time>
					<FlightCardItemStyles.Airport>
						{departureAirport}
					</FlightCardItemStyles.Airport>
				</FlightCardItemStyles.TimeContainer>

				<FlightCardItemStyles.FlightLine>
					<FlightCardItemStyles.FlightDot style={{ left: 0 }} />
					<FlightCardItemStyles.FlightDot style={{ right: 0 }} />
					<FlightCardItemStyles.DurationContainer>
						<FlightCardItemStyles.Duration>
							{durationInHours}
						</FlightCardItemStyles.Duration>
					</FlightCardItemStyles.DurationContainer>
				</FlightCardItemStyles.FlightLine>

				<FlightCardItemStyles.TimeContainer>
					<FlightCardItemStyles.Time>
						{formattedTime}
					</FlightCardItemStyles.Time>
					<FlightCardItemStyles.Airport>
						{arrivalAirport}
					</FlightCardItemStyles.Airport>
				</FlightCardItemStyles.TimeContainer>
			</FlightCardItemStyles.FlightRoute>
			<FlightCardItemStyles.Divider />
			<FlightCardItemStyles.FlightInfo>
				<FlightCardItemStyles.FlightCode>
					{operatingAndCode}
				</FlightCardItemStyles.FlightCode>
				<FlightCardItemStyles.DetailsButton
					onPress={() => onSeeDetails(id)}
				>
					<FlightCardItemStyles.DetailsText>
						Details
					</FlightCardItemStyles.DetailsText>
					<FlightCardItemStyles.DetailsText>
						›
					</FlightCardItemStyles.DetailsText>
				</FlightCardItemStyles.DetailsButton>
			</FlightCardItemStyles.FlightInfo>
		</FlightCardItemStyles.FlightCard>
	);
};
