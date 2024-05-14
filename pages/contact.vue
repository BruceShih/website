<script setup lang="ts">
import type { PageStoryblok } from '~/component-types-sb'

const client = useTypedStoryblokApi<PageStoryblok>()
const response = await client.getStory('contact')
const story = response.data.story

useHead({
  title: 'Contact'
})
</script>

<template>
  <UContainer>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </UContainer>
</template>
