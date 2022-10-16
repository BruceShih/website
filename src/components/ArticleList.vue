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
  <section
    v-for="(post, index) in posts.stories"
    :key="index"
    class="indicator w-full"
  >
    <span
      class="indicator-item indicator-middle indicator-start badge badge-lg badge-ghost text-4xl text-neutral"
    >
      #{{ index }}
    </span>
    <div class="card card-side bg-base-100 w-full shadow-xl ml-5">
      <div class="card-body">
        <h2 class="card-title">
          {{ post.content.title }}
        </h2>
        <p class="text-secondary mb-5">
          Published at
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
        <p class="h-12 text-ellipsis overflow-hidden text-content">
          {{ post.content.description }}
        </p>
        <div class="card-actions justify-end">
          <a :href="post.full_slug" class="text-primary">Read More</a>
        </div>
      </div>
    </div>
  </section>
</template>
