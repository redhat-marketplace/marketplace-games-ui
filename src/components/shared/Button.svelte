<script>
  export let type = "secondary";
  export let disabled = false;

  let btnInnerColor;
  let colorMap = {
    primary: "#32000D",
    secondary: "#041734",
    ghost: "#041734",
  };

  $: btnInnerColor = colorMap[type ?? "primary"];
</script>

<style>
  button {
    position: relative;
    border: 0;
    color: white;
    cursor: pointer;
    margin-top: 5px;
    padding: 8px 48px;
    clip-path: polygon(
      0 30%,
      10% 0,
      100% 0,
      100% 10%,
      100% 70%,
      90% 100%,
      10% 100%,
      0% 100%,
      0% 10%
    );
  }

  button::before {
    content: " ";
    position: absolute;
    display: block;
    top: 1px;
    left: 1px;
    width: 98.75%;
    height: 95%;
    z-index: -1;
    border-radius: 1.5px;
    background: var(--btn-inner-color, #32000d);
    padding: 8px 64px;
    clip-path: polygon(
      0 30%,
      10% 0,
      100% 0,
      100% 10%,
      100% 70%,
      90% 100%,
      10% 100%,
      0% 100%,
      0% 10%
    );
  }

  button:focus {
    outline-color: white;
    outline-width: 1px;
  }

  /* TODO: Hover gradient? */

  .primary {
    background: #cb0243;
  }

  .secondary {
    background: #4092b6;
  }

  .ghost {
    background: #469bbc;
  }

  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

{#if disabled}
  <button
    style="--btn-inner-color: {btnInnerColor}"
    class:disabled
    class={type}
    disabled>
    <slot />
  </button>
{:else}
  <button
    style="--btn-inner-color: {btnInnerColor}"
    class={type}
    {type}
    on:click>
    <slot />
  </button>
{/if}
