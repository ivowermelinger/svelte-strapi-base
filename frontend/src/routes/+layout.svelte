<script>
  import {PUBLIC_SHOW_PLACEHOLER} from '$env/static/public';

  const showPlaceholder = PUBLIC_SHOW_PLACEHOLER === 'true';
  import 'lazysizes';
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

{#if !showPlaceholder}
  <Header/>
{/if}

<main>
  <slot/>
</main>

{#if !showPlaceholder}
  <Footer/>
{/if}

<!-- scss global style in src/styles/app.scss -->
<style lang="scss" global>
</style>
