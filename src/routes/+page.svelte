<script>
    let slider = '50%';
</script>

<div>
    <img src="/STILL2.jpg" alt="left" class="pane left" style="--slider: {slider}">
    <img src="/STILL1.jpg" alt="right" class="pane right" style="--slider: {slider}">
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