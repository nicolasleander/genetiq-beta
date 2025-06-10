import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Theme {
	id: string;
	name: string;
	primary: string;
	background: string;
	text: string;
}

export const AVAILABLE_THEMES: Theme[] = [
	{
		id: "light",
		name: "Light",
		primary: "#007bff",
		background: "#ffffff",
		text: "#000000",
	},
	{
		id: "dark",
		name: "Dark",
		primary: "#007bff",
		background: "#1a1a1a",
		text: "#ffffff",
	},
	{
		id: "blue",
		name: "Blue",
		primary: "#0056b3",
		background: "#e6f3ff",
		text: "#003d82",
	},
	{
		id: "purple",
		name: "Purple",
		primary: "#6f42c1",
		background: "#f3e8ff",
		text: "#4c1d95",
	},
];

interface ThemeState {
	currentTheme: string;
}

const initialState: ThemeState = {
	currentTheme: "light",
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<string>) => {
			state.currentTheme = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
