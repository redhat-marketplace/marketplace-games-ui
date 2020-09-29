<script>
  import SnakeBody from "./SnakeBody.svelte";

  export let snakeBodies = [];
</script>

{#each snakeBodies as snakeBody}
    <SnakeBody coordinates={snakeBody} />
{/each}
