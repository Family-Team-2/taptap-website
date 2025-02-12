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
				<a href="/" class="img_wrap" nofollow aria-label="На главную">
					<svg
						width="209"
						height="50"
						viewBox="0 0 209 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M64.9688 18.88V14.4545H84.0245V18.88H77.1882V37H71.8161V18.88H64.9688ZM92.7772 37H86.9206L94.5275 14.4545H101.782L109.389 37H103.532L98.2374 20.1349H98.0613L92.7772 37ZM91.9956 28.1271H104.237V32.2663H91.9956V28.1271ZM115.846 37V14.4545H125.16C126.848 14.4545 128.304 14.7848 129.53 15.4453C130.763 16.0985 131.713 17.0122 132.381 18.1864C133.049 19.3533 133.383 20.7111 133.383 22.2596C133.383 23.8155 133.042 25.1768 132.359 26.3438C131.684 27.5033 130.719 28.4023 129.464 29.0408C128.209 29.6793 126.719 29.9986 124.994 29.9986H119.248V25.7053H123.982C124.804 25.7053 125.49 25.5621 126.04 25.2759C126.598 24.9897 127.02 24.5897 127.306 24.076C127.592 23.5549 127.736 22.9495 127.736 22.2596C127.736 21.5624 127.592 20.9606 127.306 20.4542C127.02 19.9405 126.598 19.5442 126.04 19.2653C125.483 18.9864 124.796 18.8469 123.982 18.8469H121.296V37H115.846ZM139.361 18.88V14.4545H158.417V18.88H151.581V37H146.209V18.88H139.361ZM167.17 37H161.313L168.92 14.4545H176.175L183.782 37H177.925L172.63 20.1349H172.454L167.17 37ZM166.388 28.1271H178.63V32.2663H166.388V28.1271ZM190.239 37V14.4545H199.552C201.24 14.4545 202.697 14.7848 203.923 15.4453C205.156 16.0985 206.106 17.0122 206.774 18.1864C207.442 19.3533 207.776 20.7111 207.776 22.2596C207.776 23.8155 207.434 25.1768 206.752 26.3438C206.077 27.5033 205.112 28.4023 203.857 29.0408C202.602 29.6793 201.112 29.9986 199.387 29.9986H193.641V25.7053H198.374C199.196 25.7053 199.883 25.5621 200.433 25.2759C200.991 24.9897 201.413 24.5897 201.699 24.076C201.985 23.5549 202.128 22.9495 202.128 22.2596C202.128 21.5624 201.985 20.9606 201.699 20.4542C201.413 19.9405 200.991 19.5442 200.433 19.2653C199.875 18.9864 199.189 18.8469 198.374 18.8469H195.688V37H190.239Z"
							fill="currentColor"
						/>
						<rect x="52" y="4" width="2" height="43" fill="currentColor" />
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3 42V7H27V42H3ZM6 50H23H25C27.9244 50 30 47.2249 30 44.2V7V6V5.79999C30 2.77521 27.9244 0 25 0H5C2.07559 0 0 2.77521 0 5.79999V6V7V44.2C0 47.2249 2.07559 50 5 50H6ZM17 46C17 47.1046 16.1046 48 15 48C13.8954 48 13 47.1046 13 46C13 44.8954 13.8954 44 15 44C16.1046 44 17 44.8954 17 46ZM22 3H8V5H22V3Z"
							fill="#FC613A"
						/>
					</svg>
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
		display: flex;
		align-items: center;
		justify-content: center;
		height: 64px;
		max-height: 64px;
		overflow: hidden;
		aspect-ratio: 4 / 1;
	}
	.img_wrap svg {
		width: 100%;
		height: auto;
		max-height: 100%;
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
			height: 48px;
			max-height: 48px;
		}
		.img_wrap svg {
			max-height: 48px;
		}
	}
	@media (max-width: 480px) {
		.nav {
			display: none;
		}

		.img_wrap {
			transform: translateX(-4px);
			height: 44px;
			max-height: 44px;
		}
		.img_wrap svg {
			max-height: 44px;
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
