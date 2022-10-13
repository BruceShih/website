<script setup lang="ts">
import { useStoryblokApi } from '@storyblok/astro';

const { data: posts } = await useStoryblokApi().get(
  `cdn/stories?starts_with=articles/&sort_by=created_at:desc`,
  {
    version: import.meta.env.DEV ? 'draft' : 'published'
  }
);
</script>

<template>
  <div
    v-for="post in posts.stories"
    :key="post.id"
    class="card card-side bg-base-100 shadow-xl"
  >
    <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ post.content.title }}</h2>
      <p>
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
      <div class="card-actions justify-end">
        <a :href="post.full_slug" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </div>
</template>
