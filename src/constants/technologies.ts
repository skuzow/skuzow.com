import AstroIcon from '@/components/icons/technologies/AstroIcon.astro';
import NuxtIcon from '@/components/icons/technologies/NuxtIcon.astro';
import VueIcon from '@/components/icons/technologies/VueIcon.astro';
import AngularIcon from '@/components/icons/technologies/AngularIcon.astro';
import PhpIcon from '@/components/icons/technologies/PhpIcon.astro';
import HonoIcon from '@/components/icons/technologies/HonoIcon.astro';
import NestIcon from '@/components/icons/technologies/NestIcon.astro';
import LoopbackIcon from '@/components/icons/technologies/LoopbackIcon.astro';
import NETIcon from '@/components/icons/technologies/NETIcon.astro';
import SpringIcon from '@/components/icons/technologies/SpringIcon.astro';

export interface Technology {
  icon: (_props: TechnologyIconProps) => any;
  title: string;
  website: string;
}

export interface TechnologyIconProps {
  size?: number;
}

export const TECHNOLOGIES = {
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
  php: {
    icon: PhpIcon,
    title: 'PHP',
    website: 'https://php.net'
  },
  hono: {
    icon: HonoIcon,
    title: 'Hono',
    website: 'https://hono.dev'
  },
  nest: {
    icon: NestIcon,
    title: 'Nest',
    website: 'https://nestjs.com'
  },
  loopback: {
    icon: LoopbackIcon,
    title: 'LoopBack',
    website: 'https://loopback.io'
  },
  net: {
    icon: NETIcon,
    title: '.NET',
    website: 'https://dotnet.microsoft.com'
  },
  spring: {
    icon: SpringIcon,
    title: 'Spring',
    website: 'https://spring.io'
  }
} satisfies Record<string, Technology>;
