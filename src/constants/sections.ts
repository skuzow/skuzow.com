export interface Section {
  url: string;
  label: string;
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
  },
  info: {
    url: '/#info',
    label: 'info'
  }
} satisfies Record<string, Section>;
