<script>
  import 'lazysizes';
  import Aos from 'aos';
  import {dev} from '$app/environment'

  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
  import {onMount} from "svelte";

  onMount(() => {
    Aos.init({
      once: false,
    });
  });


</script>

{#if dev}
  <Header/>
{/if}

<main>
  <slot/>
</main>

{#if dev}
  <Footer/>
{/if}

<!-- scss global style in src/styles/app.scss -->
<style lang="scss" global>
</style>
