<template>
  <h1 class="text-4xl font-bold mb-8">{{ blok.title }}</h1>
  <div class="prose" v-html="content"></div>
</template>

<script setup lang="ts">
import { HeroStoryblok } from 'component-types-sb'

const props = defineProps<{
  blok: HeroStoryblok
}>()

const content = computed(() => renderRichText(props.blok.body))
</script>
