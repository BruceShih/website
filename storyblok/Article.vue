<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

const props = defineProps<{
  blok: ArticleStoryblok
}>()

const content = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <h2 class="text-xl mb-2">
    {{ blok.title }}
  </h2>
  <p class="mb-4" v-html="content" />
  <div class="flex justify-end">
    <span class="mr-4 text-base-content text-sm">
      {{ new Date(blok.date).toDateString() }}
    </span>
  </div>
</template>
