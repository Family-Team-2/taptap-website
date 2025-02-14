<script>
	export let images = [
		{ src: '/games/1.webp', alt: '' },
		{ src: '/games/2.webp', alt: '' },
		{ src: '/games/3.webp', alt: '' },
		{ src: '/games/4.webp', alt: '' },
		{ src: '/games/5.webp', alt: '' },
		{ src: '/games/6.webp', alt: '' },
		{ src: '/games/67.webp', alt: '' },
		{ src: '/games/444.webp', alt: '' }
	];
</script>

<div class="gallery">
	{#each images as { src, alt }}
		<img {src} {alt} class="gallery-item" loading="lazy" />
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 10px;
		margin-top: 1rem;
		place-items: center;
	}

	.gallery-item {
		width: 100%;
		height: auto;
		border-radius: 8px;
		object-fit: cover;
	}
</style>
