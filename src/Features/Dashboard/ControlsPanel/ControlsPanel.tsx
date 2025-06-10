import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { ThemeSelector } from "../ThemeSelector/ThemeSelector";
import styles from "./ControlsPanel.module.scss";

export const ControlsPanel = () => {
	return (
		<div className={styles.controlsPanel}>
			<LanguageSelector />
			<ThemeSelector />
		</div>
	);
};
