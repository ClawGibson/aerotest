import React from 'react';
import { Pressable } from 'react-native';
import { TOGGLE_SIZES } from './sizes';
import { CustomToggleStyles } from './styles';

interface CustomToggleProps {
	active: boolean;
	onToggle: () => void;
	disabled?: boolean;
	activeColor?: string;
	inactiveColor?: string;
	thumbColor?: string;
	size?: 'small' | 'medium' | 'large';
	customWidth?: number;
	customHeight?: number;
}

export const CustomToggle: React.FC<CustomToggleProps> = ({
	active,
	onToggle,
	disabled = false,
	activeColor = '#007CC2',
	inactiveColor = '#D6D6D6',
	thumbColor = '#ffffff',
	size = 'small',
	customWidth,
	customHeight,
}) => {
	const s = TOGGLE_SIZES[size];
	const finalWidth = customWidth || s.width;
	const finalHeight = customHeight || s.height;
	const thumbSize = s.thumbSize;
	const padding = s.padding;

	const maxTranslateX = finalWidth - thumbSize - padding * 3;
	const translateX = active ? maxTranslateX : 0;

	return (
		<CustomToggleStyles.Container key={active ? 'on' : 'off'}>
			<CustomToggleStyles.Label>Favorite</CustomToggleStyles.Label>
			<Pressable onPress={onToggle}>
				<CustomToggleStyles.ToggleContainer
					width={finalWidth}
					height={finalHeight}
					backgroundColor={active ? activeColor : inactiveColor}
					style={{ borderColor: active ? activeColor : inactiveColor }}
				>
					<CustomToggleStyles.Track
						height={finalHeight}
						inactiveColor={inactiveColor}
					/>
					<CustomToggleStyles.ActiveTrack
						height={finalHeight}
						activeColor={activeColor}
						style={{ opacity: active ? 1 : 0 }}
					/>
					<CustomToggleStyles.ThumbContainer
						thumbSize={thumbSize}
						padding={padding}
						style={{
							transform: [{ translateX }],
							backgroundColor: thumbColor,
						}}
					>
						<CustomToggleStyles.ThumbIcon size={thumbSize} />
					</CustomToggleStyles.ThumbContainer>
				</CustomToggleStyles.ToggleContainer>
			</Pressable>
		</CustomToggleStyles.Container>
	);
};
