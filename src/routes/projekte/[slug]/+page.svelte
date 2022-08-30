<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    const project = data?.project;

    const tags = project?.tags.replace(' ', '').split(',');
</script>

<svelte:head>
    <title>{project?.title}</title>
</svelte:head>

<h1 class="text__title">{project?.title}</h1>
<h2 class="text__title">{project?.lead}</h2>
<div class="project__tags">
    {#each tags as tag}
        <span class="project__tag text__paragraph">{tag}</span>
    {/each}
</div>




