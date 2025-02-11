import { writable } from 'svelte/store';

const getStoredLang = () => {
	if (typeof window !== 'undefined') {
		const lang = localStorage.getItem('locale');
		if (lang) return lang;
	}
	return null;
};

const getBrowserLang = () => {
	if (typeof navigator !== 'undefined') {
		return navigator.language.startsWith('ru') ? 'ru' : 'en';
	}
	return 'en';
};

// Выбираем локаль: сперва из localStorage, затем из браузера
const initialLang = getStoredLang() || getBrowserLang();

export const locale = writable(initialLang);

// Обновляем localStorage при смене языка
locale.subscribe((lang) => {
	if (typeof window !== 'undefined') {
		localStorage.setItem('locale', lang);
	}
});

// Функция для установки локали
export function setLocale(lang) {
	locale.set(lang);
}
