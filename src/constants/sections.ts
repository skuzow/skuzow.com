export interface Section {
  url: string;
  label: string;
}

export interface SectionProps {
  section: Section;
}

export const SECTIONS = {
  about: {
    url: '/#about',
    label: 'about'
  },
  projects: {
    url: '/#projects',
    label: 'projects'
  },
  experiences: {
    url: '/#experience',
    label: 'experience'
  },
  posts: {
    url: '/#posts',
    label: 'posts'
  }
} satisfies Record<string, Section>;
