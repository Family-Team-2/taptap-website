<script>
	import TheArticleItem from '$lib/components/news/TheArticleItem.svelte';
	export let data = [];
</script>

<h2>Новости</h2>
<div class="main_container">
	<div class="window">
		<div class="all_pages_container">
			{#each data as child, index}
				<div class="item_wrapper" key={index}>
					<TheArticleItem item={child} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	h2 {
		margin-top: 2rem;
	}
	.main_container {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.window {
		height: 100%;
		width: 100%;
		overflow: hidden;
		overflow-x: scroll;
	}

	.all_pages_container {
		height: 100%;
		display: flex;
		gap: 1rem;
		padding: 0.5rem 0 0 0;
		transition: transform 300ms ease-in-out;
		padding: 0.5rem 0;
	}

	.item_wrapper {
		flex: 0 0 300px;
		max-width: 300px;
		max-height: 300px;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
