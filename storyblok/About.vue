<template>
  <div v-editable="blok" class="px-4">
    <StoryblokComponent v-for="blok in props.blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>
 
<script setup lang="ts">
import { AboutStoryblok } from 'component-types-sb';

const props = defineProps<{
  blok: AboutStoryblok
}>()
</script>