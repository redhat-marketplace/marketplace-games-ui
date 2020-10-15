<style>
  div {
    width: fit-content;
    height: 40px;
  }

  input {
    display: none;
  }
  .container {
    position: relative;
    padding: 0 14px;
    width: fit-content;
    background: url('/images/radio-background.svg') no-repeat top 0 right 0;
    overflow: visible;
    background-position: center;
    height: 40px;
  }

  .selected {
    background: linear-gradient(transparent, rgba(0, 102, 204, 0.35));
  }

  label:hover:not(.selected) {
    background: linear-gradient(transparent, rgba(0, 159, 232, 0.15));
  }

  label {
    display: inline-block;
    padding: 0 10px;
    padding-top: 10px;
    color: #fff;
  }

  label:not(.selected) {
    background: transparent;
  }
</style>

<script>
  export let options = ['Option 1', 'Option 2'];
  export let selected = undefined;
</script>

{#if options}
  <div class="container">
    <div>
      {#each options as value}
        <label class:selected={value === selected}>
          <input
            {value}
            type="radio"
            bind:group={selected}
            aria-checked={value === selected}
            on:change
          />
          {value}
        </label>
      {/each}
    </div>
  </div>
{/if}
