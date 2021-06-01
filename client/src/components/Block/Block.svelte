<style>
  .block {
    margin-bottom: var(--spacing--07);
  }

  .title {
    background: url('/images/horizontal-divider.svg') no-repeat bottom 0 left 0;
    background-size: 100%;
    font-weight: var(--font-weight--medium);
    text-transform: uppercase;
    margin-bottom: var(--spacing--04);
    padding-bottom: var(--spacing--03);
  }

  .block-content {
    padding: 0 var(--spacing--04) var(--spacing--04);
  }
</style>

<script>
  export let title;
</script>

{#if title}
  <div class="block">
    <h3 class="title">{title}</h3>
    <div class="block-content">
      <slot />
    </div>
  </div>
{/if}
