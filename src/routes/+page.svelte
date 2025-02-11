<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { locale } from '$lib/stores/locale.js';

	onMount(() => {
		// Проверяем локаль в localStorage или установим значение по умолчанию
		const storedLang =
			localStorage.getItem('locale') || (navigator.language.startsWith('ru') ? 'ru' : 'en');

		// Устанавливаем локаль в store
		locale.set(storedLang);

		// Проверяем текущий путь
		const currentPath = window.location.pathname;
		const langPrefix = `/${storedLang}`;

		// Если локаль не совпадает с текущим путем, делаем редирект
		if (!currentPath.startsWith(langPrefix)) {
			goto(langPrefix, { replaceState: true });
		}
	});
</script>
