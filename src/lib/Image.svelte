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
		perspective: 1000px;
	}
	.image__wrapper img {
		animation: wobble 4s ease-in-out infinite;
	}

	@keyframes jump {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-50px);
		}
	}
	@keyframes wobble {
		0% {
			transform: rotateY(6deg) rotateX(2deg) translateZ(0px);
		}
		25% {
			transform: rotateY(0deg) rotateX(0deg) translateZ(6px);
		}
		75% {
			transform: rotateY(-4deg) rotateX(-2deg) translateZ(-6px);
		}
		100% {
			transform: rotateY(6deg) rotateX(2deg) translateZ(0px);
		}
	}
</style>
