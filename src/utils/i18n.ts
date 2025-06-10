export const translations = {
	en: {
		dashboard: "Dashboard",
		language: "Language",
		theme: "Theme",
		welcome: "Welcome to Genetiq",
		tracker: {
			title: "Health Tracker",
			checking: "Stay tuned. We are checking your",
			cholesterol: "Cholesterol",
			resultsExpected: "results expected in",
			days: "days",
		},
		concerns: "Health Concerns",
		age: "Age Analysis",
		system: "System Details",
	},
	es: {
		dashboard: "Panel de Control",
		language: "Idioma",
		theme: "Tema",
		welcome: "Bienvenido a Genetiq",
		tracker: {
			title: "Rastreador de Salud",
			checking: "Mantente al tanto. Estamos revisando tu",
			cholesterol: "Colesterol",
			resultsExpected: "resultados esperados en",
			days: "días",
		},
		concerns: "Preocupaciones de Salud",
		age: "Análisis de Edad",
		system: "Detalles del Sistema",
	},
	fr: {
		dashboard: "Tableau de Bord",
		language: "Langue",
		theme: "Thème",
		welcome: "Bienvenue chez Genetiq",
		tracker: {
			title: "Suivi de Santé",
			checking: "Restez à l'écoute. Nous vérifions votre",
			cholesterol: "Cholestérol",
			resultsExpected: "résultats attendus dans",
			days: "jours",
		},
		concerns: "Préoccupations Santé",
		age: "Analyse d'Âge",
		system: "Détails du Système",
	},
};

export const t = (key: string, language: string): string => {
	const lang = language as keyof typeof translations;
	const translation = translations[lang];
	if (!translation) return key;

	const keys = key.split(".");
	let result: unknown = translation;

	for (const k of keys) {
		result = result?.[k];
	}

	return typeof result === "string" ? result : key;
};
