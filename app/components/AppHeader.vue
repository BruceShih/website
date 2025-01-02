<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const open = ref(false)
const target = ref(null)

defineShortcuts({
  o: () => open.value = !open.value
})

const route = useRoute()
const router = useRouter()
const { navigation } = useContent()
const appConfig = useAppConfig()
const headerLinks = useHeaderLinksStore()

headerLinks.links = navigation.value.map(link => ({
  label: link.title,
  to: link._path
}))
headerLinks.socialLinks = [
  {
    label: 'Twitter',
    icon: 'i-lucide-twitter',
    to: `https://twitter.com/${appConfig.socials?.twitter}`
  },
  {
    label: 'GitHub',
    icon: 'i-lucide-github',
    to: `https://github.com/${appConfig.socials?.github}`
  }
]
const verticalLinks = reactive([headerLinks.links])

if (route.path.startsWith('/blog'))
  headerLinks.setBlogLinkActive(true)
else
  headerLinks.setBlogLinkActive(false)

router.afterEach(() => {
  if (route.path.startsWith('/blog'))
    headerLinks.setBlogLinkActive(true)
  else
    headerLinks.setBlogLinkActive(false)
})

onClickOutside(target, () => {
  if (open.value)
    open.value = false
})
</script>

<template>
  <UContainer class="h-24 flex md:justify-between items-center sticky">
    <NuxtLink
      class="flex-grow md:flex-grow-0"
      to="/"
    >
      <UAvatar
        alt="Bruce"
        size="lg"
      />
    </NuxtLink>
    <UNavigationMenu
      class="hidden md:flex md:justify-center"
      color="neutral"
      :items="headerLinks.links"
      variant="link"
    />
    <div class="flex">
      <UButton
        v-for="(link, index) in headerLinks.socialLinks"
        :key="index"
        color="neutral"
        :icon="link.icon"
        size="lg"
        target="_blank"
        :to="link.to"
        variant="link"
      />
    </div>

    <UDropdownMenu
      class="md:hidden"
      :items="verticalLinks"
    >
      <UButton
        color="neutral"
        icon="i-lucide-menu"
        size="lg"
        variant="link"
      />
    </UDropdownMenu>
  </UContainer>
</template>
