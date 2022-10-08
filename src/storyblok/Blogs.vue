<script setup lang="ts">
import { useStoryblokApi } from '@storyblok/astro';

const api = useStoryblokApi();
const { data: posts } = await api.get(`cdn/stories?starts_with=blog/`, {
  version: import.meta.env.DEV ? 'draft' : 'published'
});
</script>

<template>
  <div
    v-for="post in posts.stories"
    :key="post.id"
    class="border-b border-neutral-500 pb-4 mb-4"
  >
    <h2>{{ post.content.title }}</h2>
    <p class="opacity-60 text-sm">
      {{
        new Date(post.published_at ?? post.created_at).toLocaleDateString(
          undefined,
          {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }
        )
      }}
    </p>
    <p class="mt-2">
      {{ post.content.description }}
    </p>
    <a :href="post.full_slug" class="inline-block mt-6 hover:underline">
      Read More
    </a>
  </div>
</template>
