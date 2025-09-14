<script>
	import Image from '$lib/Image.svelte';
	import Scene from '$lib/Scene.svelte';
	import Background from '$lib/Background.svelte';
</script>

<Background />

<!-- Nursery -->
<Scene
	title="Заголовок"
	text="Lorem ipsum dolor sit amet consectetur. Tincidunt consequat et consequat lectus scelerisque adipiscing eget lectus id. "
>
	{#snippet img()}
		<Image url="art-1.png" />
	{/snippet}
</Scene>
