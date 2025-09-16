<script>
	import { fade } from 'svelte/transition';
	import NumberFlow from '@number-flow/svelte';
	let { values, bind = $bindable() } = $props();
	let selected = $state(0);
	let fadeoff = $state(true);

	$effect(() => {
		const height = bind.scrollHeight;
		const gap = height / (values.length + 2);
		bind.addEventListener('scroll', (/**@type any */ e) => {
			const currentScroll = e.target.scrollTop;
			const index = Math.round(currentScroll / gap);
			if (index === 0 || index > values.length) {
				fadeoff = true;
				return;
			}
			selected = index;
			fadeoff = false;
		});
	});
</script>

<div class="scroller {fadeoff ? 'disable' : ''}" transition:fade>
	<div class="items__wrapper">
		{#each [...Array(values.length).keys()] as i (i)}
			<div class="item {i === selected - 1 ? 'selected' : ''}"></div>
		{/each}
	</div>
	<NumberFlow value={values[selected - 1]} />
</div>

<style>
	.scroller {
		height: 100%;
		gap: 30px;
		position: fixed;
		left: 40px;
		display: flex;
		gap: 30px;
		align-items: center;
		font: var(--font-num);
		font-size: calc((1vw + 1vh) * 4);
		transition: opacity 0.3s ease-in-out;
	}
	.scroller.disable {
		opacity: 0;
	}
	.items__wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 25px;
		width: 80px;
	}

	.item {
		height: 2px;
		width: 30px;
		background-color: white;
		transition: 0.2s ease-in-out;
	}

	.item.selected {
		height: 5px;
		width: 80px;
	}
</style>
