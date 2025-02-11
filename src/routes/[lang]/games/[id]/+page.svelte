<script>
	import { page } from '$app/stores';
	import { games_list } from '$lib/data/games_list.js';
	import TheGame from '$lib/components/games/TheGame.svelte';

	let id = $page.params.id;
	let item = games_list.find((a) => a.id === id);
</script>

{#if item}
	<TheGame {item} />
{:else}
	<p>Игра не найдена</p>
{/if}

<style>
</style>
