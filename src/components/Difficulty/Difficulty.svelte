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
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
  <Radio {...$$props} on:change />
</Block>
