<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

const { path } = useRoute()
const client = useTypedStoryblokApi<ArticleStoryblok>()
const response = await client.getStory(path)
const story = useState<typeof response.data.story>('blog', () => response.data.story)

useHead({
  title: story.value.content.title
})
</script>

<template>
  <UContainer>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </UContainer>
</template>
