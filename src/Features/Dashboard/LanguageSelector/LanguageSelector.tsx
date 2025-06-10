import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { setLanguage, SUPPORTED_LANGUAGES } from "@/App/Redux/languageSlice";
import styles from "./LanguageSelector.module.scss";

export const LanguageSelector = () => {
	const currentLanguage = useSelector(
		(state: RootState) => state.language.currentLanguage,
	);
	const dispatch = useDispatch();

	const handleLanguageChange = (languageCode: string) => {
		dispatch(setLanguage(languageCode));
	};

	return (
		<div className={styles.languageSelector}>
			<select
				value={currentLanguage}
				onChange={(e) => handleLanguageChange(e.target.value)}
				className={styles.select}
				title='Select Language'
			>
				{SUPPORTED_LANGUAGES.map((language) => (
					<option key={language.code} value={language.code}>
						{language.name}
					</option>
				))}
			</select>
		</div>
	);
};
