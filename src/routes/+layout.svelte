<script>
	import TheFooter from '$lib/components/TheFooter.svelte';
	import TheHeader from '$lib/components/TheHeader.svelte';
	import { render } from 'svelte/server';

	let { children } = $props();
</script>

<TheHeader />
<main>
	<div class="container">
		<div class="content">
			{@render children()}
		</div>
	</div>
</main>
<TheFooter />
