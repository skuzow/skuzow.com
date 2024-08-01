<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
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

const mode = useColorMode();
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
        @click="mode = Theme.LIGHT"
        class="cursor-pointer gap-2"
      >
        <Sun :size="16" />
        Light
      </DropdownMenuItem>
      <DropdownMenuItem @click="mode = Theme.DARK" class="cursor-pointer gap-2">
        <Moon :size="16" />
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem
        @click="mode = Theme.SYSTEM"
        class="cursor-pointer gap-2"
      >
        <LaptopMinimal :size="16" />
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
