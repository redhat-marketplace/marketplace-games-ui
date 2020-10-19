<style>
  :global(:root) {
    --color-one: #fff;
  }

  :global(body) {
    background-color: #06092c;
    color: var(--color-one);
  }
</style>

<script>
  import Snake from './games/Snake/index.svelte';
  import Layout from './components/Layout/Layout.svelte';
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Layout>
  <Snake />
</Layout>
