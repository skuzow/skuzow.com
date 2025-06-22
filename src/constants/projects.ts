import type { ImageMetadata } from 'astro';

import { TECHNOLOGIES, type Technology } from '@/constants/technologies';

import quizImage from '@/images/projects/quiz.webp';
import alistImage from '@/images/projects/alist.webp';
import quizAiImage from '@/images/projects/quiz-ai.webp';
import disneylandResortImage from '@/images/projects/disneyland-resort.webp';

export interface Project {
  image: ImageMetadata;
  technologies: Technology[];
  title: string;
  description: string;
  repository?: string;
  website?: string;
}

export const PROJECTS: Project[] = [
  {
    image: quizImage,
    technologies: [TECHNOLOGIES.nuxt, TECHNOLOGIES.vue],
    title: 'Quiz',
    description: 'Test exams website with AI creation.',
    repository: 'https://github.com/skuzow/quiz',
    website: 'https://quiz.skuzow.com'
  },
  {
    image: alistImage,
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.spring],
    title: 'Alist',
    description: 'Top based social network.',
    repository: 'https://github.com/CodeURJC-DAW-2022-23/webapp1'
  },
  {
    image: quizAiImage,
    technologies: [TECHNOLOGIES.hono],
    title: 'Quiz AI',
    description: 'API Quiz AI.',
    repository: 'https://github.com/skuzow/quiz-ai',
    website: 'https://quiz-ai.skuzow.net'
  },
  {
    image: disneylandResortImage,
    technologies: [TECHNOLOGIES.astro],
    title: 'DisneyLand Resort',
    description: 'Promotional website.',
    repository: 'https://github.com/skuzow/multimedia',
    website: 'https://multimedia-prac3.vercel.app'
  }
];
