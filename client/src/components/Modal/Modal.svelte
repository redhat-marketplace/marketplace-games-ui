<style>
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .backdrop {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .modal-container {
    background: transparent;
    max-width: 60vw;
    max-height: 60vh;
    position: relative;
    z-index: 5;
    margin: auto;
  }

  .modal,
  .backdrop,
  .modal-content,
  .modal-container {
    width: 100%;
    height: 100%;
  }

  .modal-content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 8%;
  }

  svg {
    width: 90%;
    height: 90%;
    top: 5%;
    left: 3%;
    z-index: -1;
    overflow: visible;
    position: absolute;
    max-width: 75vmin;
  }
</style>

<script>
  import { onMount } from 'svelte';

  export let open = false;
  export let backdrop = true;
  export let attachToRoot = false;
  let modalRef, svgRef;

  export function show() {
    open = true;
    if (attachToRoot && modalRef) {
      modalRef.style.position = 'absolute';
      modalRef.style.top = '0';
      modalRef.style.left = '0';
      modalRef.style.justifyContent = 'center';

      svgRef.left = '0';
      svgRef.right = '0';
      svgRef.marginRight = 'auto';
      svgRef.marginLeft = 'auto';

      document.body.appendChild(modalRef);
    }
  }
  export function hide() {
    open = false;
    if (attachToRoot && modalRef) {
      document.body.removeChild(modalRef);
    }
  }

  onMount(() => {
    if (attachToRoot && open) {
      show();
    }
  });
</script>

{#if open}
  <div class="modal" bind:this={modalRef}>
    {#if backdrop && attachToRoot}
      <div class="backdrop" on:click={hide} />
    {/if}
    <div class="modal-container">
      <svg
        bind:this={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 424 379"
      >
        <defs>
          <filter
            id="svg-modal-fitler"
            width="115.3%"
            height="118%"
            x="-7.6%"
            y="-9%"
            filterUnits="objectBoundingBox"
          >
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius=".5"
              result="shadowSpreadOuter1"
            />
            <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
            <feGaussianBlur
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
              stdDeviation="10"
            />
            <feComposite
              in="shadowBlurOuter1"
              in2="SourceAlpha"
              operator="out"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0   0 0 0 0 0.4   0 0 0 0 0.8  0 0 0 0.5 0"
            />
          </filter>
          <path
            id="svg-modal-bg"
            d="M1036 643h398.7564v317.6105l-20.9488 20.9489H1036z"
          />
        </defs>
        <g fill-rule="evenodd" transform="translate(-1016 -623)">
          <use filter="url(#svg-modal-fitler)" xlink:href="#svg-modal-bg" />
          <use fill-opacity=".75" stroke="#008BAD" xlink:href="#svg-modal-bg" />
        </g>
      </svg>

      <div class="modal-content">
        <div class="content-header">
          <slot name="header" />
        </div>
        <div>
          <slot />
        </div>
        <div class="content-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
{/if}
