<script>
  import {dev} from '$app/environment'
  import ProjectGrid from "$lib/ProjectGrid.svelte";

  export let data;
</script>

<svelte:head>
  <title>Wermelinger Dev</title>
  <meta name="description" content="Svelte demo app"/>
</svelte:head>

{#if !dev}

  <div class="placeholder">
    <div class="container">
      <div class="row">
        <div class="gr-24">
          <div class="placeholder__wrapper">
            <h1 class="placeholder__title">Page Title</h1>
            <p class="placeholder__text">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  </div>

{:else}
  <div class="container">
    <div class="row">
      <div class="gr-24">
        <h1>Start Dev</h1>
      </div>
    </div>
  </div>

  <ProjectGrid data="{data}"/>
{/if}
