<template>
  <section>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>

<script setup lang="ts">
const story = await useAsyncStoryblok('home', {
  version: import.meta.env.PROD ? 'published' : 'draft'
})
</script>
