<script>
	export let props = {};
</script>

<button {...props} class="button">
	<slot></slot>
</button>

<style>
	.button {
		padding: 1rem 2rem;
		max-width: 20rem;
		font-size: inherit;
		border: none;
		border-radius: 3rem;
		cursor: pointer;
		transition: 0.3s;
		background-color: var(--primary);
		margin: 0 auto;
	}

	.button:hover {
		background-color: var(--primary-light);
	}

	.button:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
</style>
