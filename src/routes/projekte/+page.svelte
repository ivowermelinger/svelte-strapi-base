<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Projekte</h1>

<ul>
    {#each data?.projects as project}
        <li><a href="projekte/{project.slug}">{project.title}</a></li>
    {/each}
</ul>
