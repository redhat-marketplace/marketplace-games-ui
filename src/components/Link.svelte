<script>
  export let href = "#";
  export let disabled = false;
  export let target = "_blank";
  export let rel = "noopener noreferrer";
</script>

<style>
  span {
    display: inline-flex;
    align-items: center;
    color: #3284d3;
  }
  span[disabled="true"] {
    cursor: not-allowed;
    opacity: 0.45;
  }
  a {
    color: #3284d3;
    text-decoration: none;
  }
  a:hover {
    color: #8cb8df;
  }
  a:active {
    color: #3c51b0;
  }
</style>

{#if disabled}
  <span {disabled}>
    <slot />
  </span>
{:else}
  <a {href} {target} {rel} on:click on:keydown>
    <span>
      <slot />
    </span>
  </a>
{/if}
