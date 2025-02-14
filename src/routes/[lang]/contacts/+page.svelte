<script>
	import { locale } from '$lib/stores/locale';
	import { onMount } from 'svelte';
	import { contacts_list } from '$lib/data/contacts_list';

	let isMounted = false;

	onMount(() => {
		isMounted = true;
	});
</script>

{#if isMounted}
	<h1>{contacts_list.title[{ $locale }]}</h1>
	<div class="contacts_wrap">
		<span>
			{contacts_list.mail[$locale]}
		</span><a
			href={`mailto:${contacts_list.mail_link}`}
			target={contacts_list.target}
			rel={contacts_list.rel}
		>
			{contacts_list.mail_link}
		</a>

		{contacts_list.tg[$locale]}
		<span> </span><a
			href={contacts_list.tg_link}
			target={contacts_list.target}
			rel={contacts_list.rel}
		>
			{contacts_list.tg_link}
		</a>
	</div>
{:else}
	<p></p>
{/if}

<style>
	.contacts_wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.contacts_wrap a {
		margin-bottom: 10px;
		display: block;
		color: inherit;
		transition: all 0.3s ease-in;
		text-decoration: underline;
		color: var(--primary);
	}
</style>
