<style>
  #gradient {
    z-index: -1;
    pointer-events: none;
    transform: scale(1);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    opacity: 0;
  }

  #gradient.transitionIn {
    opacity: 1;
    transition: opacity 250ms ease-in-out;
  }
</style>

<script>
  let isVisible = false;

  setTimeout(() => (isVisible = true), 250);
</script>

<div id="gradient" class:transitionIn="{isVisible}">
  <svg
    viewBox="0 0 3000 3000"
    preserveAspectRatio="xMidYMid slice"
    class="flex-shrink-0"
    style="min-width:100%;min-height:100%;filter:saturate(150%);-webkit-filter:saturate(150%)"
  >
    <defs>
      <style>
        #bg {
          fill: #001223;
        }

        .rect0 {
          fill: url(#rg0);
        }

        .rect1 {
          fill: url(#rg1);
        }

        .rect2 {
          fill: url(#rg2);
        }

        .rect3 {
          fill: url(#rg3);
        }
      </style>
      <radialGradient id="rg0" fx="0.32410298574889895" fy="0.5">
        <stop offset="0%" stop-color="#005c73"></stop>
        <stop offset="100%" stop-color="#005c73" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient id="rg1" fx="0.3301258122849816" fy="0.5">
        <stop offset="0%" stop-color="#001223"></stop>
        <stop offset="100%" stop-color="#001223" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient id="rg2" fx="0.3865444770050234" fy="0.5">
        <stop offset="0%" stop-color="#001223"></stop>
        <stop offset="100%" stop-color="#001223" stop-opacity="0"></stop>
      </radialGradient>
      <radialGradient id="rg3" fx="0.37897711281652047" fy="0.5">
        <stop offset="0%" stop-color="#002d39"></stop>
        <stop offset="100%" stop-color="#002d39" stop-opacity="0"></stop>
      </radialGradient>
    </defs>
    <rect id="bg" x="0" y="0" width="100%" height="100%"></rect>
    <rect
      class="rect rect1"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(0.8998926894182068 1.1707724044007268) skewX(-25.562894876073617) rotate(6.100144594715635) translate(1291.5936059892358 1203.874779123994) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect0"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(0.9248434883042416 1.2358550640688681) skewX(19.53892423309786) rotate(226.37081715718946) translate(-1273.3437981466197 -400.6976792871796) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect1"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(1.1265500601624387 0.8319887356233331) skewX(28.779587801101343) rotate(141.71968716214676) translate(-847.3287918139756 -279.8265660052025) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect0"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(0.886844113466922 1.0274488228846617) skewX(-8.748458709230697) rotate(286.1365973099082) translate(479.1137238365234 550.4773613011731) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect2"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(1.003843462599306 0.841281564760107) skewX(22.197912279857135) rotate(207.01461972023066) translate(307.8745627345387 963.9519780623143) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect1"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(0.9152822423996918 0.8625429940775813) skewX(-37.069910238577634) rotate(325.9291875730236) translate(698.2221161855243 975.0325404162777) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect3"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(1.2277973737318075 1.0252996708304791) skewX(-42.40188100027189) rotate(43.59099902986639) translate(-34.6722471344425 -634.4291996197935) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect0"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(1.1871168067398332 1.0589025736380728) skewX(-12.434151466272688) rotate(207.95857922221165) translate(544.6041884655381 1403.2463646772114) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect3"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(0.9768919003784227 1.035695410761396) skewX(44.21670403750879) rotate(66.1531193712049) translate(774.1140829450318 -597.1654504229089) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect2"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(0.7841565829060992 0.9666915652164736) skewX(26.565047786871958) rotate(77.78808822615815) translate(144.96364674032614 -612.1819553339085) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect3"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(0.8254315811769211 0.6831091286956749) skewX(-43.005713264647724) rotate(122.6006155780318) translate(1278.265852390976 280.5286859901947) translate(-1500 -1500)"
    ></rect>
    <rect
      class="rect rect2"
      x="0"
      y="0"
      width="100%"
      height="100%"
      transform="translate(1500 1500) scale(1.0728255674870115 1.1041983244960405) skewX(24.152269588073096) rotate(298.3399817781761) translate(1053.1891667769917 1428.9368202408828) translate(-1500 -1500)"
    ></rect>
  </svg>
</div>
