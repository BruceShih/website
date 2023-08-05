<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup lang="ts">
import { ArticleStoryblok } from 'component-types-sb';

const { path } = useRoute()
const client = useTypedStoryblokApi<ArticleStoryblok>()
const response = await client.getStory(path)
const story = response.data.story
</script>