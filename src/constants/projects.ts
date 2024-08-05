import type { ImageMetadata } from 'astro';

import { TECHNOLOGIES, type Technology } from '@/constants/technologies';

import disneylandResortImage from '@/images/projects/disneyland-resort.webp';
import alistImage from '@/images/projects/alist.webp';

export interface Project {
  image: ImageMetadata;
  tecnologies: Technology[];
  title: string;
  description: string;
  repository?: string;
  website?: string;
}

export const PROJECTS: Project[] = [
  {
    image: disneylandResortImage,
    tecnologies: [TECHNOLOGIES.astro!],
    title: 'DisneyLand Resort',
    description: 'Promotional website.',
    repository: 'https://github.com/skuzow/multimedia',
    website: 'https://multimedia-prac3.vercel.app'
  },
  {
    image: alistImage,
    tecnologies: [TECHNOLOGIES.angular!, TECHNOLOGIES.spring!],
    title: 'Alist',
    description: 'Top based social network.',
    repository: 'https://github.com/CodeURJC-DAW-2022-23/webapp1'
  }
];
