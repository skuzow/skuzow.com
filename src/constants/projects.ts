import { TECHNOLOGIES, type Technology } from '@/constants/technologies';

export interface Project {
  image: string;
  tecnologies: Technology[];
  title: string;
  description: string;
  repository?: string;
  website?: string;
}

export const PROJECTS: Project[] = [
  {
    image: '/projects/disneyland-resort.webp',
    tecnologies: [TECHNOLOGIES.astro!],
    title: 'DisneyLand Resort',
    description: 'Promotional website.',
    repository: 'https://github.com/skuzow/multimedia',
    website: 'https://multimedia-prac3.vercel.app'
  },
  {
    image: '/projects/alist.webp',
    tecnologies: [TECHNOLOGIES.angular!, TECHNOLOGIES.spring!],
    title: 'Alist',
    description: 'Top based social network.',
    repository: 'https://github.com/CodeURJC-DAW-2022-23/webapp1'
  }
];
