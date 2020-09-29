<script>
  export let coordinates;
</script>

<style>
    .food {
        border: 1px solid #C9190B;
        background-color: #470000;
        z-index: 0;
    }
</style>

<div class="food" style="grid-row-start: {coordinates.y}; grid-column-start: {coordinates.x};"/>
