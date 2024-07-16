interface Sections {
  [key: string]: Section;
}

export interface Section {
  url: string;
  label: string;
}

export interface SectionProps {
  section: Section;
}

export const SECTIONS: Sections = {
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
};
