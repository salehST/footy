import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '@/i18n/messages';
import store from '@/store';
Vue.use(VueI18n);

export const defaultLanguage = 'en';

export const languages = [
	{ flag: '🇺🇸', name: 'English', shortName: 'en' },
	{ flag: '🇳🇱', name: 'Nederlands', shortName: 'nl' },
];

export const languageOptions = languages.map((l) => {
	return { label: l.name, value: l.shortName, flag: l.flag };
});

// @ts-ignore
const i18n = new VueI18n({
	locale: defaultLanguage,
	messages,
});

export default i18n;
// Language detection
const supportedLanguages = languages.map((l) => l.shortName);
const detectedLanguage = navigator.language.split('-')[0]; // handles 'en' and 'en-GB'
const language =
	supportedLanguages.indexOf(detectedLanguage) > -1 ? detectedLanguage : defaultLanguage;
i18n.locale = language;
