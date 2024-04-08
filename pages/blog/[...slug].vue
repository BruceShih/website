<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

const { path } = useRoute()
const client = useTypedStoryblokApi<ArticleStoryblok>()
const response = await client.getStory(path)
const story = response.data.story
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
