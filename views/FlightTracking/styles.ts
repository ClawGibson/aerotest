import { SafeAreaView } from 'react-native';
import { styled } from 'styled-components/native';

const Container = styled(SafeAreaView)`
	margin-top: 60px;
	flex: 1;
	background-color: #ffffff;
`;

const Content = styled.View`
	flex: 1;
	padding: 20px;
`;

const Header = styled.View`
	margin-bottom: 30px;
`;

const Title = styled.Text`
	font-size: 26px;
	line-height: 32px;
	font-weight: 600;
	color: #000000;
	margin-bottom: 8px;
	text-align: center;
`;

const Subtitle = styled.Text`
	font-size: 16px;
	color: #666666;
	text-align: center;
`;

const TabContainer = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
	border-width: 1px;
	border-color: #e0e0e0;
	border-radius: 4px;
	align-self: center;
	padding: 4px;
`;

const Tab = styled.TouchableOpacity<{ active: boolean }>`
	padding: 12px 24px;
	background-color: ${(props) => (props.active ? '#000000' : 'transparent')};
	border-radius: 4px;
`;

const TabText = styled.Text<{ active: boolean }>`
	color: ${(props) => (props.active ? '#ffffff' : '#000000')};
	font-weight: 600;
`;

const InputContainer = styled.View`
	flex-direction: row;
	margin-bottom: 30px;
	gap: 12px;
`;

const InputWrapper = styled.View`
	flex: 1;
	min-width: 0;
`;

const FirstInputWrapper = styled.View`
	flex: 2;
	min-width: 0;
`;

const SecondInputWrapper = styled.View`
	flex: 3;
	min-width: 0;
`;

const InputLabel = styled.Text`
	font-size: 12px;
	color: #000000;
	margin-bottom: 8px;
`;

const Input = styled.TextInput`
	border: 2px solid #000000;
	border-radius: 8px;
	padding: 16px;
	font-size: 16px;
	background-color: #ffffff;
`;

const DateInputWrapper = styled.TouchableOpacity`
	border: 2px solid #000000;
	border-radius: px;
	padding: 16px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const DateText = styled.Text`
	font-size: 16px;
	color: #000000;
`;

const SearchButton = styled.TouchableOpacity<{ disabled: boolean }>`
	background-color: ${(props) => (props.disabled ? '#cccccc' : '#000000')};
	border-radius: 8px;
	padding: 18px;
	align-items: center;
	margin-bottom: 30px;
`;

const SearchButtonText = styled.Text`
	color: #ffffff;
	font-size: 16px;
	font-weight: 600;
`;

const HelpText = styled.Text`
	text-align: center;
	color: #666666;
	font-size: 14px;
	line-height: 20px;
`;

const HelpLink = styled.Text`
	color: #000000;
	text-decoration-line: underline;
`;

const ErrorText = styled.Text`
	color: #f44336;
	text-align: center;
	margin-bottom: 16px;
`;

export const FlightTrackingStyles = {
	Container,
	Content,
	Header,
	Title,
	Subtitle,
	TabContainer,
	Tab,
	TabText,
	InputContainer,
	InputWrapper,
	InputLabel,
	Input,
	DateInputWrapper,
	DateText,
	SearchButton,
	SearchButtonText,
	HelpText,
	HelpLink,
	ErrorText,
	FirstInputWrapper,
	SecondInputWrapper,
};
