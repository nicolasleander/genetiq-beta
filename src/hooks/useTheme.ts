import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { AVAILABLE_THEMES } from "@/App/Redux/themeSlice";

export const useTheme = () => {
	const currentTheme = useSelector(
		(state: RootState) => state.theme.currentTheme,
	);

	useEffect(() => {
		const theme = AVAILABLE_THEMES.find((t) => t.id === currentTheme);
		if (theme) {
			const root = document.documentElement;
			root.style.setProperty("--primary-color", theme.primary);
			root.style.setProperty("--background-color", theme.background);
			root.style.setProperty("--text-color", theme.text);

			// Additional theme-specific variables
			if (theme.id === "dark") {
				root.style.setProperty("--surface-color", "#2a2a2a");
				root.style.setProperty("--border-color", "#444");
			} else if (theme.id === "blue") {
				root.style.setProperty("--surface-color", "#f0f8ff");
				root.style.setProperty("--border-color", "#b3d9ff");
			} else if (theme.id === "purple") {
				root.style.setProperty("--surface-color", "#faf5ff");
				root.style.setProperty("--border-color", "#e9d5ff");
			} else {
				root.style.setProperty("--surface-color", "#f8f9fa");
				root.style.setProperty("--border-color", "#dee2e6");
			}

			root.setAttribute("data-theme", theme.id);
		}
	}, [currentTheme]);

	return currentTheme;
};
