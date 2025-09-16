<script>
	let { title, text, img, alternate = null } = $props();
</script>

<div class="content__wrapper">
	<div class="content__container {alternate ? 'alternate' : ''}">
		<div class="content">
			<div
				class="title bg-gradient-to-b from-white to-neutral-700 bg-clip-text text-3xl text-transparent"
			>
				{@html title}
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
		height: 100vh;
		width: 100%;
		padding: 100px 35px 30px 0;
		scroll-snap-align: center;
		flex-shrink: 0;
	}
	.content__container {
		display: flex;
		justify-content: center;
	}
	.content__container.alternate {
		flex-direction: row-reverse;
	}
	.content {
		display: flex;
		gap: 20px;
		flex-direction: column;
		position: relative;
		z-index: 2;
		flex-shrink: 0;
	}
	.title {
		padding: 10px 20px 10px 0;
		letter-spacing: -20px;
		font: var(--font-main);
		font-size: 48px;
		white-space: normal;
	}
	.text {
		max-width: 380px;
		padding: 0 15px;
		font: var(--font-text);
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
		align-self: self-end;
		max-width: 50%;
		position: relative;
		z-index: 1;
	}
</style>
