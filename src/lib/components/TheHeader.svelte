<script>
	import { onDestroy } from 'svelte';
	import { locale, setLocale } from '$lib/stores/locale.js';
	import { isHidden } from '$lib/utils/scroll.js';
	import { navItems } from '$lib/data/nav.js';

	let currentLocale = 'en';
	const unsubscribe = locale.subscribe((value) => (currentLocale = value));

	onDestroy(unsubscribe);
</script>

<header class:isHidden={$isHidden}>
	<div class="container">
		<div class="line">
			<div class="line_left">
				<a href="/" class="img_wrap" nofollow>
					<img src="/logo.webp" alt="logo" />
				</a>
			</div>
			<div class="line_right">
				<nav class="nav">
					<ul>
						{#each navItems as item}
							<li>
								{#if item.link}
									<a href={item.link} rel={item.rel}>
										{currentLocale === 'ru' ? item.title_ru : item.title_en}
									</a>
								{:else}
									<span>{currentLocale === 'ru' ? item.title_ru : item.title_en}</span>
									<ul>
										{#each item.submenu as sub}
											<li>
												<a href={sub.link} rel={sub.rel}>
													{currentLocale === 'ru' ? sub.title_ru : sub.title_en}
												</a>
											</li>
										{/each}
									</ul>
								{/if}
							</li>
						{/each}
					</ul>
				</nav>
				{#if currentLocale === 'ru'}
					<button
						on:click={() => setLocale('en')}
						class="locale-btn"
						aria-label="Switch to English"
					>
						<svg
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="locale-icon"
						>
							<path
								d="M12.6087 22.8696C18.1316 22.8696 22.6087 18.3924 22.6087 12.8696C22.6087 7.34672 18.1316 2.86956 12.6087 2.86956C7.08586 2.86956 2.6087 7.34672 2.6087 12.8696C2.6087 18.3924 7.08586 22.8696 12.6087 22.8696Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M2.6087 12.8696H22.6087"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12.6087 2.86956C15.11 5.60792 16.5315 9.1616 16.6087 12.8696C16.5315 16.5775 15.11 20.1312 12.6087 22.8696C10.1074 20.1312 8.68595 16.5775 8.6087 12.8696C8.68595 9.1616 10.1074 5.60792 12.6087 2.86956Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				{:else}
					<button
						on:click={() => setLocale('ru')}
						class="locale-btn"
						aria-label="Switch to Russian"
					>
						<svg
							width="25"
							height="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="locale-icon"
						>
							<path
								d="M12.6087 22.8696C18.1316 22.8696 22.6087 18.3924 22.6087 12.8696C22.6087 7.34672 18.1316 2.86956 12.6087 2.86956C7.08586 2.86956 2.6087 7.34672 2.6087 12.8696C2.6087 18.3924 7.08586 22.8696 12.6087 22.8696Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M2.6087 12.8696H22.6087"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M12.6087 2.86956C15.11 5.60792 16.5315 9.1616 16.6087 12.8696C16.5315 16.5775 15.11 20.1312 12.6087 22.8696C10.1074 20.1312 8.68595 16.5775 8.6087 12.8696C8.68595 9.1616 10.1074 5.60792 12.6087 2.86956Z"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				{/if}
			</div>
		</div>
	</div>
</header>

<style>
	header.isHidden {
		transform: translateY(-100%);
	}

	.img_wrap {
		height: 4rem;
	}
	.img_wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.line {
		display: flex;
		direction: row;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		align-items: center;
	}
	.line_left {
		display: flex;
	}
	.line_right {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		gap: 1rem;
	}

	.nav ul {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		list-style: none;
		gap: 1rem;
	}
	.locale-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: inherit;
		border: none;
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		font-size: 20px;
		line-height: 1;
		cursor: pointer;
		transition: background-color 0.3s ease;
		color: var(--primary);
	}
	.locale-icon {
		width: 100%;
		height: 100%;
		stroke: currentColor; /* это позволяет менять цвет иконки с помощью CSS */
	}
	.locale-btn:hover {
		color: var(--primary-light);
	}
</style>
