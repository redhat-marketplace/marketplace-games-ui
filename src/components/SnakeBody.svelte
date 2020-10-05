<style>
  .snake-body {
    box-shadow: 0 0 8px #0f958e;
    border: 1px solid #ace12e;
    background-color: #476b00;
    z-index: 3;
  }
</style>

<script>
  export let coordinates = { x: 50, y: 50 };
</script>

<div
  class="snake-body"
  style="grid-row-start: {coordinates.y}; grid-column-start: {coordinates.x};"
></div>
