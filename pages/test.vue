<script setup lang="ts">
import type { HorizontalNavigationLink } from '#ui/types'

const links: HorizontalNavigationLink[] = [{
  label: 'About',
  to: '/'
}, {
  label: 'Blog',
  to: '/blog'
}, {
  label: 'Projects',
  to: '/projects'
}, {
  label: 'Contact',
  to: '/contact'
}]
</script>

<template>
  <UContainer class="h-24 flex justify-between items-center">
    <NuxtLink to="/">
      <UAvatar alt="Bruce" size="lg" />
    </NuxtLink>
    <UHorizontalNavigation :links="links" class="flex justify-center" />
    <div class="flex">
      <UButton icon="i-lucide-twitter" size="lg" variant="link" />
      <UButton icon="i-lucide-github" size="lg" variant="link" />
    </div>
  </UContainer>
</template>
