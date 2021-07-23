<script lang="ts">
  export let onChange: (number) => void;
  export let image: string;
  export let type: string;
</script>

<main>
  <div class="selectable-grid grid-six">
    {#each Array(5) as _, i}
      <div>
        <img on:click={() => onChange(i)} class="outline" src="./images/child-outline.png" alt="" />
        <img class="unselected" src={image} alt="" id={type + i} />
      </div>
    {/each}
  </div>
</main>

<style>
  .outline {
    position: absolute;
    z-index: 1;
  }

  .unselected {
    opacity: 0.15;
  }

  .selectable-grid {
    display: grid;
    grid-column-gap: 10px;
  }

  .grid-six {
    grid-template-columns: repeat(5, 1fr);
  }
</style>
