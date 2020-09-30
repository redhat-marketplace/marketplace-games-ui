<script>
  export let group = undefined;
  export let options = ["Radio Button", "Green", "Blue"];
</script>

<style>
  label {
    display: inline-block;
    cursor: pointer;
  }

  input[type="radio"] {
    box-sizing: border-box;
    appearance: none;
    background: transparent;
    outline: 2px solid #011634;
    outline-offset: -4px;
    border: 3px solid #3e8bad;
    width: 24px;
    height: 24px;
  }

  input[type="radio"]:checked {
    background: #13f3fe;
  }

  input,
  span {
    vertical-align: middle;
  }

  span {
    margin-top: 15px;
  }
</style>

{#each options as value}
  <label>
    <input type="radio" bind:group {value} class="input" on:change />
    <span> {value} </span>
  </label>
{/each}
