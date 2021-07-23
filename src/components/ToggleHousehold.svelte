<script lang="ts">
  export let isSameHousehold: boolean;
</script>

<main>
  <div class="toggle-div">
    <span id="falseValue">No</span>
    <label class="switch">
      <input type="checkbox" bind:checked={isSameHousehold} />
      <span class="slider" />
    </label>
    <span id="falseValue">Yes</span>
  </div>
</main>

<style>
  .toggle-div {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .switch {
    display: inline-block;
    width: 60px;
    height: 34px;
    position: relative;
    margin: 8px;
  }

  .slider {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #959595;
    border-radius: 40px;
    cursor: pointer;
  }

  .slider::before {
    content: '';
    height: 26px;
    width: 26px;
    position: absolute;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: 0.4s all ease;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + .slider::before {
    transform: translateX(26px);
  }
</style>
