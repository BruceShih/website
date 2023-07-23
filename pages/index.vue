<template>
  <section class="wa px-24 py-12">
    <h1 class="text-4xl font-bold mb-8">About page</h1>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>

<script setup lang="ts">
const story = await useAsyncStoryblok('about', { version: 'draft' })
</script>