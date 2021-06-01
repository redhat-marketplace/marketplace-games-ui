<style>
  span {
    display: inline-flex;
    align-items: center;
    color: inherit;
  }

  span[disabled='true'] {
    cursor: not-allowed;
    opacity: 0.45;
  }

  a {
    color: var(--color--link);
    text-decoration: none;
  }

  a:hover {
    color: var(--color--link--HOVER);
  }

  a:active {
    color: var(--color--link--ACTIVE);
  }
</style>

<script>
  export let href = '#';
  export let disabled = false;
  export let target = '_blank';
  export let rel = 'noopener noreferrer';
</script>

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
