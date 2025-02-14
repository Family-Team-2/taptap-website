<script>
	import Copyright from '$lib/components/Copyright.svelte';
	import TheSocial from '$lib/components/TheSocial.svelte';
	import { footer_links } from '$lib/data/footer_link';
	import { locale } from '$lib/stores/locale.js';
	import { onMount } from 'svelte';

	let isMounted = false;

	onMount(() => {
		isMounted = true;
	});
</script>

<footer>
	<div class="container">
		{#if isMounted}
			<div class="bottom_line">
				{#each footer_links as item}
					{#if item.link}
						<a href={`/${$locale}${item.link}`} rel={item.rel} class="link">
							{@html item[`title_${$locale}`]}
						</a>
					{:else}
						<span>{@html item[`title_${$locale}`]}</span>
						<ul>
							{#each item.submenu as sub}
								<li>
									<a href={`/${$locale}${sub.link}`} rel={sub.rel}>
										{@html sub[`title_${$locale}`]}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				{/each}
			</div>
		{:else}
			<p></p>
		{/if}
		<TheSocial />
		<Copyright />
	</div>
</footer>

<style>
	.bottom_line {
		display: flex;
		flex-basis: 100%;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 1rem 0;
		gap: 2rem;
	}
	.link {
		display: block;
		color: inherit;
		transition: all 0.3s ease-in;
		text-decoration: underline;
		color: var(--primary);
	}
	.link:hover {
		color: var(--primary);
	}

	@media (max-width: 768px) {
		.bottom_line {
			gap: 1rem;
		}
		.link {
			font-size: 1rem;
		}
	}
	@media (max-width: 480px) {
		.bottom_line {
			gap: 0.5rem;
			padding: 0.5rem 0;
		}
		.link {
			font-size: 0.8rem;
		}
	}
</style>
