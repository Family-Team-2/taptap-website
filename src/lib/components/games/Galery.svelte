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

	let currentIndex = -1;

	const openModal = (index) => {
		currentIndex = index;
	};

	const closeModal = () => {
		currentIndex = -1;
	};

	const nextImage = () => {
		if (currentIndex < images.length - 1) {
			currentIndex += 1;
		}
	};

	const prevImage = () => {
		if (currentIndex > 0) {
			currentIndex -= 1;
		}
	};
	const stopPropagation = (event) => {
		event.stopPropagation();
	};
</script>

<div class="gallery">
	{#each images as { src, alt }, index}
		<div
			class="gallery-item"
			onclick={() => openModal(index)}
			role="button"
			tabindex="0"
			onkeydown={(event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					openModal(index);
				}
			}}
		>
			<img {src} {alt} class="image" loading="lazy" />
		</div>
	{/each}
</div>

{#if currentIndex >= 0}
	<div
		class="modal"
		onclick={closeModal}
		role="button"
		tabindex="0"
		onkeydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				openModal(index);
			}
		}}
	>
		<div
			class="modal-content"
			onclick={stopPropagation}
			role="button"
			tabindex="0"
			onkeydown={(event) => {
				if (event.key === 'Enter' || event.key === ' ') {
					openModal(index);
				}
			}}
		>
			<button class="close-btn" onclick={closeModal}>X</button>
			<img src={images[currentIndex].src} alt={images[currentIndex].alt} class="full-image" />
			<div class="controls">
				<button onclick={prevImage} class="prev-btn">&lt;</button>
				<button onclick={nextImage} class="next-btn">&gt;</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
		place-items: center;
	}

	.gallery-item {
		position: relative;
		width: 100%;
		cursor: pointer;
	}

	.image {
		width: 100%;
		height: auto;
		border-radius: 8px;
		object-fit: cover;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 1;
		z-index: 8;
		visibility: visible;
		transition:
			opacity 0.3s ease,
			visibility 0.3s ease;
	}

	.modal-content {
		position: relative;
		max-width: 90%;
		max-height: 90%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.full-image {
		max-width: 100%;
		max-height: 80vh;
		object-fit: contain;
		border-radius: 8px;
	}

	.controls {
		position: absolute;
		bottom: 10px;
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.prev-btn,
	.next-btn {
		width: 2rem;
		height: 2rem;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		cursor: pointer;
		font-size: 20px;
		border-radius: 5rem;
	}

	.prev-btn {
		margin-right: 20px;
	}

	.close-btn {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 2rem;
		height: 2rem;
		background-color: rgba(0, 0, 0, 0.7);
		color: white;
		border: none;
		cursor: pointer;
		border-radius: 50%;
	}
</style>
