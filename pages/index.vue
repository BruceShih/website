<script setup lang="ts">
import type { HeroStoryblok } from 'component-types-sb'

const client = useTypedStoryblokApi<HeroStoryblok>()
const response = await client.getStory('home')
const story = response.data.story
</script>

<template>
  <section>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>
