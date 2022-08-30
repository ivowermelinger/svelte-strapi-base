import {error} from '@sveltejs/kit';
import {STRAPI_API_KEY, STRAPI_API_URL} from '$env/static/private';
import type {Project} from "../../../lib/types";

/** @type {import('./$types').PageServerLoad} */
export async function load({params}: { params: { slug: string } }) {
    const res = await fetch(`${STRAPI_API_URL}/api/projects?filters[slug]=${params.slug}`, {
        headers: {
            'Authorization': 'Bearer ' + STRAPI_API_KEY,
        }
    });

    if (res.status === 200 || res.ok) {
        const data = await res.json();

        if (data.data.length < 1) {
            throw error(404, 'Not found');
        }
        return {
            project: data.data.map((p: Project) => {
                return {
                    id: p.id,
                    ...p.attributes,
                }
            })[0],
        }
    }

    throw error(404, 'Not found');
}