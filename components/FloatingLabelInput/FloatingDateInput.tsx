// FloatingDateInput.tsx
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Modal, Platform, Pressable } from 'react-native';
import { FloatingLabelInput } from './FloatingLabelInput';

interface FloatingDateInputProps {
	label?: string;
	value?: string;
	onChange: (date: string) => void;
	rightIcon?: React.ReactNode;
}

export const FloatingDateInput: React.FC<FloatingDateInputProps> = ({
	label = 'Date of departure',
	value,
	onChange,
	rightIcon,
}) => {
	const [open, setOpen] = useState(false);
	const date = value ? new Date(value) : new Date();

	const show = () => setOpen(true);
	const hide = () => setOpen(false);

	const onChangeDate = (_: any, selected?: Date) => {
		if (Platform.OS === 'android') hide();
		if (selected) onChange(selected.toISOString());
	};

	const display = value
		? new Date(value).toLocaleDateString(undefined, {
				weekday: 'long',
				month: 'short',
				day: '2-digit',
		  })
		: '';

	return (
		<>
			<Pressable onPress={show}>
				<FloatingLabelInput
					label={label}
					value={display}
					editable={false}
					pointerEvents='none'
					rightIcon={rightIcon}
					onChangeText={() => {}}
				/>
			</Pressable>
			{Platform.OS === 'ios' ? (
				<Modal transparent visible={open} onRequestClose={hide}>
					<DateTimePicker
						value={date}
						mode='date'
						display='inline'
						onChange={onChangeDate}
						style={{ backgroundColor: 'white' }}
					/>
				</Modal>
			) : (
				open && (
					<DateTimePicker
						value={date}
						mode='date'
						display='default'
						onChange={onChangeDate}
					/>
				)
			)}
		</>
	);
};
