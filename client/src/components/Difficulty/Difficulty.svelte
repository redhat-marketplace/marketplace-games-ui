<style>
  .help-text {
    font-size: var(--spacing--04);
  }
  
  p {
    margin-bottom: var(--spacing--04);
  }
</style>

<script>
  import Block from '../Block/Block.svelte';
  import Radio from '../Radio/Radio.svelte';
</script>

<Block title="Difficulty">
  <p class="help-text" data-testid="help-text">
    Changing the difficulty will increase or decrease the speed at which the
    snake travels.
  </p>
  <Radio {...$$restProps} on:change />
</Block>
