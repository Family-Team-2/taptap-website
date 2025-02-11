<script>
	import { games_list } from '$lib/data/games_list.js';
	import TheGameItem from '$lib/components/games/TheGameItem.svelte';
	import { locale } from '$lib/stores/locale.js';
	import { onMount } from 'svelte';
	import { page_titles } from '$lib/data/page_titles';
	import NewsCarousel from '$lib/components/UI/carousels/NewsCarousel.svelte';
	import { article_list } from '$lib/data/article_list';

	let isMounted = false;
	onMount(() => {
		isMounted = true;
	});
</script>

<h1>{page_titles.games[$locale]}</h1>
<section class="games-list">
	{#each games_list as item (item.id)}
		<TheGameItem {item} />
	{/each}
</section>
<NewsCarousel data={article_list} />

<style>
	h1 {
		margin: 1rem auto;
		font-size: 3rem;
		display: block;
		animation: fadeUp 2s;
	}
	.games-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		justify-content: center;
		animation: fadeUp 2s;
	}
</style>
