<script lang=ts>
    import { page } from '$app/stores';
	import { beforeUpdate } from 'svelte';
    
    let width = 500;

    let leftUrl: string | null; 
    let rightUrl: string | null;

    beforeUpdate(() => {
        leftUrl = $page.url.searchParams.get('left');
        rightUrl = $page.url.searchParams.get('right');

        if ($page.url.searchParams.has("width")) {
            width = Number($page.url.searchParams.get("width"));
        }
    });

    let slider = 50.0;
    let img: HTMLImageElement;
</script>

<div>
    <img src={leftUrl} alt="left" class="pane" bind:this={img} style="--width: {width}px">
    <img src={rightUrl} alt="right" class="pane right" style="--slider: {slider}%; --width: {width}px">
    <div id="slider-column" style="--height: {img?.height ?? 0}px; --left: {slider / 100 * width + 6}px;"></div>
    <div id="sliderPanel" style="--height: {img?.height ?? 0}px; --width: {width}px;">
        <input type="range" bind:value={slider} step="any">
    </div>
</div>

<style>
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
        clip-path: rect(0 calc(100% - 7px) 100% 7px);
    }

    #slider-column {
        position: absolute;
        height: var(--height);
        width: 3px;
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
</style>