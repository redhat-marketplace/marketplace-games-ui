<style>
  .block {
    margin-bottom: 2rem;
  }
  .title {
    background: url('/images/horizontal-divider.svg') no-repeat bottom 0 left 0;
    background-size: 100%;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
  }

  .block-content {
    padding: 0 0.75rem 0.75rem;
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
