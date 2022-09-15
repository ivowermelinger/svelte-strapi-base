<script>
    import {page} from '$app/stores';
</script>

<header>
    <nav>
        <ul>
            <li class:active={$page.url.pathname === '/'}>
                <a data-sveltekit-prefetch href="/">Home</a>
            </li>
            <li class:active={$page.url.pathname === '/projekte'}>
                <a data-sveltekit-prefetch href="/projekte">Projekte</a>
            </li>
        </ul>
    </nav>
</header>
