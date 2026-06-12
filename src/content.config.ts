import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const projects = defineCollection({
  loader: file('src/content/projects.json'),
  schema: z.object({
    id: z.number(),
    demoLink: z.string().optional(),
    projectName: z.string(),
    apiDocsLink: z.string().optional(),
    status: z.string(),
    projectText: z.string(),
    projectTech: z.string().array(),
    githubLink: z.string().array(),
  }),
});

const skillGroups = defineCollection({
  loader: file('src/content/skillGroups.json'),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    categories: z.string().array(),
  }),
});

const socials = defineCollection({
  loader: file('src/content/socials.json'),
  schema: z.object({
    id: z.number(),
    label: z.string(),
    url: z.string(),
    icon: z.string(),
  }),
});

export const collections = { projects, skillGroups, socials };
