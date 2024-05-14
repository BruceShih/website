<script setup lang="ts">
import type { HeroStoryblok } from '~/component-types-sb'

const client = useTypedStoryblokApi<HeroStoryblok>()
const response = await client.getStory('home')
const story = response.data.story

useHead({
  title: 'Home'
})
</script>

<template>
  <UContainer>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </UContainer>
</template>
