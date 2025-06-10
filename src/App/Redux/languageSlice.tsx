import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Language {
	code: string;
	name: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
	{ code: "en", name: "English" },
	{ code: "es", name: "Español" },
	{ code: "fr", name: "Français" },
];

interface LanguageState {
	currentLanguage: string;
}

const initialState: LanguageState = {
	currentLanguage: "en",
};

const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<string>) => {
			state.currentLanguage = action.payload;
		},
	},
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
