<script>
	let blurAmount = 70;
	let baseColor = '#101011'; // Темно-пурпурный, почти черный
</script>

<div class="background-container" style="background: {baseColor}">
	<!-- Цветные размытые движущиеся элементы -->
	<div class="blob blob-1" style="filter: blur({blurAmount}px)"></div>
	<div class="blob blob-2" style="filter: blur({blurAmount}px)"></div>
	<div class="blob blob-3" style="filter: blur({blurAmount}px)"></div>

	<!-- Слой для вспышек -->
	<div class="flash-overlay"></div>
</div>

<style>
	/* Контейнер, который занимает весь экран и имеет тёмный фон */
	.background-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -100; /* Чтобы контент был сверху */
	}

	/* Общий стиль для всех "блобов" - цветных размытых пятен */
	.blob {
		position: absolute;
		border-radius: 50%;
		opacity: 0.3; /* Полупрозрачные для смешивания цветов */
		animation-timing-function: ease-in-out;
		animation-iteration-count: infinite;
		animation-direction: alternate;
	}

	/* Конкретные экземпляры блобов с разными цветами, размерами и анимацией */
	.blob-1 {
		background: rgba(24, 24, 29, 1); /* Черный */
		width: 40vmin;
		height: 40vmin;
		top: 20%;
		left: 10%;
		animation-name: move-1;
		animation-duration: 15s;
	}

	.blob-2 {
		background: rgba(8, 62, 210, 0.4); /* Темно-синий */
		width: 60vmin;
		height: 60vmin;
		bottom: 10%;
		right: 10%;
		animation-name: move-2;
		animation-duration: 20s;
	}

	.blob-3 {
		background: rgba(6, 38, 38, 0.7); /* Тёмно-зелённый */
		width: 50vmin;
		height: 50vmin;
		top: 50%;
		left: 50%;
		animation-name: move-3;
		animation-duration: 25s;
	}

	/* Анимации для движения "блобов" */
	@keyframes move-1 {
		0% {
			transform: translate(0, 0) scale(1);
		}
		100% {
			transform: translate(20vmin, 15vmin) scale(1.2);
		}
	}

	@keyframes move-2 {
		0% {
			transform: translate(0, 0) scale(1);
		}
		100% {
			transform: translate(-15vmin, -10vmin) scale(1.1);
		}
	}

	@keyframes move-3 {
		0% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(10vmin, -15vmin) scale(1.15);
		}
		66% {
			transform: translate(-20vmin, 5vmin) scale(0.9);
		}
		100% {
			transform: translate(10vmin, 15vmin) scale(1.05);
		}
	}

	/* Слой поверх всего для эффекта "вспышек" */
	.flash-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		pointer-events: none;
		animation: flash 12s infinite;
		opacity: 0;
	}

	@keyframes flash {
		0%,
		100% {
			opacity: 0;
		}
		5%,
		7% {
			opacity: 0.1;
			background: rgba(255, 255, 255, 0.2);
		} /* Короткая белая вспышка */
		50% {
			opacity: 0;
		}
		75%,
		77% {
			opacity: 0.85;
			background: #000;
		} /* Черная вспышка */
	}
</style>
