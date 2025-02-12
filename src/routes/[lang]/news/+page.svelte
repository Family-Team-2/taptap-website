<script>
	import { article_list } from '$lib/data/article_list.js';
	import { games_list } from '$lib/data/games_list';
	import TheArticleItem from '$lib/components/news/TheArticleItem.svelte';
	import { locale } from '$lib/stores/locale.js';
	import { onMount } from 'svelte';
	import { page_titles } from '$lib/data/page_titles';
	import GamesCarousel from '$lib/components/UI/carousels/GamesCarousel.svelte';

	let isMounted = false;
	onMount(() => {
		isMounted = true;
	});
</script>

<h1>{page_titles.news[$locale]}</h1>
<section class="articles_list">
	{#each article_list as item (item.id)}
		<TheArticleItem {item} />
	{/each}
</section>
<GamesCarousel data={games_list} />

<style>
	.articles_list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1rem;
		justify-content: center;
		animation: fadeUp 1.5s;
	}
	@media (max-width: 1000px) {
		.articles_list {
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		}
	}
</style>
