import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';


/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      prependData: `@import './src/style/app.scss';`
    },
  }),
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    },
    env: {
      publicPrefix: 'PUBLIC_',
    }
  },
};

export default config;
