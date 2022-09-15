<script>
  import 'lazysizes';
  import Aos from 'aos';

  import {PUBLIC_SHOW_PLACEHOLER} from '$env/static/public';

  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import {onMount} from "svelte";

  const showPlaceholder = PUBLIC_SHOW_PLACEHOLER === 'true';

  onMount(() => {
    Aos.init({
      once: false,
    });
  });

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
