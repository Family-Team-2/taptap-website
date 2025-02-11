import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET({ request }) {
	const browserLang = request.headers.get('accept-language')?.split(',')[0].slice(0, 2) || 'en';
	const supportedLanguages = ['ru', 'en'];

	// Если язык поддерживается, берем его, иначе ставим по умолчанию 'en'
	const lang = supportedLanguages.includes(browserLang) ? browserLang : 'en';

	// Получаем текущий путь и язык из URL
	const currentPath = request.url.pathname;

	// Если текущий путь не начинается с корректного языка, редиректим
	if (!currentPath.startsWith(`/${lang}`)) {
		throw redirect(302, `/${lang}`);
	}
}
