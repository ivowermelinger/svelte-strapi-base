import {error} from '@sveltejs/kit';
import {STRAPI_API_KEY} from '$env/static/private';
import {PUBLIC_STRAPI_API_URL} from '$env/static/public';
import type {Project} from "../lib/types";

/** @type {import('./$types').PageServerLoad} */
export async function load() {

  const res = await fetch(`${PUBLIC_STRAPI_API_URL}/api/projects?populate=*`, {
    headers: {
      'Authorization': 'Bearer ' + STRAPI_API_KEY,
    }
  });

  if (res.status === 200 || res.ok) {
    const data = await res.json();

    return {
      projects: data.data.map((p: Project) => {
        return {
          id: p.id,
          ...p.attributes,
        }
      })
    };
  }


  return {projects: []};
}
