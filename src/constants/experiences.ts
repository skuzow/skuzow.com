import { TECHNOLOGIES, type Technology } from '@/constants/technologies';

export interface Experience {
  startDate: Date;
  endDate?: Date;
  title: string;
  company: string;
  website: string;
  type: JobType;
  description: string;
  tecnologies: Technology[];
}

enum JobType {
  FULL_TIME = 'Full-time',
  PART_TIME = 'Part-time',
  INTERNSHIP = 'Internship'
}

export const EXPERIENCES: Experience[] = [
  {
    startDate: new Date('2023-10'),
    endDate: new Date('2024-01'),
    title: 'Full Stack Developer',
    company: 'PURPOSE FRAGRANCE',
    website: 'https://purposefragranceclub.com',
    type: JobType.INTERNSHIP,
    description:
      'Developer of a mobile app in a two devs team. I improved app accessibility with diverse modals, enhanced design for list management, profiles, and creations, upgraded search engines throughout the app, fixed multiple user experience bugs, and contributed to brand perfume recommender using AI.',
    tecnologies: [TECHNOLOGIES.vue, TECHNOLOGIES.net]
  },
  {
    startDate: new Date('2023-07'),
    endDate: new Date('2023-10'),
    title: 'Software Consultant',
    company: 'Ayesa',
    website: 'https://www.ayesa.com',
    type: JobType.INTERNSHIP,
    description:
      'Full Stack Developer for Adeslas client. I maintained and resolved issues for Adeslas refund web app, modified central database parameters and exported information.',
    tecnologies: [TECHNOLOGIES.angular, TECHNOLOGIES.net]
  }
];
