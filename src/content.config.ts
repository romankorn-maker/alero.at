import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const aktuelles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aktuelles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['aktion', 'sortiment', 'tipps']),
    heroImage: z.string().optional(),
    archived: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { aktuelles };
