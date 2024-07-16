import AstroIcon from '@/components/icons/AstroIcon.astro';
import VueIcon from '@/components/icons/VueIcon.astro';
import AngularIcon from '@/components/icons/AngularIcon.astro';
import NETCoreIcon from '@/components/icons/NETCoreIcon.astro';
import SpringIcon from '@/components/icons/SpringIcon.astro';

interface Technologies {
  [key: string]: Technology;
}

export interface Technology {
  icon: (_props: TechnologyIconProps) => any;
  title: string;
  website: string;
}

export interface TechnologyIconProps {
  size?: number;
}

export const TECHNOLOGIES: Technologies = {
  astro: {
    icon: AstroIcon,
    title: 'Astro',
    website: 'https://astro.build'
  },
  vue: {
    icon: VueIcon,
    title: 'Vue',
    website: 'https://vuejs.org'
  },
  angular: {
    icon: AngularIcon,
    title: 'Angular',
    website: 'https://angular.dev'
  },
  netcore: {
    icon: NETCoreIcon,
    title: '.NETCore',
    website: 'https://dotnet.microsoft.com/en-us/apps/aspnet'
  },
  spring: {
    icon: SpringIcon,
    title: 'Spring',
    website: 'https://spring.io'
  }
};
