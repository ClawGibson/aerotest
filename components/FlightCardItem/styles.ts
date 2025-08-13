import { styled } from 'styled-components/native';

import {
	FLIGHT_STATUS_COLOR,
	IDLE_COLOR,
} from '../../constants/FlightStatuses';

const FlightCard = styled.View`
	background-color: #ffffff;
	border-radius: 12px;
	padding: 20px;
	margin-bottom: 16px;
	border: 2px solid #000000;
`;

const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
`;

const StatusBadge = styled.View<{ status: string }>`
	background-color: ${(props) => {
		return (
			FLIGHT_STATUS_COLOR[
				props.status as keyof typeof FLIGHT_STATUS_COLOR
			] || IDLE_COLOR
		);
	}};
	border-radius: 4px;
	padding: 4px 8px;
	align-self: flex-start;
	margin-bottom: 12px;
`;

const StatusText = styled.Text`
	color: #ffffff;
	font-size: 12px;
	font-weight: 600;
`;

const FlightRoute = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 12px;
`;

const TimeContainer = styled.View`
	align-items: center;
`;

const Time = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: #000000;
`;

const Airport = styled.Text`
	font-size: 14px;
	color: #666666;
	margin-top: 4px;
`;

const FlightLine = styled.View`
	flex: 1;
	height: 2px;
	background-color: #000000;
	margin: 0 20px;
	position: relative;
`;

const FlightDot = styled.View`
	width: 8px;
	height: 8px;
	border-radius: 4px;
	background-color: #000000;
	position: absolute;
	top: -3px;
`;

const DurationContainer = styled.View`
	align-items: center;
	position: absolute;
	top: 10px;
	left: 50%;
`;

const Duration = styled.Text`
	font-size: 12px;
	color: #666666;
`;

const FlightInfo = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Divider = styled.View`
	height: 1px;
	background-color: #666666;
	margin: 12px -16px;
`;

const FlightCode = styled.Text`
	font-size: 14px;
	font-weight: 600;
	color: #000000;
`;

const DetailsButton = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;

const DetailsText = styled.Text`
	font-size: 14px;
	color: #000000;
	margin-right: 4px;
	text-decoration: underline;
`;

export const FlightCardItemStyles = {
	Header,
	FlightCard,
	StatusBadge,
	StatusText,
	FlightRoute,
	TimeContainer,
	Time,
	Airport,
	FlightLine,
	FlightDot,
	DurationContainer,
	Duration,
	FlightInfo,
	Divider,
	FlightCode,
	DetailsButton,
	DetailsText,
};
