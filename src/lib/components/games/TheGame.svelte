<script>
	import { onMount } from 'svelte';
	import { locale } from '$lib/stores/locale.js';
	import { fadeInOnScroll } from '$lib/utils/observer';

	export let item;

	let isMounted = false;
	onMount(() => {
		isMounted = true;
	});
</script>

{#if item}
	<article>
		<h2>{item.title[$locale]}</h2>
		<img src={item.image} alt={item.title[$locale]} />
		<p>{item.release_date}</p>
		<p>{item.description[$locale]}</p>
	</article>
{:else}
	<p>Загрузка...</p>
{/if}

<style>
	h2 {
		font-size: 2rem;
		color: var(--primary);
	}
</style>
