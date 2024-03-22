<script lang="ts">
	import { page } from '$app/stores';
	import { beforeUpdate } from 'svelte';

	let slider = 50.0;

	let leftUrl: string | null;
	let rightUrl: string | null;

	beforeUpdate(() => {
		leftUrl = $page.url.searchParams.get('left');
		rightUrl = $page.url.searchParams.get('right');

		// if ($page.url.searchParams.has('width')) {
		// 	width = Number($page.url.searchParams.get('width'));
		// }

		if ($page.url.searchParams.has('slider')) {
			slider = Number($page.url.searchParams.get('slider'));
		}
	});

	let aspectRatio = 1.77;
	let img: HTMLImageElement;
</script>

<div>
	<img src={leftUrl} alt="left" class="pane" bind:this={img} on:load={() => aspectRatio = img.width / img.height}/>
	<img
		src={rightUrl}
		alt="right"
		class="pane right"
		style="--slider: {slider}%;"
	/>
	<div
		id="slider-column"
		style="--height: {96 / aspectRatio}vw; --left: calc({slider * 0.96}vw + 6px);"
	></div>
	<div id="sliderPanel" style="--height: {100 / aspectRatio}vw;">
		<input type="range" bind:value={slider} step="any" />
	</div>
</div>

<style>
	:global(body) {
		background-color: transparent;
	}

	* {
		margin: 0;
		padding: 0;
	}

    img {
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

	#sliderPanel {
		display: flex;
		flex-direction: column;
		width: 96vw;
		height: var(--height);
		justify-content: center;
	}

	#sliderPanel > input {
		margin-left: -2vw;
		margin-right: -1.9vw;
		z-index: 100;
		appearance: none;
		background: transparent;
		clip-path: rect(0 calc(100% - 7px) 100% 7px);
	}

	#slider-column {
		position: absolute;
		height: var(--height);
		width: 2px;
		left: var(--left);
		z-index: 100;
		background-color: white;
	}

	.pane {
		width: 96vw;
		position: absolute;
	}

	.right {
		clip-path: rect(0 100% 100% var(--slider));
	}

	/* For slider */
	input[type='range'] {
		-webkit-appearance: none;
        appearance: none;
	}
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		border: none;
		height: 4vw;
		width: 4vw;
		border-radius: 50%;
		background: white;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-moz-range-thumb {
		border: none;
		height: 4vw;
		width: 4vw;
		border-radius: 50%;
		background: white;
	}

	/* for ie */
	input[type='range']::-ms-thumb {
		border: none;
		height: 4vw;
		width: 4vw;
		border-radius: 50%;
		background: white;
	}
</style>
