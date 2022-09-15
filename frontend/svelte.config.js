import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      prependData: `@import './src/style/app.scss';`
    },
    postcss: {
      plugins: [
        autoprefixer,
        pxtorem({
          rootValue: 16,
          unitPrecision: 5,
          propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
          replace: true,
          mediaQuery: false,
          minPixelValue: 2,
          exclude: /node_modules/i
        }),
      ]
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
