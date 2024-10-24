import { defineCollection, z } from "astro:content";

const products = defineCollection({
    schema: z.object({
        name: z.string(),
        img: z.string(),
        description: z.string(),
        category: z.string().array()
    })
});

export default {products}