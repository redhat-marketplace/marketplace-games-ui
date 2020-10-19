<style>
  .food {
    border: 1px solid #c9190b;
    background-color: #470000;
    z-index: 0;
  }
</style>

<script>
  export let coordinates;
</script>

<div
  data-testid="food"
  class="food"
  style="grid-row-start: {coordinates.y}; grid-column-start: {coordinates.x};"
/>
