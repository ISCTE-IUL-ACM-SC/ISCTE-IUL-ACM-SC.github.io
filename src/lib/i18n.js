import { addMessages, getLocaleFromNavigator, init, locale } from 'svelte-i18n';

//import en from './locales/en.json'//mport pt from './locales/pt.json';

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});

export function changeLocale(lang) {
	locale.set(lang);
}
