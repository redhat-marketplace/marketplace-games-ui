<style>
  label {
    cursor: pointer;
    display: inline-block;
    position: relative;
  }

  input[type='checkbox'] {
    appearance: none;
    background: transparent;
    box-sizing: border-box;
    border: 3px solid var(--color--light-blue-500);
    height: 1.5rem;
    outline: 2px solid var(--color--blue-700);
    outline-offset: -4px;
    width: 1.5rem;
  }

  input[type='checkbox']:checked {
    background: var(--color--light-blue-200);
  }

  input,
  span {
    vertical-align: middle;
  }

  .checkmark {
    display: inline-block;
    margin-top: var(--spacing--05);
  }

  input[type='checkbox']:checked + .checkmark:after {
    content: '';
    display: block;
    position: absolute;
    left: 0.875rem;
    top: 0.5rem;
    width: 0.375rem;
    height: 0.75rem;
    border: solid var(--color--blue-600);
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
