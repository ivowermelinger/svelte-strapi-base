<script>
    import {page} from '$app/stores';
</script>

<h1>Seite konnte nicht geladen werden</h1>
<h2>{$page.status} {$page.error.message}</h2>