<script>
  export let coordinates = {x: 50, y: 50};
</script>

<style>
    .snake-body {
        box-shadow: 0 0 8px #0F958E;
        border: 1px solid #ACE12E;
        background-color: #476B00;
        z-index: 3;
    }
</style>

<div class="snake-body" style="grid-row-start: {coordinates.y}; grid-column-start: {coordinates.x};"/>
