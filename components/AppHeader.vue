<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import type { HorizontalNavigationLink, Link } from '#ui/types'

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
  to: 'https://twitter.com/bruce'
}, {
  icon: 'i-lucide-github',
  to: 'https://github.com/BruceShih'
}]
</script>

<template>
  <UContainer class="h-24 flex justify-between items-center sticky">
    <NuxtLink to="/">
      <UAvatar alt="Bruce" size="lg" />
    </NuxtLink>
    <UHorizontalNavigation :links="links" class="hidden md:flex md:justify-center" />
    <div class="hidden md:flex">
      <UButton v-for="(link, index) in socialLinks" :key="index" :icon="link.icon" :to="link.to" target="_blank" size="lg" variant="link" />
    </div>

    <div ref="target" class="flex md:hidden">
      <UButton icon="i-lucide-menu" size="lg" variant="link" @click="open = !open" />

      <UCard ref="target" class="flex-col w-full absolute top-24 left-0" :class="{ flex: open, hidden: !open }">
        <UVerticalNavigation :links="links" class="w-full" @click="open = !open" />
        <UDivider type="solid" class="py-2" />
        <div>
          <UButton v-for="(link, index) in socialLinks" :key="index" :icon="link.icon" :to="link.to" target="_blank" variant="link" />
        </div>
      </UCard>
    </div>
  </UContainer>
</template>
