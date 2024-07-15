import AstroIcon from '@/components/icons/AstroIcon.astro';
import AngularIcon from '@/components/icons/AngularIcon.astro';
import SpringIcon from '@/components/icons/SpringIcon.astro';

interface Technologies {
  [key: string]: Technology;
}

export interface Technology {
  icon: (_props: TechnologyProps) => any;
  title: string;
  website: string;
}

export interface TechnologyProps {
  size?: number;
}

export const TECHNOLOGIES: Technologies = {
  astro: {
    icon: AstroIcon,
    title: 'Astro',
    website: 'https://astro.build'
  },
  angular: {
    icon: AngularIcon,
    title: 'Angular',
    website: 'https://angular.dev'
  },
  spring: {
    icon: SpringIcon,
    title: 'Spring',
    website: 'https://spring.io'
  }
};
