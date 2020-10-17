<style>
  .help-text {
    font-size: 0.75rem;
  }
  p {
    margin-bottom: 0.75rem;
  }
</style>

<script>
  import Block from '../Block/Block.svelte';
  import Radio from '../Radio/Radio.svelte';
</script>

<Block title="Difficulty">
  <p class="help-text" data-testid="help-text">
    Changing the difficulty will increase or decrease the speed at which the snake travels.
  </p>
  <Radio {...$$restProps} on:change />
</Block>