<script setup lang="ts">
import type { PageStoryblok } from '~/component-types-sb'

const { path } = useRoute()
const client = useTypedStoryblokApi<PageStoryblok>()
const story = useState<TStory<PageStoryblok>['data']['story']>(path)
try {
  const { data } = await client.getStory('contact')
  story.value = data.story
}
catch (error) {
  console.error(error)
}

useHead({
  title: 'Contact'
})
</script>

<template>
  <UContainer>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </UContainer>
</template>
