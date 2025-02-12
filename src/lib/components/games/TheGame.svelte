<script>
	import { onMount } from 'svelte';
	import { locale } from '$lib/stores/locale.js';
	import { fadeInOnScroll } from '$lib/utils/observer';
	import TheButton from '$lib/components/UI/buttons/TheButton.svelte';
	import { main_page } from '$lib/data/main_page.js';

	export let item;

	let isMounted = false;
	onMount(() => {
		isMounted = true;
	});
</script>

{#if item}
	<article>
		<h1>{item.title[$locale]}</h1>
		<div class="img_wrap">
			<img src={item.image} alt={item.title[$locale]} />
		</div>
		<p>{item.release_date}</p>
		<p>{item.description[$locale]}</p>
	</article>
{:else}
	<p class="roller"></p>
{/if}

<style>
	.img_wrap {
		width: 80%;
		margin: 0 auto 2rem;
		aspect-ratio: 9/6;
		border-radius: var(--radius-out);
		overflow: hidden;
		transition: all 0.9s ease-in;
		animation: fadeUp 1.5s;
	}
	.img_wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.9s ease-in;
		will-change: transform;
	}
	.img_wrap:hover img {
		transform: scale(1.2);
	}
	@media (max-width: 768px) {
		.img_wrap {
			width: 100%;
		}
	}
</style>
