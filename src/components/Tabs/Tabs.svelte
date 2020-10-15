<style>
  .tabs-container {
    display: flex;
    position: relative;
    width: fit-content;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 25px;
    padding-right: 45px;
    margin-bottom: 0;
    list-style: none;
  }

  span {
    display: block;
    padding: 0.25rem 1rem;
    cursor: pointer;
  }

  li.active > span {
    color: #fff;
  }

  li.active:after {
    content: '';
    width: 90%;
    display: block;
    margin: 0 auto;
    border-bottom: solid 2px #73bcf7;
    box-shadow: 0 -2.5px 3px -0.25px rgba(115, 188, 247, 0.75);
  }

  li:not(.active) > span {
    color: #008bad;
    background: linear-gradient(transparent, rgba(0, 102, 204, 0.35));
  }
</style>

<script>
  import { onMount } from 'svelte';
  export let tabItems;
  export let activeTabId;

  onMount(() => {
    if (Array.isArray(tabItems) && !activeTabId) {
      activeTabId = tabItems[0].id;
    }
  });

  const handleTabClick = (tabId) => {
    activeTabId = tabId;
  };
</script>

<div class="tabs-container">
  {#if Array.isArray(tabItems)}
    <ul>
      {#each tabItems as item}
        <li
          class={activeTabId === item.id ? 'active' : ''}
          role="tab"
          aria-selected={activeTabId === item.id}
          on:click
        >
          <span on:click={handleTabClick(item.id)}>{item.label}</span>
        </li>
      {/each}
    </ul>
  {/if}
</div>
