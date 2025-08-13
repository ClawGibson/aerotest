import React, { useRef, useState } from 'react';
import { Animated, TextInput, TextInputProps } from 'react-native';

import { FloatingLabelInputStyles } from './styles';

interface FloatingLabelInputProps
	extends Omit<TextInputProps, 'value' | 'onChangeText'> {
	label: string;
	value: string;
	onChangeText: (text: string) => void;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	leftText?: string;
	rightText?: string;
	error?: string;
	disabled?: boolean;
	containerStyle?: any;
	inputStyle?: any;
	labelStyle?: any;
	errorStyle?: any;
}

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
	label,
	value,
	onChangeText,
	leftIcon,
	rightIcon,
	leftText,
	rightText,
	error,
	disabled = false,
	containerStyle,
	inputStyle,
	labelStyle,
	errorStyle,
	...textInputProps
}) => {
	const [focused, setFocused] = useState(false);
	const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;
	const inputRef = useRef<TextInput>(null);

	const hasLeftElement = Boolean(leftIcon || leftText);
	const hasRightElement = Boolean(rightIcon || rightText);

	const handleFocus = () => {
		if (disabled) return;
		setFocused(true);
		animateLabel(1);
	};

	const handleBlur = () => {
		setFocused(false);
		if (!value) {
			animateLabel(0);
		}
	};

	const animateLabel = (toValue: number) => {
		Animated.timing(animatedValue, {
			toValue,
			duration: 200,
			useNativeDriver: false,
		}).start();
	};

	React.useEffect(() => {
		if (value && animatedValue._value === 0) {
			animateLabel(1);
		} else if (!value && !focused && animatedValue._value === 1) {
			animateLabel(0);
		}
	}, [value, focused]);

	const labelTop = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [16, 4],
	});

	const labelFontSize = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [16, 12],
	});

	const handleContainerPress = () => {
		if (!disabled && inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<FloatingLabelInputStyles.Container
			disabled={disabled}
			style={containerStyle}
		>
			<FloatingLabelInputStyles.InputContainer
				focused={focused}
				error={error}
				disabled={disabled}
				onTouchableOpacity={handleContainerPress}
			>
				{hasLeftElement && (
					<FloatingLabelInputStyles.LeftContainer>
						{leftIcon || (
							<FloatingLabelInputStyles.SideText position='left'>
								{leftText}
							</FloatingLabelInputStyles.SideText>
						)}
					</FloatingLabelInputStyles.LeftContainer>
				)}
				<FloatingLabelInputStyles.StyledTextInput
					ref={inputRef}
					value={value}
					onChangeText={onChangeText}
					onFocus={handleFocus}
					onBlur={handleBlur}
					hasLeftElement={hasLeftElement}
					hasRightElement={hasRightElement}
					editable={!disabled}
					style={inputStyle}
					{...textInputProps}
				/>
				<FloatingLabelInputStyles.LabelContainer
					style={[
						{
							top: labelTop,
						},
					]}
				>
					<FloatingLabelInputStyles.Label
						focused={focused}
						error={error}
						style={[
							{
								fontSize: labelFontSize,
							},
							labelStyle,
						]}
					>
						{label}
					</FloatingLabelInputStyles.Label>
				</FloatingLabelInputStyles.LabelContainer>
				{hasRightElement && (
					<FloatingLabelInputStyles.RightContainer>
						{rightIcon || (
							<FloatingLabelInputStyles.SideText position='right'>
								{rightText}
							</FloatingLabelInputStyles.SideText>
						)}
					</FloatingLabelInputStyles.RightContainer>
				)}
			</FloatingLabelInputStyles.InputContainer>
			{error && (
				<FloatingLabelInputStyles.ErrorText style={errorStyle}>
					{error}
				</FloatingLabelInputStyles.ErrorText>
			)}
		</FloatingLabelInputStyles.Container>
	);
};
