<style>
  label {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  input[type='checkbox'] {
    box-sizing: border-box;
    appearance: none;
    background: transparent;
    outline: 2px solid #011634;
    outline-offset: -4px;
    border: 3px solid #3e8bad;
    width: 24px;
    height: 24px;
  }

  input[type='checkbox']:checked {
    background: #13f3fe;
  }

  input,
  span {
    vertical-align: middle;
  }

  span {
    margin-top: 15px;
  }

  .checkmark {
    display: inline-block;
  }

  input[type='checkbox']:checked + .checkmark:after {
    content: '';
    display: block;
    position: absolute;
    left: 14px;
    top: 8px;
    width: 6px;
    height: 12px;
    border: solid #043855;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
</style>

<script>
  export let label = 'Checkbox label';
  export let checked = true;
</script>

<label>
  <input type="checkbox" bind:checked class="input" on:change />
  <span class="checkmark" />
  {label}
</label>
