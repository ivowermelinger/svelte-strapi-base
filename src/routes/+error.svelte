<script>
    import {page} from '$app/stores';
</script>

<div class="container">
    <div class="row">
        <div class="gr-24">
            <h1>Seite konnte nicht gefunden werden 👾🤷</h1>
            <h2>{$page.status} {$page.error.message}</h2>
        </div>
    </div>
</div>
