<script>
  import SnakeBody from './SnakeBody.svelte';

  export let snakeBodies = [];
</script>

{#each snakeBodies as coordinates}
  <SnakeBody {coordinates} />
{/each}
