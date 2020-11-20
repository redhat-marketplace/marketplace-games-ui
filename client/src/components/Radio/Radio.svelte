<style>
  div {
    height: 100%;
  }

  div,
  label {
    align-items: center;
    display: flex;
  }

  input {
    height: 0;
    position: absolute;
    width: 0;
  }
  .container {
    background: url('/images/radio-background.svg') no-repeat top 0 right 0;
    background-position: center;
    height: calc(var(--options-cnt) * 16px);
    justify-content: center;
    min-width: calc(var(--options-cnt) * 70px);
    position: relative;
    padding: 0 14px;
    overflow: visible;
  }

  .selected {
    background: linear-gradient(transparent, rgba(0, 102, 204, 0.35));
  }

  label:hover:not(.selected) {
    background: linear-gradient(transparent, rgba(0, 159, 232, 0.15));
  }

  label:hover {
    cursor: pointer;
  }
  label {
    color: #fff;
    height: 70%;
    padding: 0 1rem;
    font-size: 0.875rem;
    font-weight: 500;
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
  <div class="container" style="--options-cnt: {Math.max(2, options.length)}">
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
