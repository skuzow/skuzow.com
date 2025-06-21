import AstroIcon from '@/components/icons/technologies/AstroIcon.astro';
import NuxtIcon from '@/components/icons/technologies/NuxtIcon.astro';
import VueIcon from '@/components/icons/technologies/VueIcon.astro';
import AngularIcon from '@/components/icons/technologies/AngularIcon.astro';
import HonoIcon from '@/components/icons/technologies/HonoIcon.astro';
import NETCoreIcon from '@/components/icons/technologies/NETCoreIcon.astro';
import SpringIcon from '@/components/icons/technologies/SpringIcon.astro';

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
  nuxt: {
    icon: NuxtIcon,
    title: 'Nuxt',
    website: 'https://nuxt.com'
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
  hono: {
    icon: HonoIcon,
    title: 'Hono',
    website: 'https://hono.dev'
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
