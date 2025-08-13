import { ImageBackground, SafeAreaView } from 'react-native';
import { styled } from 'styled-components/native';

import {
	FLIGHT_STATUS_COLOR,
	IDLE_COLOR,
} from '../../constants/FlightStatuses';

const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: #ffffff;
`;

const BackgroundImage = styled(ImageBackground)`
	width: 100%;
	height: 250px;
	position: relative;
`;

const HeaderContent = styled.View`
	position: relative;
	top: 60px;
	left: 20px;
	right: 20px;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
`;

const BackButton = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	background-color: rgba(255, 255, 255, 0.9);
	align-items: center;
	justify-content: center;
`;

const BackText = styled.Text`
	font-size: 50px;
	color: #000000;
	line-height: 40px;
`;

const FlightHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 12px;
	margin-bottom: 20px;
	border-bottom-width: 1px;
	border-bottom-color: #e9e9e9;
`;

const DepartureWrapper = styled.View`
	flex-direction: column;
`;

const FlightOperator = styled.Text`
	font-size: 24px;
	color: #666666;
`;

const FlightNumber = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: #000000;
`;

const FlightDate = styled.Text`
	font-size: 14px;
	color: #000000;
	margin-top: 4px;
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
	padding: 6px 12px;
	margin-top: 8px;
`;

const StatusText = styled.Text`
	color: #ffffff;
	font-size: 12px;
	font-weight: 600;
`;

const DetailsContainer = styled.View`
	flex: 1;
	background-color: #ffffff;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	margin-top: -20px;
	padding: 30px 20px;
`;

const FlightRoute = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 40px;
	padding-bottom: 12px;
	border-bottom-width: 1px;
	border-bottom-color: #e9e9e9;
`;

const TimeContainer = styled.View`
	align-items: center;
`;

const Time = styled.Text`
	font-size: 24px;
	font-weight: bold;
	color: #000000;
`;

const Airport = styled.Text`
	font-size: 16px;
	color: #666666;
	margin-top: 4px;
`;

const FlightLine = styled.View`
	flex: 1;
	height: 2px;
	background-color: #000000;
	margin: 0 30px;
	position: relative;
`;

const FlightDot = styled.View`
	width: 10px;
	height: 10px;
	border-radius: 5px;
	background-color: #000000;
	position: absolute;
	top: -4px;
`;

const PlaneIcon = styled.View`
	width: 20px;
	height: 20px;
	background-color: #000000;
	border-radius: 10px;
	position: absolute;
	top: -9px;
	left: 60%;
`;

const SectionTitle = styled.Text`
	font-size: 20px;
	font-weight: bold;
	color: #000000;
	margin-bottom: 20px;
`;

const DetailSection = styled.View`
	margin-bottom: 30px;
`;

const DetailHeader = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 16px;
`;

const DetailIcon = styled.Text`
	font-size: 16px;
	margin-right: 12px;
`;

const DetailTitle = styled.Text`
	font-size: 16px;
	font-weight: 600;
	color: #000000;
	flex: 1;
`;

const DetailLocation = styled.Text`
	font-size: 14px;
	color: #666666;
`;

const DetailRowWrapper = styled.View`
	background-color: #f7f7f7;
	padding: 10px 15px;
	border-radius: 8px;
`;

const DetailRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 8px;
`;

const DetailLabel = styled.Text`
	font-size: 12px;
	color: #000000;
	flex: 1;
`;

const DetailValue = styled.Text`
	font-size: 14px;
	font-weight: 700;
	color: #000000;
	flex: 1;
	text-align: left;
`;

const LoadingContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const LoadingText = styled.Text`
	font-size: 16px;
	color: #666666;
`;

const ErrorContainer = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	padding: 20px;
`;

const ErrorText = styled.Text`
	font-size: 16px;
	color: #f44336;
	text-align: center;
`;

export const FlightDetailsStyles = {
	Container,
	LoadingContainer,
	LoadingText,
	ErrorContainer,
	ErrorText,
	BackgroundImage,
	HeaderContent,
	BackButton,
	BackText,
	FlightHeader,
	DepartureWrapper,
	FlightOperator,
	FlightNumber,
	FlightDate,
	StatusBadge,
	StatusText,
	DetailsContainer,
	FlightRoute,
	TimeContainer,
	Time,
	Airport,
	FlightLine,
	FlightDot,
	PlaneIcon,
	SectionTitle,
	DetailSection,
	DetailHeader,
	DetailIcon,
	DetailTitle,
	DetailLocation,
	DetailRowWrapper,
	DetailRow,
	DetailLabel,
	DetailValue,
};
