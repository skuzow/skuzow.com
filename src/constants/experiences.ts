import { TECHNOLOGIES, type Technology } from '@/constants/technologies';

export type ExperienceId =
  | 'everHealth'
  | 'plexusTech'
  | 'purposeFragrance'
  | 'ayesa';

export interface Experience {
  id: ExperienceId;
  startDate: Date;
  endDate?: Date;
  company: string;
  website: string;
  type: JobType;
  technologies: Technology[];
}

enum JobType {
  FULL_TIME = 'fullTime',
  PART_TIME = 'partTime',
  INTERNSHIP = 'internship'
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'everHealth',
    startDate: new Date('2026-02'),
    company: 'Ever Health',
    website: 'https://www.everhealth.es',
    type: JobType.FULL_TIME,
    technologies: [
      TECHNOLOGIES.angular,
      TECHNOLOGIES.nest,
      TECHNOLOGIES.php,
      TECHNOLOGIES.loopback
    ]
  },
  {
    id: 'plexusTech',
    startDate: new Date('2025-06'),
    endDate: new Date('2026-02'),
    company: 'Plexus Tech',
    website: 'https://www.plexus.es',
    type: JobType.FULL_TIME,
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.spring]
  },
  {
    id: 'purposeFragrance',
    startDate: new Date('2023-10'),
    endDate: new Date('2024-01'),
    company: 'PURPOSE FRAGRANCE',
    website: 'https://purposefragranceclub.com',
    type: JobType.INTERNSHIP,
    technologies: [TECHNOLOGIES.vue, TECHNOLOGIES.net]
  },
  {
    id: 'ayesa',
    startDate: new Date('2023-07'),
    endDate: new Date('2023-10'),
    company: 'Ayesa',
    website: 'https://www.ayesa.com',
    type: JobType.INTERNSHIP,
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.net]
  }
];
