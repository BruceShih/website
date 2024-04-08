<script setup lang="ts">
import type { PageStoryblok } from '~/component-types-sb'

const props = defineProps<{
  blok: PageStoryblok
}>()
</script>

<template>
  <StoryblokComponent
    v-for="block in props.blok.body"
    :key="block._uid"
    :blok="block"
  />
</template>
