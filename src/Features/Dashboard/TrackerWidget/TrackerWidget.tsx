import { ProgressBar } from "./Components/ProgressBar/ProgressBar";
import styles from "./TrackerWidget.module.scss";
import Logo from "@assets/TrackerWidget/logo.svg?react";
import { useTranslation } from "@/hooks/useTranslation";

export const TrackerWidget = () => {
	const { t } = useTranslation();

	return (
		<div className={styles["TrackerWidget-container"]}>
			<div className={styles["TrackerWidget-Head"]}>
				<div className={styles["TrackerWidget-icon-container"]}>
					<Logo className={styles["TrackerWidget-icon"]} />
				</div>
				<p className={styles["TrackerWidget-text"]}>
					{t("tracker.checking")}{" "}
					<span className={styles["TrackerWidget-text-highlight"]}>
						{t("tracker.cholesterol")}
					</span>
				</p>
			</div>
			<ProgressBar progress={31} />
			<p className={styles["TrackerWidget-text"]}>
				{t("tracker.resultsExpected")}{" "}
				<span className={styles["TrackerWidget-text-highlight"]}>
					3 {t("tracker.days")}
				</span>
			</p>
		</div>
	);
};
