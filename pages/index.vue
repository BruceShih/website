<template>
  <section>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>

<script setup lang="ts">
import { useAsyncStoryblok } from '#imports'

const story = await useAsyncStoryblok('home')
</script>
