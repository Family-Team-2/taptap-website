<script>
	import TheArticleItem from '$lib/components/news/TheArticleItem.svelte';
	import { onMount } from 'svelte';
	import { locale } from '$lib/stores/locale.js';
	import { page_titles } from '$lib/data/page_titles';

	export let data = [];

	let isMounted = false;

	let scrollContainer;
	let canScrollLeft = false;
	let canScrollRight = true;

	const checkScroll = () => {
		const scrollLeft = scrollContainer.scrollLeft;
		const scrollWidth = scrollContainer.scrollWidth;
		const clientWidth = scrollContainer.clientWidth;

		canScrollLeft = scrollLeft > 0;
		canScrollRight = scrollLeft < scrollWidth - clientWidth;
	};

	const handleScroll = () => {
		checkScroll();
	};

	const scrollLeft = () => {
		if (scrollContainer) {
			scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
			checkScroll();
		}
	};

	const scrollRight = () => {
		if (scrollContainer) {
			scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
			checkScroll();
		}
	};

	onMount(() => {
		isMounted = true;
		checkScroll();
	});
</script>

<h2>{page_titles.news[$locale]}</h2>
<div class="main_container">
	<button
		class="scroll-btn left"
		onclick={scrollLeft}
		aria-label="Scroll left"
		class:disabled={!canScrollLeft}
		style:visibility={!canScrollLeft ? 'hidden' : 'visible'}
	>
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="currentColor"
			class="rotate-180"
		>
			<g filter="url(#filter0_b_2230_47)">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM47.7641 25.3609C45.6162 23.213 42.1338 23.213 39.9859 25.3609C37.838 27.5088 37.838 30.9912 39.9859 33.1391L57.3468 50.5L39.9859 67.8609C37.838 70.0088 37.838 73.4912 39.9859 75.6391C42.1338 77.787 45.6162 77.787 47.7641 75.6391L69.0141 54.3891C71.162 52.2412 71.162 48.7588 69.0141 46.6109L47.7641 25.3609Z"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_b_2230_47"
					x="-16"
					y="-16"
					width="132"
					height="132"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
					<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2230_47" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_2230_47"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	</button>
	<div class="window" bind:this={scrollContainer} onscroll={handleScroll}>
		<div class="all_pages_container">
			{#each data as child, index}
				<div class="item_wrapper" key={index}>
					<TheArticleItem item={child} />
				</div>
			{/each}
		</div>
	</div>
	<button
		class="scroll-btn right"
		onclick={scrollRight}
		aria-label="Scroll right"
		class:disabled={!canScrollRight}
		style:visibility={!canScrollRight ? 'hidden' : 'visible'}
	>
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_b_2230_47)">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM47.7641 25.3609C45.6162 23.213 42.1338 23.213 39.9859 25.3609C37.838 27.5088 37.838 30.9912 39.9859 33.1391L57.3468 50.5L39.9859 67.8609C37.838 70.0088 37.838 73.4912 39.9859 75.6391C42.1338 77.787 45.6162 77.787 47.7641 75.6391L69.0141 54.3891C71.162 52.2412 71.162 48.7588 69.0141 46.6109L47.7641 25.3609Z"
					fill="white"
				/>
			</g>
			<defs>
				<filter
					id="filter0_b_2230_47"
					x="-16"
					y="-16"
					width="132"
					height="132"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feGaussianBlur in="BackgroundImageFix" stdDeviation="8" />
					<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2230_47" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_backgroundBlur_2230_47"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	</button>
</div>

<style>
	h2 {
		margin-top: 2rem;
		text-align: center;
	}

	.main_container {
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;
	}

	.window {
		height: 100%;
		width: 100%;
		overflow: hidden;
		overflow-x: scroll;
		scroll-behavior: smooth;
		padding: 0.5rem 0;
	}
	.window::-webkit-scrollbar {
		display: none;
	}

	.window {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.all_pages_container {
		height: 100%;
		display: flex;
		gap: 1rem;
		padding: 0.5rem 0;
		transition: transform 300ms ease-in-out;
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

	.scroll-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: transparent;
		color: var(--background);
		opacity: 0.8;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		z-index: 10;
	}

	.scroll-btn.left {
		left: 10px;
	}

	.scroll-btn.right {
		right: 10px;
	}
	.rotate-180 {
		transform: rotate(180deg);
	}
</style>
