<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

const { path } = useRoute()
const client = useTypedStoryblokApi<ArticleStoryblok>()
const story = useState<TStory<ArticleStoryblok>['data']['story']>(path)
try {
  const data = await client.getStory(path)
  story.value = data.story
}
catch (error) {
  console.error(error)
}

useHead({
  title: story.value?.content.title || 'Blog'
})
</script>

<template>
  <UContainer>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </UContainer>
</template>
