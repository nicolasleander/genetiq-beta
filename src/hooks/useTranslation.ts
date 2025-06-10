import { useSelector } from "react-redux";
import { RootState } from "@/App/Redux/store";
import { t } from "@/utils/i18n";

export const useTranslation = () => {
	const currentLanguage = useSelector(
		(state: RootState) => state.language.currentLanguage,
	);

	const translate = (key: string): string => {
		return t(key, currentLanguage);
	};

	return {
		t: translate,
		language: currentLanguage,
	};
};
