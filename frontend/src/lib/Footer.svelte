<script>
    import {PUBLIC_STRAPI_API_URL} from '$env/static/public';
</script>

<footer id="footer" class="footer">

    <div class="container">
        <div class="row">
            <div class="gr-12">
                Footer
            </div>
            <div class="gr-12">
                <a href={PUBLIC_STRAPI_API_URL + '/admin'} target="_blank" rel="noopener">Admin</a>
            </div>
        </div>
    </div>
</footer>