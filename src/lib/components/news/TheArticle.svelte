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
		<h1>{item.title[$locale]}</h1>
		<div class="img_wrap">
			<img src={item.img} alt={item.title[$locale]} />
		</div>
		<p>{item.date}</p>
		<p>{item.author[$locale]}</p>
		<p>{item.subtitle[$locale]}</p>
		<div class="item">
			{@html item.html[$locale]}
		</div>
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
