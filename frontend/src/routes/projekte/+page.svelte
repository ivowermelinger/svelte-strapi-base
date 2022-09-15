<script lang="ts">
  import ProjectPreview from "$lib/ProjectPreview.svelte";

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container">
  <div class="gr-24">
    <h1>Projekte</h1>
  </div>

  <div class="project__row">
    {#each data?.projects as project, index}
      <div class="project__wrapper" data-aos="flip-up" data-aos-delay="{(index % 3 + 1) * 100}">
        <a class="project__link" href="projekte/{project.slug}">
          {#if project.previewImage?.data?.attributes?.url}
            <ProjectPreview alt="Vorschau {project.title}"
                            url={project.previewImage.data.attributes.url}
                            classes="project__preview"
            />
          {/if}

          <div class="project__overlay">
            {project.title}</div>
        </a>
      </div>
    {/each}
  </div>
</div>
