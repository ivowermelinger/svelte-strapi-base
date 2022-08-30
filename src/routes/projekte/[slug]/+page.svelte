<script lang="ts">/** @type {import('./$types').PageData} */
import {Project} from "../../../lib/types";

export let data;
const project: Project = data?.project;

const tags: [string] = project?.tags?.split(',') ?? [];
const imageUrl: string = project?.previewImage?.data?.attributes?.url;

</script>

<svelte:head>
    <title>{project?.title}</title>
</svelte:head>

<div class="project__hero">

</div>

<h1 class="text__title">{project?.title}</h1>
<h2 class="text__title">{project?.lead}</h2>
<div class="project__tags">
    {#each tags as tag}
        <span class="project__tag text__paragraph">{tag}</span>
    {/each}
</div>




