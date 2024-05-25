<script setup lang="ts">
import type { HeroStoryblok } from '~/component-types-sb'

const { path } = useRoute()
const client = useTypedStoryblokApi<HeroStoryblok>()
const story = useState<TStory<HeroStoryblok>['data']['story']>(path)
try {
  const data = await client.getStory('home')
  story.value = data.story
}
catch (error) {
  console.error(error)
}

useHead({
  title: 'Home'
})
</script>

<template>
  <UContainer>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </UContainer>
</template>
