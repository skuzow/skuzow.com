import type { ImageMetadata } from 'astro';

import { TECHNOLOGIES, type Technology } from '@/constants/technologies';

import quizImage from '@/images/projects/quiz.webp';
import alistImage from '@/images/projects/alist.webp';
import quizAiImage from '@/images/projects/quiz-ai.webp';
import disneylandResortImage from '@/images/projects/disneyland-resort.webp';

export type ProjectId = 'quiz' | 'alist' | 'quizAi' | 'disneylandResort';

export interface Project {
  id: ProjectId;
  image: ImageMetadata;
  technologies: Technology[];
  repository?: string;
  website?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'quiz',
    image: quizImage,
    technologies: [TECHNOLOGIES.nuxt, TECHNOLOGIES.vue],
    repository: 'https://github.com/skuzow/quiz',
    website: 'https://quiz.skuzow.com'
  },
  {
    id: 'alist',
    image: alistImage,
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.spring],
    repository: 'https://github.com/CodeURJC-DAW-2022-23/webapp1'
  },
  {
    id: 'quizAi',
    image: quizAiImage,
    technologies: [TECHNOLOGIES.hono],
    repository: 'https://github.com/skuzow/quiz-ai',
    website: 'https://quiz-ai.skuzow.net'
  },
  {
    id: 'disneylandResort',
    image: disneylandResortImage,
    technologies: [TECHNOLOGIES.astro],
    repository: 'https://github.com/skuzow/multimedia',
    website: 'https://multimedia-prac3.vercel.app'
  }
];
