interface ToggleSize {
	width: number;
	height: number;
	thumbSize: number;
	padding: number;
}

export const TOGGLE_SIZES: Record<string, ToggleSize> = {
	small: {
		width: 44,
		height: 26,
		thumbSize: 18,
		padding: 2,
	},
	medium: {
		width: 60,
		height: 36,
		thumbSize: 28,
		padding: 2,
	},
	large: {
		width: 80,
		height: 46,
		thumbSize: 38,
		padding: 2,
	},
};
