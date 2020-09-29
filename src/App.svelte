<script>
  let isVisible = true;
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap" rel="stylesheet">
</svelte:head>

<main>
    <div id="gradient" class:transitionIn={isVisible}>
        <svg viewBox="0 0 3000 3000" preserveAspectRatio="xMidYMid slice" class="flex-shrink-0"
             style="min-width:100%;min-height:100%;filter:saturate(150%);-webkit-filter:saturate(150%)">
            <defs>
                <style>
                    #bg {
                        fill: #06092C;
                    }

                    .rect0 {
                        fill: url(#rg0)
                    }

                    .rect1 {
                        fill: url(#rg1)
                    }

                    .rect2 {
                        fill: url(#rg2)
                    }

                    .rect3 {
                        fill: url(#rg3)
                    }
                </style>
                <radialGradient id="rg0" fx="0.32410298574889895" fy="0.5">
                    <stop offset="0%" stop-color="#0D7285"></stop>
                    <stop offset="100%" stop-color="#0D7285" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="rg1" fx="0.3301258122849816" fy="0.5">
                    <stop offset="0%" stop-color="#060B30"></stop>
                    <stop offset="100%" stop-color="#060B30" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="rg2" fx="0.3865444770050234" fy="0.5">
                    <stop offset="0%" stop-color="#0D7285"></stop>
                    <stop offset="100%" stop-color="#06092C" stop-opacity="0"></stop>
                </radialGradient>
                <radialGradient id="rg3" fx="0.37897711281652047" fy="0.5">
                    <stop offset="0%" stop-color="#0D183E"></stop>
                    <stop offset="100%" stop-color="#0D183E" stop-opacity="0"></stop>
                </radialGradient>
            </defs>
            <rect id="bg" x="0" y="0" width="100%" height="100%"></rect>
            <rect class="rect rect0" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(0.8612378951820093 0.8393329935884306) skewX(21.155676601794397) rotate(90.95353919804622) translate(24.3319906715751 -681.4344454047164) translate(-1500 -1500)"></rect>
            <rect class="rect rect1" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(1.247363217574543 0.8524880003303966) skewX(-10.558010505576092) rotate(76.80661542109638) translate(-880.7089501895628 1256.9150371852797) translate(-1500 -1500)"></rect>
            <rect class="rect rect2" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(1.09352893073111 0.7948948753276828) skewX(14.93338812300324) rotate(175.53038421037078) translate(-261.9914507116252 1178.6675964594006) translate(-1500 -1500)"></rect>
            <rect class="rect rect1" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(1.1719340112741992 0.9442233840108165) skewX(-33.615085180783325) rotate(164.8048086659884) translate(-121.72458446176692 949.2410230743765) translate(-1500 -1500)"></rect>
            <rect class="rect rect3" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(1.0204159442167884 0.9831572828834516) skewX(-2.453538188287581) rotate(262.0139132429417) translate(-368.7611270599181 44.24573599888759) translate(-1500 -1500)"></rect>
            <rect class="rect rect1" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(0.8668828641379395 1.0467093529583114) skewX(-2.6974200831340838) rotate(38.12450465393348) translate(1255.688482988068 -829.0002967624482) translate(-1500 -1500)"></rect>
            <rect class="rect rect3" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(1.1372173227211737 0.8892444597171021) skewX(32.4223081970201) rotate(272.7802699434571) translate(440.10932592481686 958.3002333441367) translate(-1500 -1500)"></rect>
            <rect class="rect rect0" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(0.727093295800921 0.7369269486374739) skewX(22.8132792133662) rotate(291.6150466995517) translate(-1089.1819452374439 -918.91589747977) translate(-1500 -1500)"></rect>
            <rect class="rect rect3" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(1.163690928987502 1.244791418931272) skewX(0.9284467621642847) rotate(190.64168767475402) translate(706.1090326954708 -1345.240297226956) translate(-1500 -1500)"></rect>
            <rect class="rect rect2" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(0.7221289838228974 0.9232115484450264) skewX(-2.4451482861108644) rotate(166.47342853427338) translate(-580.9863785643429 -1402.9229104626818) translate(-1500 -1500)"></rect>
            <rect class="rect rect2" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(1.0192944385245446 1.0784599767295882) skewX(-2.065052750431718) rotate(0.7490200518695556) translate(682.4547394124353 936.9962936251061) translate(-1500 -1500)"></rect>
            <rect class="rect rect0" x="0" y="0" width="100%" height="100%"
                  transform="translate(1500 1500) scale(1.1788555093822586 1.2281110841677756) skewX(20.191516814954852) rotate(48.77160117576845) translate(-1072.3984891217897 -988.6850048705776) translate(-1500 -1500)"></rect>
        </svg>
    </div>
    <div id="game-board" />
</main>

<style>
    :global(:root) {
        --color-one: #fff;
    }

    :global(body) {
        background-color: #06092C;
        color: var(--color-one);
    }

    #game-board {
        display: grid;
        grid-template-rows: repeat(21, 1fr);
        grid-template-columns: repeat(21, 1fr);
        width: 75vmin;
        height: 75vmin;
        border: 1px solid white;
        position: relative;
        margin: auto;
    }

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
