<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

const props = defineProps<{
  blok: ArticleStoryblok
}>()

const content = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <div class="flex flex-row justify-between items-center">
    <h1 class="text-2xl font-bold mb-4">
      {{ blok.title }}
    </h1>
    <span class="inline-block text-base-content">
      {{ blok.date }}
    </span>
  </div>

  <div class="card bg-base-300 shadow-xl">
    <div class="card-body">
      <div class="prose max-w-full " v-html="content" />
    </div>
  </div>
</template>
