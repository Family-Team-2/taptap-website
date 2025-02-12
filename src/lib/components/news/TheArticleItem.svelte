<script>
	import { locale } from '$lib/stores/locale.js';
	import { onMount } from 'svelte';

	export let item;
	let isMounted = false;
	onMount(() => {
		isMounted = true;
	});
</script>

{#if isMounted}
	<a class="figure" href={`/${$locale}/news/${item.id}`} aria-label="Open article">
		<div class="img_wrapper">
			<img src={item.img} alt={item.title[$locale]} class="img" loading="lazy" />
		</div>
		<div class="figcaption">
			<h2 class="title">{item.title[$locale]}</h2>
			<span>
				{new Date(item.date).toLocaleDateString('ru-RU', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</span>
		</div>
	</a>
{:else}
	<p class="roller"></p>
{/if}

<style>
	.figure {
		position: relative;
		display: flex;
		flex-direction: column;
		max-width: 400px;
		aspect-ratio: 4 / 3;
		border-radius: var(--radius-out);
		transition: all 0.3s;
		background-color: var(--background);
		text-align: justify;
		overflow: hidden;
		cursor: pointer;
		padding: 0.5rem;
		position: relative;
		box-shadow: var(--boxshadow);
		margin: 0 auto;
	}

	.figure:hover {
		transform: scale(1.05);
	}
	.img_wrapper {
		width: 100%;
		aspect-ratio: 16/9;
		position: relative;
		overflow: hidden;
		transition: all 0.5s;
	}

	.img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--radius-in);
		z-index: 1;
		transition: all 0.5s;
	}

	.figcaption {
		width: 100%;
		flex: 1 1 content;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		gap: 0.5rem;
		z-index: 3;
	}

	.figcaption h2 {
		font-size: 1.5rem;
		font-weight: normal;
		text-align: start;
	}
	.figcaption span {
		position: absolute;
		top: 0rem;
		left: 1rem;
		font-size: 0.7rem;
		border-radius: 2rem;
		background-color: var(--background);
		padding: 0.5rem 1rem;
	}
	@media (max-width: 480px) {
		.figcaption h2 {
			font-size: 1.25rem;
			font-weight: normal;
			text-align: start;
		}
	}
</style>
