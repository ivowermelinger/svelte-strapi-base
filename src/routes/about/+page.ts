import {browser, dev} from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const hydrate: boolean = dev;

// ...but if the client-side router is already loaded
// (i.e. we came here from elsewhere in the app), use it
export const router: boolean = browser;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
export const prerender: boolean = true;
