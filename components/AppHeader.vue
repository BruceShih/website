<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const open = ref(false)
const target = ref(null)

defineShortcuts({
  o: () => open.value = !open.value
})

const route = useRoute()
const router = useRouter()
const headerLinks = useHeaderLinksStore()
if (route.name === 'blogs' || route.name === 'blogs-slug')
  headerLinks.setBlogLinkActive(true)
else
  headerLinks.setBlogLinkActive(false)

router.afterEach((to) => {
  if (to.name === 'blogs' || to.name === 'blogs-slug')
    headerLinks.setBlogLinkActive(true)
  else
    headerLinks.setBlogLinkActive(false)
})

const verticalLinks = reactive([headerLinks.links])

onClickOutside(target, () => {
  if (open.value)
    open.value = false
})
</script>

<template>
  <UContainer class="h-24 flex md:justify-between items-center sticky">
    <NuxtLink to="/" class="flex-grow md:flex-grow-0">
      <UAvatar alt="Bruce" size="lg" />
    </NuxtLink>
    <UHorizontalNavigation :links="headerLinks.links" class="hidden md:flex md:justify-center" />
    <div class="flex">
      <UButton
        v-for="(link, index) in headerLinks.socialLinks"
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
