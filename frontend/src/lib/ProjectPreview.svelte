<script lang="ts">
    import {PUBLIC_STRAPI_API_URL} from '$env/static/public';

    export let url: string;
    export let alt: string;
    export let classes: string = '';

    const preview: string = `${PUBLIC_STRAPI_API_URL}${url}?width=20&format=jpeg&quality=100&blur=200`;

</script>

<picture>
    <source srcset={preview}
            data-srcset="{`${PUBLIC_STRAPI_API_URL}${url}?width=768&format=jpeg`}" type="image/jpeg">
    <source srcset={preview}
            data-srcset="{`${PUBLIC_STRAPI_API_URL}${url}?width=768&format=webp`}" type="image/webp">
    <img class="lazyload {classes}" src={preview} width="768" height="540" alt="{alt}">
</picture>