<script>
	import TheButton from '$lib/components/UI/buttons/TheButton.svelte';
	import { main_page } from '$lib/data/main_page.js';
	import { locale } from '$lib/stores/locale.js';
	import { onMount } from 'svelte';
	import { fadeInOnScroll } from '$lib/utils/observer';

	let isMounted = false;

	onMount(() => {
		isMounted = true;
	});
</script>

{#if isMounted}
	<div class="main_page">
		<h1>
			<strong>{main_page.title_name[$locale]}</strong>
			<p>{main_page.title_text[$locale]}</p>
		</h1>
		<section>
			<div>{@html main_page.main_text[$locale]}</div>
			<a href={`/${$locale}${main_page.link}`} aria-label="link">
				{main_page.link_text[$locale]}
			</a>
		</section>
		<section>
			<h2 class="section_title">{main_page.games_title[$locale]}</h2>
			<a href={`/${$locale}${main_page.games_link}`} aria-label="games"
				><div class="img_wrap"></div></a
			>
			<a href={`/${$locale}${main_page.games_link}`} aria-label="link">
				{main_page.link_text[$locale]}
			</a>
		</section>
	</div>
{:else}
	<div></div>
{/if}

<style>
	.main_page {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	h1 strong {
		color: var(--primary);
	}

	section {
		width: 100%;
		transition: all 0.4s ease-in;
	}
	.section_title {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 1rem auto;
	}

	.img_wrap {
		width: 40%;
		margin: 0 auto 1rem;
		aspect-ratio: 1;
		border-radius: var(--radius-out);
		overflow: hidden;
		transition: all 0.4s ease-in;
		animation: fadeUp 0.1s;
		background-image: url(/games/birmingams_mafia1024x1024.webp);
		background-size: cover;
		background-position: center;
		box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}
	.img_wrap:hover {
		transform: translateY(-4px);
		box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 768px) {
		.main_page {
			gap: 2rem;
		}
	}
	@media (max-width: 480px) {
		.main_page {
			gap: 0.5rem;
		}
	}
</style>
