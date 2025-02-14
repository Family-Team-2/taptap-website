<script>
	export let src;
	export let poster = '';
	export let controls = true;
	export let autoplay = false;
	export let loop = false;
	export let muted = false;
</script>

<video class="video-player" {controls} {autoplay} {loop} {muted} {poster}>
	<source {src} type="video/mp4" />
	Ваш браузер не поддерживает видео.
</video>

<style>
	.video-player {
		width: 100%;
		max-width: 800px;
		border-radius: 10px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
		margin-top: 1rem;
	}
	@media (max-width: 480px) {
		.video-player {
			max-width: 100%;
			margin-top: 0.5rem;
		}
	}
</style>
