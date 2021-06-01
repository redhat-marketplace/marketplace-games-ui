<style>
  .corner--left--top:after,
  .corner--left--top {
    position: absolute;
    top: var(--corner-size);
    left: var(--corner-size);
  }

  .corner--left--bottom {
    position: absolute;
    bottom: var(--corner-size);
    left: var(--corner-size);
  }

  .corner--right--bottom {
    position: absolute;
    bottom: var(--corner-size);
    right: var(--corner-size);
  }

  .corner--right--top {
    position: absolute;
    top: var(--corner-size);
    right: var(--corner-size);
  }

  .lines {
    background: transparent;
    position: absolute;
    border: 1px solid transparent;
    margin: 0 auto;
    height: 3%;
    width: 3%;
    left: 50%;
    top: 50%;
    transition: height 0.5s ease-in-out, width 0.5s ease-in-out,
      left 0.5s ease-in-out, top 0.5s ease-in-out, border 0.5s linear 2s;
  }

  .lines:before {
    border-top: 1px solid rgba(0, 95, 96, 0.7);
    border-bottom: 1px solid rgba(0, 95, 96, 0.7);
    animation: animateX 1.5s ease-in-out 2s;
    transform-origin: 100% 50%;
    transition: transform 2s ease-in-out;
    transform: scaleX(0);
  }

  .lines:after {
    border-left: 1px solid rgba(0, 95, 96, 0.7);
    border-right: 1px solid rgba(0, 95, 96, 0.7);
    animation: animateY 1.5s ease-in-out reverse 2s;
    transform-origin: 50% 100%;
    transform: scaleY(0);
  }

  .lines:before,
  .lines:after {
    content: '';
    transition: 0.25s;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  path {
    fill: transparent;
    stroke: #008bad;
    transition: 2s ease-in-out;
  }

  @keyframes animateX {
    0% {
      transform: scaleX(0);
      opacity: 1;
    }
    100% {
      transform: scaleX(1);
      opacity: 0.5;
    }
  }

  @keyframes animateY {
    0% {
      transform: scaleY(1);
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      opacity: 0.5;
    }
  }
</style>

<script>
  import { onMount } from 'svelte';
  import { quintOut, quintInOut } from 'svelte/easing';
  import { scale, fade, draw } from 'svelte/transition';
  export let size = -2;
  export let animate = true;
  export let lines = true;
  let show, svgContainerRef;

  let cornerDrawOpts = { duration: 1250, delay: 850, easing: quintOut };
  onMount(() => {
    setTimeout(() => {
      if (!animate) svgContainerRef.style.position = 'unset';
      show = true;
    }, 0);
    setTimeout(() => {
      svgContainerRef.querySelectorAll('path').forEach((path) => {
        path.style.fill = '#008BAD';
      });
      if (animate) {
        svgContainerRef.style.height = '105%';
        svgContainerRef.style.width = '105%';
        svgContainerRef.style.top = '0';
        svgContainerRef.style.left = '-2.5%';
        svgContainerRef.style.zIndex = '-1';
        svgContainerRef.style.border = '1px solid rgba(0, 95, 96, .85)';
      }
    }, cornerDrawOpts.duration);
  });
</script>

{#if show}
  <div
    bind:this={svgContainerRef}
    in:scale={{ duration: 1800, delay: 1750, opacity: 0.9, start: 1, easing: quintInOut }}
    out:fade
    class:lines
    style="--corner-size: {size}px"
  >
    <svg
      class="corner--left--top"
      width="11"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
    ><path
        in:draw={cornerDrawOpts}
        d="M3 3v9H0V0h11v3H3z"
        fill="#008BAD"
        fill-rule="evenodd"
      /></svg>
    <svg
      class="corner--left--bottom"
      width="11"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
    ><path
        in:draw={cornerDrawOpts}
        d="M3 9V0H0v12h11V9H3z"
        fill="#008BAD"
        fill-rule="evenodd"
      /></svg>
    <svg
      class="corner--right--bottom"
      width="11"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
    ><path
        in:draw={cornerDrawOpts}
        d="M8 9V0h3v12H0V9h8z"
        fill="#008BAD"
        fill-rule="evenodd"
      /></svg>
    <svg
      class="corner--right--top"
      width="11"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
    ><path
        in:draw={cornerDrawOpts}
        d="M8 3v9h3V0H0v3h8z"
        fill="#008BAD"
        fill-rule="evenodd"
      /></svg>
  </div>
{/if}
