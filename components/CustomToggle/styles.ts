import { styled } from 'styled-components/native';

const Container = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 8px;
`;

const ToggleContainer = styled.View<{
	width: number;
	height: number;
	backgroundColor: string;
	borderColor?: string;
	disabled?: boolean;
}>`
	width: ${(p) => p.width}px;
	height: ${(p) => p.height}px;
	border-radius: ${(p) => p.height / 2}px;
	background-color: ${(p) => p.backgroundColor};
	border-width: 2px;
	border-color: ${(p) => p.borderColor || '#e0e0e0'};
	justify-content: center;
	position: relative;
	overflow: hidden;
`;

const Label = styled.Text`
	font-size: 14px;
	color: #000000;
	font-weight: 600;
	line-height: 20px;
`;

const Track = styled.View<{
	height: number;
	inactiveColor: string;
}>`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	border-radius: ${(p) => p.height / 2}px;
	background-color: ${(p) => p.inactiveColor};
`;

const ActiveTrack = styled.View<{
	height: number;
	activeColor: string;
}>`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: ${(p) => p.activeColor};
`;

const ThumbContainer = styled.View<{
	thumbSize: number;
	padding: number;
}>`
	position: absolute;
	top: ${(p) => p.padding}px;
	left: ${(p) => p.padding}px;
	width: ${(p) => p.thumbSize}px;
	height: ${(p) => p.thumbSize}px;
	border-radius: ${(p) => p.thumbSize / 2}px;
	background-color: #ffffff;
	justify-content: center;
	align-items: center;

	elevation: 3;
`;

const ThumbIcon = styled.View<{ size: number }>`
	width: ${(p) => p.size * 0.4}px;
	height: ${(p) => p.size * 0.4}px;
	border-radius: ${(p) => p.size * 0.2}px;
`;

export const CustomToggleStyles = {
	Container,
	ToggleContainer,
	Label,
	Track,
	ActiveTrack,
	ThumbContainer,
	ThumbIcon,
};
