<script>
  import {PUBLIC_STRAPI_API_URL} from '$env/static/public';
</script>

<footer id="footer" class="footer">
  <div class="footer__background">
    <div></div>
    <div></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="gr-20">
        <div class="footer__content">
          <div class="footer__phone"></div>
        </div>
      </div>

      <div class="gr-24 gr-4@small">
        <div class="footer__black">
          <a href={PUBLIC_STRAPI_API_URL + '/admin'} target="_blank" rel="noopener">Admin</a>
        </div>
      </div>
    </div>
  </div>
</footer>
