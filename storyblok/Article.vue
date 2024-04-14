<script setup lang="ts">
import type { ArticleStoryblok } from '~/component-types-sb'

const props = defineProps<{
  blok: ArticleStoryblok
}>()

const content = computed(() => renderRichText(props.blok.content))
</script>

<template>
  <UCard>
    <template #header>
      <h2 class="text-xl">
        {{ blok.title }}
      </h2>
    </template>

    <p v-html="content" />

    <template #footer>
      {{ blok.date }}
    </template>
  </UCard>
</template>
