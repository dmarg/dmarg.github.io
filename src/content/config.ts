import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z.string().optional(),
    headerImage: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    author: z.string().default('danielmargol'),
    category: z.string().default('blog'),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z.string().optional(),
    headerImage: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    author: z.string().default('danielmargol'),
    externalLink: z.string().optional(),
    star: z.boolean().default(false),
    hidden: z.boolean().default(false),
    category: z.string().default('project'),
  }),
});

export const collections = {
  blog,
  projects,
};
