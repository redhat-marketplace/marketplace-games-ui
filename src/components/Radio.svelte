<style>
  div {
    width: fit-content;
  }

  input {
    box-sizing: border-box;
    appearance: none;
    visibility: hidden;
    margin: 0;
    padding: 0;
  }

  svg {
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: visible;
    position: absolute;
  }

  .container {
    position: relative;
    padding: 30px;
    width: fit-content;
  }

  .selected {
    position: relative;
    margin: 0 auto;
    background: linear-gradient(rgba(0, 159, 232, 0), rgba(0, 102, 204, 0.35));
  }

  span:hover:not(.selected) {
    background: linear-gradient(transparent, rgba(0, 159, 232, 0.15));
    border-bottom: 2px solid rgba(0, 159, 232, 0.95);
  }

  label {
    color: #fff;
    position: relative;
  }

  label:not(.selected) {
    background: transparent;
  }
</style>

<script>
  export let options = ['Option 1', 'Option 2'];
  export let selected = undefined;
</script>

{#if options}
  <div class="container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 250 47"
    >
      <defs>
        <filter
          id="a"
          width="106.7%"
          height="145.7%"
          x="-3.4%"
          y="-22.9%"
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
            stdDeviation="2.5"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0.545098039 0 0 0 0 0.678431373 0 0 0 1 0"
          />
        </filter>
        <path id="b" d="M0 35V14.7207L14.7207 0H238v19.2764L222.3767 35H0z" />
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(6 6)"
        >
          <use fill="#000" filter="url(#a)" xlink:href="#b" />
          <use
            fill="#151515"
            fill-opacity=".1"
            stroke="#73BCF7"
            xlink:href="#b"
          />
        </g>
      </g>
    </svg>
    {#each options as value}
      <label class:selected={value === selected}>
        <input
          {value}
          type="radio"
          bind:group={selected}
          aria-checked={value === selected}
          on:change
        />
        <span class:selected={value === selected}> {value} </span>
      </label>
    {/each}
  </div>
{/if}
