<script>
    import 'lazysizes';
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<Header/>

<main>
    <slot/>
</main>

<Footer/>

<!-- scss global style in src/styles/app.scss -->
<style lang="scss" global>
</style>