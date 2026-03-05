import { defineCollection, z } from 'astro:content';
import { iconNames } from '@/components/common/icon/types';

const resume = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.string(),
    from: z.coerce.date(),
    to: z.union([z.literal('Present'), z.coerce.date()]),
    order: z.number(),
    icons: z.array(z.enum(iconNames)).optional(),
  }),
});

export const collections = { resume };
