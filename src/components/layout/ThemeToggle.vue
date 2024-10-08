<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { Sun, Moon, LaptopMinimal } from 'lucide-vue-next';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'auto'
}

const theme = ref<string>('');

const isDarkPreference = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const modifyDarkClass = (isDark: boolean) =>
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

onMounted(() => (theme.value = localStorage.getItem('theme') ?? Theme.SYSTEM));

watch(theme, () => {
  if (theme.value === Theme.SYSTEM) {
    modifyDarkClass(isDarkPreference());
    return localStorage.removeItem('theme');
  }

  const isDark: boolean = theme.value === Theme.DARK;
  modifyDarkClass(isDark);
  localStorage.setItem('theme', theme.value);
});
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button
        id="radix-vue-dropdown-menu-trigger-1"
        variant="ghost"
        size="icon"
      >
        <Sun :size="18" class="scale-100 dark:scale-0" />
        <Moon :size="18" class="absolute scale-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="font-mono font-medium">
      <DropdownMenuItem
        @click="theme = Theme.LIGHT"
        class="cursor-pointer gap-2"
      >
        <Sun :size="16" />
        Light
      </DropdownMenuItem>
      <DropdownMenuItem
        @click="theme = Theme.DARK"
        class="cursor-pointer gap-2"
      >
        <Moon :size="16" />
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem
        @click="theme = Theme.SYSTEM"
        class="cursor-pointer gap-2"
      >
        <LaptopMinimal :size="16" />
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
