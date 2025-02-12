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
			{@html main_page[0][`title_text_${$locale}`]}<strong
				>{@html main_page[0][`title_name_${$locale}`]}</strong
			>
		</h1>
		<div class="img_wrap">
			<img src="/other/bg.webp" alt="logo" />
		</div>
		<section class="hidden" use:fadeInOnScroll>
			<h2>{@html main_page[0][`about_title_${$locale}`]}</h2>
			<div>{@html main_page[0][`about_text_${$locale}`]}</div>
		</section>
		<section class="mission hidden" use:fadeInOnScroll>
			<h2>{@html main_page[0][`mission_title_${$locale}`]}</h2>
			<div class="section-desc">
				<div>{@html main_page[0][`mission_text_${$locale}`]}</div>
				<div class="section-img_wrap">
					<img src="/other/mission.webp" alt="our_mission_picture" />
				</div>
			</div>
		</section>
		<section class="wedo hidden" use:fadeInOnScroll>
			<h2>{@html main_page[0][`wedo_title_${$locale}`]}</h2>
			<div class="section-desc">
				<div class="section-img_wrap">
					<img src="/other/wedo.webp" alt="wedo" />
				</div>
				<div>{@html main_page[0][`wedo_text_${$locale}`]}</div>
			</div>
		</section>
		<section class="team hidden" use:fadeInOnScroll>
			<h2>{@html main_page[0][`team_title_${$locale}`]}</h2>
			<div class="section-desc">
				<div>{@html main_page[0][`team_text_${$locale}`]}</div>
				<div class="section-img_wrap">
					<img src="/other/team.webp" alt="logo" />
				</div>
			</div>
		</section>
		<section class="hidden" use:fadeInOnScroll>
			<h2>{@html main_page[0][`join_title_${$locale}`]}</h2>
			<div>{@html main_page[0][`join_text_${$locale}`]}</div>
		</section>
		<h2 class="slogan hidden" use:fadeInOnScroll>{@html main_page[0][`slogan_${$locale}`]}</h2>
		<div class="btn_wrap hidden" use:fadeInOnScroll>
			<TheButton>{@html main_page[0][`button_${$locale}`]}</TheButton>
		</div>
	</div>
{:else}
	<div class="visible roller"></div>
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

	.img_wrap {
		width: 80%;
		margin: 0 auto;
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

	section {
		width: 100%;
		transition: all 0.9s ease-in;
	}

	h2 {
		display: block;
	}
	.mission,
	.wedo,
	.team {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}
	.section-desc {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		line-height: 1.5;
		gap: 1rem;
	}
	.section-img_wrap {
		flex: 1 1 40%;
		width: 20%;
		max-width: 400px;
		min-width: 300px;
		aspect-ratio: 1;
		margin-bottom: auto;
		border-radius: var(--radius-out);
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.section-img_wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.9s ease-in;
	}
	.section-img_wrap:hover img {
		transform: scale(1.2);
	}

	section h2::first-letter,
	.slogan::first-letter {
		font-size: 2.5rem;
		color: var(--primary);
	}

	.slogan {
		margin: 0 auto;
		transition: all 0.9s ease-in;
		text-align: center;
	}

	.btn_wrap {
		width: 100%;
		display: flex;
		transition: all 0.9s ease-in;
	}

	.hidden {
		opacity: 0;
		transform: translateY(50px) scale(0.9);
	}

	.visible {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
	@media (max-width: 768px) {
		.main_page {
			gap: 2rem;
		}
		.img_wrap {
			width: 90%;
		}

		.section-desc {
			flex-direction: column;
		}
		.section-img_wrap {
			width: 80%;
			flex: 1 1 auto;
			margin: 0 auto;
		}

		.wedo .section-desc {
			flex-direction: column-reverse;
		}
	}
	@media (max-width: 480px) {
		.main_page {
			gap: 1.5rem;
		}
		.img_wrap {
			width: 100%;
		}

		.section-img_wrap {
			width: 100%;
		}
	}
</style>
