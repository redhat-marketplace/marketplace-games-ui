<style>
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    height: 3.125rem;
    padding: 0;
    min-width: 9.375rem;
  }

  .btn-content {
    align-items: center;
    color: var(--color--white);
    display: flex;
    justify-content: center;
  }

  svg,
  .btn-content,
  .container {
    height: 100%;
    width: 100%;
  }
  .btn-content,
  .container {
    margin: auto;
  }

  .container {
    position: relative;
  }

  svg {
    left: 0;
    position: absolute;
    overflow: visible;
    top: 0;
  }

  svg use[filter='url(#pri-hover)'],
  svg use[filter='url(#danger-hover)'] {
    display: none;
  }

  button:not(.disabled) svg:hover use[filter='url(#pri-hover)'],
  button:not(.disabled) svg:hover use[filter='url(#danger-hover)'] {
    display: inline;
  }

  button:not(.disabled) svg:active use[filter*='-'] {
    display: none;
  }

  .disabled {
    opacity: 0.75;
    cursor: not-allowed;
  }
</style>

<script>
  export let type = 'primary';
  export let disabled = false;
  export let label = `${type} button`;

  let btnInnerColor;
  let colorMap = {
    primary: '#0066CC',
    secondary: '#0066cc',
    danger: '#EE0000',
  };
  let strokeColorMap = {
    primary: '#73bcf7',
    secondary: '#0180eb',
    danger: '#EE0000',
  };

  $: btnInnerColor = colorMap[type];
  $: btnStrokeColor = strokeColorMap[type];
  $: filterShadowType =
    type !== 'danger' ? 'url(#pri-shadow)' : 'url(#danger-shadow)';
  $: filterHoverType =
    type !== 'danger' ? 'url(#pri-hover)' : 'url(#danger-hover)';
</script>

<button class={type} class:disabled {type} on:click>
  <div class="container">
    <svg
      viewBox="0 0 149 47"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid slice"
    >
      <title>{label}</title>
      <defs>
        <polygon
          id="path-1"
          points="0 14.7206625 14.7206625 0 136.873008 0 136.873008 19.2764425 121.149451 35 0 35"
        />
        <filter
          x="-5.8%"
          y="-22.9%"
          width="111.7%"
          height="145.7%"
          filterUnits="objectBoundingBox"
          id="pri-shadow"
        >
          <feMorphology
            radius="0.5"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="0"
            dy="0"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0.545098039   0 0 0 0 0.678431373  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-7.3%"
          y="-28.6%"
          width="114.6%"
          height="157.1%"
          filterUnits="objectBoundingBox"
          id="pri-hover"
        >
          <feGaussianBlur
            stdDeviation="4.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          />
          <feOffset
            dx="0"
            dy="0"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0.545098039   0 0 0 0 0.678431373  0 0 0 1 0"
            type="matrix"
            in="shadowInnerInner1"
          />
        </filter>
        <filter
          x="-5.8%"
          y="-22.9%"
          width="111.7%"
          height="145.7%"
          filterUnits="objectBoundingBox"
          id="danger-shadow"
        >
          <feMorphology
            radius="0.5"
            operator="dilate"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="0"
            dy="0"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="2.5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feComposite
            in="shadowBlurOuter1"
            in2="SourceAlpha"
            operator="out"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.933333333   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-9.9%"
          y="-38.6%"
          width="119.7%"
          height="177.1%"
          filterUnits="objectBoundingBox"
          id="danger-hover"
        >
          <feGaussianBlur
            stdDeviation="7.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          />
          <feOffset
            dx="0"
            dy="1"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0.933333333   0 0 0 0 0   0 0 0 0 0  0 0 0 1 0"
            type="matrix"
            in="shadowInnerInner1"
          />
        </filter>
      </defs>
      <g
        id="a"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g id="b" transform="translate(-420.000000, -548.000000)">
          <g id="c" transform="translate(371.000000, 343.000000)">
            <g id="g-btn" transform="translate(55.000000, 211.000000)">
              <use
                fill="black"
                fill-opacity="1"
                filter={filterShadowType}
                xlink:href="#path-1"
              />
              <use
                fill="black"
                fill-opacity="1"
                filter={filterHoverType}
                xlink:href="#path-1"
              />
              <use
                fill-opacity="0.1"
                fill={btnInnerColor}
                fill-rule="evenodd"
                xlink:href="#path-1"
              />
              <use
                stroke={btnStrokeColor}
                stroke-width="1"
                xlink:href="#path-1"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
    <div class="btn-content">
      <slot />
    </div>
  </div>
</button>
