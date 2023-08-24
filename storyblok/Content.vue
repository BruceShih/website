<script setup lang="ts">
import type { ContentStoryblok } from 'component-types-sb'

const props = defineProps<{
  blok: ContentStoryblok
}>()

const content = computed(() => props.blok.body)
</script>

<template>
  <div class="card bg-base-300 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">
        {{ blok.title }}
      </h2>
      <p>
        <a class="btn btn-square btn-ghost" href="https://twitter.com/bruceshihtw" target="_blank">
          <i class="i-lucide:twitter h-6 w-6" />
        </a>
        <a class="btn btn-square btn-ghost" href="https://github.com/BruceShih" target="_blank">
          <i class="i-lucide:github  h-6 w-6" />
        </a>
      </p>
    </div>
  </div>
</template>
