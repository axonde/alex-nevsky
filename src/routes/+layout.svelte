<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<!-- the favicon here <-->
</svelte:head>

{@render children?.()}
