import en_us from "../assets/translations/en_us.json";

let translations: any = en_us;

export function getText(key: string) {
	return translations[key];
}

export default translations;
