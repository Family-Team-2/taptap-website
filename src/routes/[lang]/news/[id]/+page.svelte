<script>
	import { page } from '$app/stores';
	import { article_list } from '$lib/data/article_list';
	import TheArticle from '$lib/components/news/TheArticle.svelte';

	let id = $page.params.id;

	let item = article_list.find((a) => a.id === id);
</script>

{#if item}
	<TheArticle {item} />
{:else}
	<p>Статья не найдена</p>
{/if}

<style>
</style>
