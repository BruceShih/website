<script setup lang="ts">
import type { ContentStoryblok } from '~/component-types-sb'

const client = useTypedStoryblokApi<ContentStoryblok>()
const response = await client.getStory('contact')
const story = response.data.story
</script>

<template>
  <h1 class="text-2xl font-bold">
    Contact page
  </h1>
  <section>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>
