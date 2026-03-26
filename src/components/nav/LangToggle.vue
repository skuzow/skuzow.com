<script setup lang="ts">
import { defaultLang, languages } from '@/i18n/ui';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

interface Props {
  currentLang: string;
  currentPath: string;
}

const { currentLang, currentPath } = defineProps<Props>();

function buildLangPath(targetLang: string) {
  const segments = currentPath.split('/').filter(Boolean);
  const path = (
    segments[0] && segments[0] in languages ? segments.slice(1) : segments
  ).join('/');

  const urlPath = path ? `/${path}` : '';

  if (targetLang === defaultLang) return urlPath || '/';
  return `/${targetLang}${urlPath}`;
}

const langPaths = Object.fromEntries(
  Object.keys(languages).map((language) => [language, buildLangPath(language)])
);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon" class="text-base">
        {{ currentLang.toUpperCase() }}
        <span class="sr-only">Toggle lang</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="font-mono font-medium">
      <a
        v-for="[key, value] in Object.entries(languages)"
        :key="key"
        :href="langPaths[key] ?? '/'"
        :title="key"
      >
        <DropdownMenuItem>
          {{ value }}
        </DropdownMenuItem>
      </a>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
