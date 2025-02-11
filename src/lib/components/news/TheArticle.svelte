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
		<img src={item.img} alt="" />
		<p>{item.date}</p>
		<p>{item.author[$locale]}</p>
		<p>{item.subtitle[$locale]}</p>
		<div class="item">
			{@html item.html[$locale]}
		</div>
	</article>
{:else}
	<p>Загрузка...</p>
{/if}

<style>
	.item {
		max-width: 800px;
		margin: auto;
		padding: 20px;
	}
	h2 {
		font-size: 2rem;
		color: var(--primary);
	}
</style>
