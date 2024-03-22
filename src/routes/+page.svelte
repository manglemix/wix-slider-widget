<script lang=ts>
    import { page } from '$app/stores';
	import { beforeUpdate } from 'svelte';
    
    let leftUrl: string; 
    let rightUrl: string;
    beforeUpdate(() => {
        leftUrl = $page.url.searchParams.get('left');
        rightUrl = $page.url.searchParams.get('right');
    });

    let slider = '50%';
</script>

<div>
    <img src={leftUrl} alt="left" class="pane left" style="--slider: {slider}">
    <img src={rightUrl} alt="right" class="pane right" style="--slider: {slider}">
</div>

<style>
    .pane {
        width: 300px;
        position: absolute;
    }

    .left {
        clip-path: rect(0 var(--slider) 100% 0);
    }

    .right {
        clip-path: rect(0 100% 100% var(--slider));
    }
</style>