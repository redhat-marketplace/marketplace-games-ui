<style>
  p {
    position: relative;
  }

  input {
    color: var(--color-one);
    border: none;
    border-bottom: 1px solid #008bad;
    background-color: transparent;
    padding-left: var(--icon-padding);
  }

  input:focus,
  p:hover input {
    outline: none;
    border-bottom: 1px solid #13f3fe;
  }

  span {
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 75%;
    background: transparent;
    border: 1px solid #008bad;
    height: 12px;
    width: 12px;
  }

  span:after {
    content: '';
    left: -2px;
    bottom: -9px;
    width: 150%;
    height: 50%;
    position: absolute;
    border-radius: 75%;
    border-top: 1px solid #008bad;
  }

  input:focus + span,
  p:hover span {
    border: 1px solid #13f3fe;
  }

  input:focus + span:after,
  p:hover span:after {
    border-top: 1px solid #13f3fe;
  }
</style>

<script>
  export let textInput = '';
  export let placeholder = 'Default text';
  export let renderIcon = true;

  $: iconPadding = renderIcon ? '25px' : 0;
</script>

<p>
  <input
    style={`--icon-padding: ${iconPadding}`}
    type="text"
    bind:value={textInput}
    {placeholder}
  />
  {#if renderIcon}<span />{/if}
</p>
