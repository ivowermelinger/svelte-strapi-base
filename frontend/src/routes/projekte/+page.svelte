<script lang="ts">
  import ProjectGrid from "$lib/ProjectGrid.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container">
  <div class="gr-24">
    <h1>Projekte</h1>
  </div>
</div>

<ProjectGrid {data}/>
