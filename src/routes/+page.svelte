<script>
	import Image from '$lib/Image.svelte';
	import Scene from '$lib/Scene.svelte';
	import Background from '$lib/Background.svelte';
	import Timeline from '$lib/Timeline.svelte';

	let scenes = $state();
</script>

<Background />

<div class="wrapper">
	{#if scenes}
		<Timeline values={[1220, 234, 1282]} bind:bind={scenes} />
	{/if}

	<div class="scenes" bind:this={scenes}>
		{#each [1, 2, 3] as i (i)}
			<!-- Nursery -->
			<Scene
				alternate={i % 2 === 0}
				title="Заголовок"
				text="Lorem ipsum dolor sit amet consectetur. Tincidunt consequat et consequat lectus scelerisque adipiscing eget lectus id. "
			>
				{#snippet img()}
					<Image url="art-{i}.png" />
				{/snippet}
			</Scene>
		{/each}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		gap: 40px;
		width: 100%;
	}
	.scenes {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		/* pointer-events: none; */
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		overflow-y: scroll;
		height: 100vh;
		padding-left: 300px;
		scroll-snap-type: y mandatory;
	}
</style>
