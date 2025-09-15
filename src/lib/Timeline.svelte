<script>
	import { fade } from 'svelte/transition';
	import NumberFlow from '@number-flow/svelte';
	let { values, bind = $bindable() } = $props();
	let selected = $state(0);
	let fadeoff = $state(false);

	$effect(() => {
		const height = bind.scrollHeight;
		const gap = height / (values.length + 1);
		bind.addEventListener('scroll', (/**@type any */ e) => {
			const currentScroll = e.target.scrollTop;
			const index = Math.round(currentScroll / gap);
			console.log(index, height, currentScroll);
			if (index >= values.length) {
				console.log('end');
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
			<div class="item {i === selected ? 'selected' : ''}"></div>
		{/each}
	</div>
	<!-- <span class="text" transition:slide> {values[selected]}</span> -->
	<NumberFlow value={values[selected]} />
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
