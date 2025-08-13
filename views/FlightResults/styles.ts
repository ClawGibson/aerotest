import { SafeAreaView } from 'react-native';
import { styled } from 'styled-components/native';

const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: #ffffff;
`;

const Header = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid #f0f0f0;
`;

const BackButton = styled.TouchableOpacity`
	margin-right: 20px;
	padding: 8px;
`;

const BackText = styled.Text`
	font-size: 32px;
	color: #000000;
`;

const HeaderContent = styled.View`
	flex: 1;
	align-items: space-between;
`;

const FlightNumber = styled.Text`
	font-size: 24px;
	font-weight: 600;
	color: #000000;
	text-align: right;
`;

const FlightDate = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: 4px;
`;

const DateText = styled.Text`
	font-size: 14px;
	color: #666666;
	margin-right: 8px;
`;

const ChangeButton = styled.TouchableOpacity`
	padding: 4px 8px;
	border-radius: 4px;
`;

const ChangeText = styled.Text`
	font-size: 12px;
	color: #000000;
	text-decoration: underline;
`;

const Content = styled.View`
	flex: 1;
	padding: 20px;
`;

const RouteHeader = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;

const RouteTitle = styled.Text`
	font-size: 16px;
	font-weight: 600;
	color: #000000;
`;

const ResultsCount = styled.Text`
	font-size: 14px;
	color: #666666;
`;

const EmptyState = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const EmptyText = styled.Text`
	font-size: 16px;
	color: #666666;
	text-align: center;
`;

export const FlightResultsStyles = {
	Container,
	Header,
	BackButton,
	BackText,
	HeaderContent,
	FlightNumber,
	FlightDate,
	DateText,
	ChangeButton,
	ChangeText,
	Content,
	RouteHeader,
	RouteTitle,
	ResultsCount,
	EmptyState,
	EmptyText,
};
