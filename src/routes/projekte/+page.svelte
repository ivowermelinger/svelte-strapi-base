<script lang="ts">
    import ProjectPreview from "$lib/ProjectPreview.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="container">
    <div class="gr-24">
        <h1>Projekte</h1>
    </div>

    <div class="row row--projects">
        {#each data?.projects as project}
            <div class="gr-24 gr-12@small gr-8@large">
                <div class="project__wrapper">
                    <a class="project__link" href="projekte/{project.slug}">
                        {#if project.previewImage?.data?.attributes?.url}
                            <ProjectPreview alt="Vorschau {project.title}"
                                            url={project.previewImage.data.attributes.url}
                            />
                        {/if}

                        <div class="project__overlay">{project.title}</div>
                    </a>
                </div>
            </div>
        {/each}
    </div>
</div>
