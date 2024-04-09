<script setup lang="ts">
import type { PageStoryblok } from '~/component-types-sb'

const props = defineProps<{
  blok: PageStoryblok
}>()

const content = computed(() => renderRichText(props.blok.body))
</script>

<template>
  <h1 class="text-3xl font-bold">
    {{ blok.title }}
  </h1>
  <div class="py-6" v-html="content" />
</template>
