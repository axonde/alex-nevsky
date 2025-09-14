<script>
	let { title, text, img } = $props();
</script>

<div class="content__wrapper">
	<div class="content__container">
		<div class="content">
			<div
				class="title text-3xl bg-gradient-to-b from-white to-neutral-700 text-transparent bg-clip-text"
			>
				{title}
			</div>
			<div class="text">{text}</div>
		</div>
		<div class="img__wrapper">
			{@render img()}
		</div>
	</div>
</div>

<style>
	.content__wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100svh;
		width: 100%;
		padding: 100px 35px 85px 0;
	}
	.content__container {
		display: flex;
		justify-content: center;
	}
	.content {
		font: var(--font-main);
		display: flex;
		gap: 20px;
		flex-direction: column;
		font-size: 24px;
		max-width: 50%;
	}
	.title {
		font-size: 64px;
		padding: 10px 0;
		letter-spacing: -20px;
		height: 70px;
	}
	.text {
		max-width: 320px;
		padding: 0 15px;
	}
	.text:after {
		content: '';
		background: url('pattern.jpg');
		background-size: 40%;
		height: 30px;
		border-radius: 10px;
		width: 100%;
		display: block;
		margin-top: 15px;
	}
	.img__wrapper {
		max-width: 50%;
	}
</style>
