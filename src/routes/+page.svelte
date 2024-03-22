<script lang="ts">
	import { page } from '$app/stores';
	import { beforeUpdate } from 'svelte';

	let width = 500;
	let slider = 50.0;

	let leftUrl: string | null;
	let rightUrl: string | null;

	beforeUpdate(() => {
		leftUrl = $page.url.searchParams.get('left');
		rightUrl = $page.url.searchParams.get('right');

		if ($page.url.searchParams.has('width')) {
			width = Number($page.url.searchParams.get('width'));
		}

		if ($page.url.searchParams.has('slider')) {
			slider = Number($page.url.searchParams.get('slider'));
		}
	});

	let img: HTMLImageElement;
</script>

<div>
	<img src={leftUrl} alt="left" class="pane" bind:this={img} style="--width: {width}px" on:load={() => img = img}/>
	<img
		src={rightUrl}
		alt="right"
		class="pane right"
		style="--slider: {slider}%; --width: {width}px"
	/>
	<div
		id="slider-column"
		style="--height: {img?.height ?? 0}px; --left: {(slider / 100) * width + 7}px;"
	></div>
	<div id="sliderPanel" style="--height: {img?.height ?? 0}px; --width: {width}px;">
		<input type="range" bind:value={slider} step="any" />
	</div>
</div>

<style>
	:global(body) {
		background-color: black;
	}

	* {
		margin: 0;
		padding: 0;
	}

	#sliderPanel {
		display: flex;
		flex-direction: column;
		width: var(--width);
		height: var(--height);
		justify-content: center;
	}

	#sliderPanel > input {
		margin-left: -7px;
		margin-right: -7px;
		z-index: 100;
		appearance: none;
		background: transparent;
		clip-path: rect(0 calc(100% - 7px) 100% 6px);
	}

	#slider-column {
		position: absolute;
		height: var(--height);
		width: 1px;
		left: var(--left);
		z-index: 100;
		background-color: white;
	}

	.pane {
		width: var(--width);
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
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: white;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-moz-range-thumb {
		border: none;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: white;
	}

	/* for ie */
	input[type='range']::-ms-thumb {
		border: none;
		height: 16px;
		width: 16px;
		border-radius: 50%;
		background: white;
	}
</style>
