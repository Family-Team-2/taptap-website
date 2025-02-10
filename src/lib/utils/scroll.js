import { writable } from 'svelte/store';

export const isHidden = writable(false);

if (typeof window !== 'undefined') {
	let lastScrollY = window.scrollY; // Запоминаем начальное положение

	function handleScroll() {
		isHidden.set(window.scrollY > 100 && window.scrollY > lastScrollY);
		lastScrollY = window.scrollY;
	}

	window.addEventListener('scroll', handleScroll);
}
