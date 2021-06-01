<style>
  p {
    position: relative;
  }

  input {
    color: var(--color--white);
    border: none;
    border-bottom: 1px solid var(--color--light-blue-500);
    background-color: transparent;
    padding-left: var(--spacing--07);
  }

  input::placeholder {
    color: var(--color--black-500);
  }

  input:focus,
  p:hover input {
    outline: none;
    border-bottom: 1px solid var(--color--light-blue-300);
  }

  span {
    background: transparent;
    border: 1px solid var(--color--light-blue-500);
    border-radius: 75%;
    height: 12px;
    left: 4px;
    position: absolute;
    top: 4px;
    width: 12px;
  }

  span:after {
    border-top: 1px solid var(--color--light-blue-500);
    border-radius: 75%;
    bottom: -9px;
    content: '';
    height: 50%;
    left: -2px;
    position: absolute;
    width: 150%;
  }

  input:focus + span,
  p:hover span {
    border: 1px solid var(--color--light-blue-300);
  }

  input:focus + span:after,
  p:hover span:after {
    border-top: 1px solid var(--color--light-blue-300);
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
