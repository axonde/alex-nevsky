<script>
	let { url } = $props();
</script>

<div class="image__wrapper">
	<img src={url} alt="decorate illustration" />
</div>

<style>
	.image__wrapper {
		transition: ease-in-out;
		animation: jump 2s ease-in-out 1s infinite alternate;
	}

	@keyframes jump {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-50px);
		}
	}
</style>
