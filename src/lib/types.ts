export interface Project {
    id: number,
    slug: string,
    title: string,
    lead: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    tags: string,
    meta: {
        id: number,
        metaTitle: string,
        metaDescription: string,
    },
    previewImage: {
        data: {
            id: number,
            attributes: {
                name: string,
                alternativeText: string,
                caption: string,
                width: number,
                height: number,
                formats: [Object],
                hash: string,
                ext: string,
                mime: string,
                size: number,
                url: string,
                previewUrl: null,
                provider: string,
                provider_metadata: null,
                createdAt: string,
                updatedAt: string,
            }
        }
    },
    attributes: {}
}