import { Animated } from 'react-native';
import { styled } from 'styled-components/native';

const Container = styled.View<{ disabled?: boolean }>`
	margin-bottom: 16px;
	opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const InputContainer = styled.View<{
	focused: boolean;
	error?: string;
	disabled?: boolean;
}>`
	width: 100%;
	flex-direction: row;
	align-items: center;
	border-width: 1px;
	border-color: #000000;
	border-radius: 8px;
	background-color: #ffffff;
	min-height: 56px;
	padding-horizontal: 12px;
	position: relative;
`;

const LeftContainer = styled.View`
	margin-right: 8px;
	align-items: center;
	justify-content: center;
`;

const RightContainer = styled.View`
	margin-left: 8px;
	align-items: center;
	justify-content: center;
`;

const StyledTextInput = styled.TextInput<{
	hasLeftElement: boolean;
	hasRightElement: boolean;
	value: string;
}>`
	flex: 1;
	font-size: 16px;
	color: #000000;
	font-weight: ${(props) => (props.value ? 'bold' : 'normal')};
	padding-top: 20px;
	padding-bottom: 8px;
	padding-left: ${(props) => (props.hasLeftElement ? 0 : 4)}px;
	padding-right: ${(props) => (props.hasRightElement ? 0 : 4)}px;
`;

const LabelContainer = styled(Animated.View)`
	position: absolute;
	left: 12px;
	pointer-events: none;
`;

const Label = styled(Animated.Text)<{ focused: boolean; error?: string }>`
	color: #000000;
	background-color: #ffffff;
	padding-horizontal: 4px;
`;

const SideText = styled.Text<{ position: 'left' | 'right' }>`
	font-size: 14px;
	color: #0000004d;
	font-weight: 600;
	padding-top: 20px;
	padding-bottom: 8px;
`;

const ErrorText = styled.Text`
	color: #f44336;
	font-size: 12px;
	margin-top: 4px;
	margin-left: 12px;
`;

export const FloatingLabelInputStyles = {
	Container,
	InputContainer,
	LeftContainer,
	RightContainer,
	StyledTextInput,
	LabelContainer,
	Label,
	SideText,
	ErrorText,
};
