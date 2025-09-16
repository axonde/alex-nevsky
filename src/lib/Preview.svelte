<script>
	import Particles from '$lib/Particles.svelte';
	import { fade } from 'svelte/transition';
	let { title, text } = $props();
</script>

<div class="preview__wrapper" transition:fade>
	<img src="icon.png" alt="Alexander Nevsky" />
	<div class="preview__title">{title}</div>
	<div class="preview__text">{@html text}</div>

	<Particles />
</div>

<style>
	.preview__wrapper {
		height: 100vh;
		flex-shrink: 0;
		scroll-snap-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		font: var(--font-main);
		max-width: calc(100vw - 300px);
		position: relative;
	}
	.preview__title {
		font-size: 50px;
	}
	img {
		height: 40vh;
	}
</style>
