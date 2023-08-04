<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-full">
        <h1 class="text-5xl font-bold">{{ blok.title }}</h1>
        <div class="py-6 prose" v-html="content"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, renderRichText } from '#imports'
import { HeroStoryblok } from 'component-types-sb'

const props = defineProps<{
  blok: HeroStoryblok
}>()

const content = computed(() => renderRichText(props.blok.body))
</script>
