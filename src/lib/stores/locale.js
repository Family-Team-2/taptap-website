import { writable } from 'svelte/store';

const initialLang =
	typeof navigator !== 'undefined' && navigator.language.startsWith('ru') ? 'ru' : 'en';

export const locale = writable(initialLang);

export function setLocale(lang) {
	locale.set(lang);
}
