import React from 'react';
import { Image } from 'react-native';
import { styled } from 'styled-components/native';

const IconContainer = styled.View<{ size?: number }>`
	width: ${(props) => props.size || 20}px;
	height: ${(props) => props.size || 20}px;
	border-radius: ${(props) => (props.size || 20) / 2}px;
	align-items: center;
	justify-content: center;
`;

const IconText = styled.Text`
	color: #ffffff;
	font-size: 12px;
	font-weight: bold;
`;

export const CalendarIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
	<IconContainer size={size}>
		<IconText>
			<Image
				source={{
					uri: 'https://cdn-icons-png.flaticon.com/512/7691/7691413.png',
				}}
				style={{ width: size, height: size }}
			/>
		</IconText>
	</IconContainer>
);
