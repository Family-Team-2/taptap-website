<script>
	import { locale, setLocale } from '$lib/stores/locale.js';
	import { isHidden } from '$lib/utils/scroll.js';
	import { navItems } from '$lib/data/nav.js';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import TheMobileNav from './TheMobileNav.svelte';
	import TheBurger from './UI/buttons/TheBurger.svelte';

	let isMounted = false;
	let isNavOpen = false;

	function toggleNav() {
		isNavOpen = !isNavOpen;
	}
	function closeNav() {
		console.log('Закрытие меню через оверлей');
		isNavOpen = false;
	}
	function updateURL(newLang) {
		if (typeof window === 'undefined') return;

		const currentPath = window.location.pathname;
		const match = currentPath.match(/^\/(ru|en)(\/|$)/);
		const newPath = match
			? currentPath.replace(/^\/(ru|en)/, `/${newLang}`)
			: `/${newLang}${currentPath}`;

		if (currentPath !== newPath) {
			goto(newPath, { replaceState: true });
		}
	}

	onMount(() => {
		isMounted = true;

		if (typeof window !== 'undefined') {
			const storedLang =
				localStorage.getItem('locale') || (navigator.language.startsWith('ru') ? 'ru' : 'en');
			locale.set(storedLang);
			updateURL(storedLang);
		}
	});

	$: {
		if (isMounted) updateURL($locale);
	}
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
				{#if isMounted}
					<nav class="nav">
						<ul>
							{#each navItems as item}
								<li>
									{#if item.link}
										<a href={`/${$locale}${item.link}`} rel={item.rel}>
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
								</li>
							{/each}
						</ul>
					</nav>
				{:else}
					<p class="roller"></p>
				{/if}

				<!-- Кнопка переключения языка -->
				<button
					onclick={() => {
						const newLang = $locale === 'ru' ? 'en' : 'ru';
						setLocale(newLang); // Обновляем store с новым языком
						goto(`/${newLang}`, { replaceState: true }); // Перенаправляем на новую локаль
					}}
					class="locale-btn"
					aria-label="Switch language"
					><svg
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
				<TheBurger {toggleNav} {isNavOpen} />
			</div>
		</div>
	</div>
</header>
{#if isNavOpen}
	<TheMobileNav bind:isOpen={isNavOpen} {closeNav} {toggleNav} />
{/if}

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
		border-color: inherit;
		transition: background-color 0.3s ease;
		color: var(--primary);
		background: none;
	}
	.locale-icon {
		width: 100%;
		height: 100%;
		stroke: currentColor;
	}
	.locale-btn:hover {
		color: var(--primary-light);
	}
	@media (max-width: 768px) {
		.nav {
			display: none;
		}
		.img_wrap {
			height: 3rem;
		}
	}
	@media (max-width: 480px) {
		.nav {
			display: none;
		}
		.img_wrap {
			height: 2.8rem;
			transform: translateX(-4px);
		}
		.line_right {
			gap: 0.5rem;
		}
		.locale-btn {
			width: 1.8rem;
			height: 1.8rem;
		}
	}
</style>
