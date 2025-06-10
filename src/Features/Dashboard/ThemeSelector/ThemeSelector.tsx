import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { setTheme, AVAILABLE_THEMES } from "@/App/Redux/themeSlice";
import styles from "./ThemeSelector.module.scss";

export const ThemeSelector = () => {
	const currentTheme = useSelector(
		(state: RootState) => state.theme.currentTheme,
	);
	const dispatch = useDispatch();

	const handleThemeChange = (themeId: string) => {
		dispatch(setTheme(themeId));
	};

	return (
		<div className={styles.themeSelector}>
			<select
				value={currentTheme}
				onChange={(e) => handleThemeChange(e.target.value)}
				className={styles.select}
				title='Select Theme'
			>
				{AVAILABLE_THEMES.map((theme) => (
					<option key={theme.id} value={theme.id}>
						{theme.name}
					</option>
				))}
			</select>
		</div>
	);
};
