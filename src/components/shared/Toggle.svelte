<script>
  export let id = "toggle-id";
  export let toggled = false;
  export let onLabel = "On";
  export let offLabel = "Off";
  export let disabled = false;
</script>

<style>
  .label,
  .toggle-label,
  .toggle-track,
  .toggle-switch {
    display: inline-block;
    vertical-align: middle;
  }

  .toggle {
    position: relative;
  }

  .toggle-input {
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    position: absolute;
    height: auto;
    width: 1px;
  }

  .toggle-label {
    cursor: pointer;
    position: relative;
  }

  .label {
    margin-left: 30px;
    margin-bottom: 2px;
  }

  .toggle-track {
    position: relative;
    top: -2px;
    width: 61px;
    height: 30px;
    background-color: transparent;
    border: none;
    outline: solid #024369;
    outline-offset: -8px;
    transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition-property: background-color, border-color;
  }

  .toggle-label .toggle-input:checked ~ .toggle-track {
    border-color: rgba(0, 0, 0, 0.05);
  }

  .toggle-switch {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 15px;
    margin: 2px;
    width: 28px;
    border: thick solid #060e23;
    background-color: #f30053;
    outline: solid #024369;
    outline-offset: -2px;
    transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition-property: left, right;
    transition-delay: 0s, 0.05s;
  }

  .toggle-switch:hover {
    background-color: #ff6c94;
  }
  .toggle-switch[toggled="true"] {
    background-color: #30fde7;
  }
  .toggle-switch[toggled="true"]:hover {
    background-color: #d8fffa;
  }

  .toggle-label:active .toggle-switch {
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2),
      inset 1px 1px 3px rgba(255, 255, 255, 0.8),
      inset 1px 1px 6px rgba(0, 0, 0, 0.1);
  }

  .toggle-label .toggle-input:checked ~ .toggle-track > .toggle-switch {
    right: 0;
    left: 32px;
    transition: 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition-property: left, right;
    transition-delay: 0.05s, 0s;
  }
</style>

<div class="toggle" class:disabled>
  <label class="toggle-label">
    <input
      name={id}
      class="toggle-input"
      type="checkbox"
      bind:checked={toggled}
      {disabled} />
    <span class="toggle-track">
      <span class="toggle-switch" {disabled} {toggled} />
    </span>
    {#if onLabel && offLabel}
      <label
        for={id}
        class="label">{toggled ? onLabel : disabled ? 'Disabled' : offLabel}</label>
    {/if}
  </label>
</div>
