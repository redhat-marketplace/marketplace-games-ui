<style>
  .game-name {
    border: 1px solid rgba(0, 139, 173, 0.5);
    background: linear-gradient(
      270deg,
      rgba(0, 102, 204, 0) 0%,
      rgba(0, 102, 204, 0.15) 100%
    );
    margin-bottom: 2rem;
    display: flex;
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.75rem;
    position: relative;
  }

  .game-icon {
    margin-right: 1rem;
  }

  .corner--left--top {
    position: absolute;
    top: -2px;
    left: -2px;
  }

  .corner--left--bottom {
    position: absolute;
    bottom: -2px;
    left: -2px;
  }

  .corner--right--bottom {
    position: absolute;
    bottom: -2px;
    right: -2px;
  }

  .corner--right--top {
    position: absolute;
    top: -2px;
    right: -2px;
  }
</style>

<script>
  export let name;
</script>

{#if name}
  <div class="game-name">
    <svg
      class="corner--left--top"
      width="11"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
    ><path d="M3 3v9H0V0h11v3H3z" fill="#008BAD" fill-rule="evenodd" /></svg>
    <svg
      class="corner--left--bottom"
      width="11"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
    ><path d="M3 9V0H0v12h11V9H3z" fill="#008BAD" fill-rule="evenodd" /></svg>
    <svg
      class="corner--right--bottom"
      width="11"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
    ><path d="M8 9V0h3v12H0V9h8z" fill="#008BAD" fill-rule="evenodd" /></svg>
    <svg
      class="corner--right--top"
      width="11"
      height="12"
      xmlns="http://www.w3.org/2000/svg"
    ><path d="M8 3v9h3V0H0v3h8z" fill="#008BAD" fill-rule="evenodd" /></svg>
    <svg
      class="game-icon"
      width="26"
      height="27"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    ><defs>
        <filter
          x="-56.2%"
          y="-60%"
          width="212.5%"
          height="220%"
          filterUnits="objectBoundingBox"
          id="a"
        >
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation="3"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.584313725 0 0 0 0 0.835294118 0 0 0 0 0.556862745 0 0 0 0.59 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <path d="M25 26.5l5 7.5H14l5-7.5-5-7.5h16l-5 7.5z" id="b" />
      </defs>
      <g transform="translate(-9 -13)" fill="none" fill-rule="evenodd">
        <use fill="#000" filter="url(#a)" xlink:href="#b" />
        <use fill="#95D58E" xlink:href="#b" />
      </g></svg>
    <h2>{name}</h2>
  </div>
{/if}
