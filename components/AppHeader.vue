<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import type { HorizontalNavigationLink } from '#ui/types'

const open = ref(false)
const target = ref(null)

defineShortcuts({
  o: () => open.value = !open.value
})

onClickOutside(target, () => {
  if (open.value)
    open.value = false
})

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

const socialLinks = [{
  icon: 'i-lucide-twitter',
  to: 'https://twitter.com/bruceshihtw'
}, {
  icon: 'i-lucide-github',
  to: 'https://github.com/BruceShih'
}]

const verticalLinks = [links]
</script>

<template>
  <UContainer class="h-24 flex md:justify-between items-center sticky">
    <NuxtLink to="/" class="flex-grow md:flex-grow-0">
      <UAvatar alt="Bruce" size="lg" />
    </NuxtLink>
    <UHorizontalNavigation :links="links" class="hidden md:flex md:justify-center" />
    <div class="flex">
      <UButton
        v-for="(link, index) in socialLinks"
        :key="index"
        :icon="link.icon"
        :to="link.to"
        target="_blank"
        size="lg"
        variant="link"
      />
    </div>

    <UDropdown
      :items="verticalLinks"
      class="md:hidden"
    >
      <UButton icon="i-lucide-menu" size="lg" variant="link" />
    </UDropdown>
  </UContainer>
</template>
