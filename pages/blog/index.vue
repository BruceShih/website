<script setup lang="ts">
import { UseTimeAgo } from '@vueuse/components'
import type { ArticleStoryblok } from 'component-types-sb'

const client = useTypedStoryblokApi<ArticleStoryblok>()
const response = await client.getStories({
  starts_with: 'blog',
  sort_by: 'created_at:desc',
  page: 1,
  per_page: 10
})
const stories = response.data.stories
</script>

<template>
  <h1 class="text-2xl font-bold">
    Blog
  </h1>
  <div class="flex flex-col w-full">
    <template v-for="(story, index) in stories" :key="story.id">
      <div class="card flex-col md-flex-row bg-base-300 shadow-xl h-60">
        <div class="card-body">
          <h2 class="card-title">
            {{ story.content.title }}
          </h2>
          <p>{{ story.content.description }}</p>
          <div class="card-actions justify-end items-center">
            <span class="mr-4 text-base-content text-sm">
              <UseTimeAgo
                v-slot="{ timeAgo }"
                :time=" story.created_at"
              >
                {{ timeAgo }}
              </UseTimeAgo>
            </span>
            <NuxtLink v-if="story.full_slug" :to="story.full_slug">
              More
            </NuxtLink>
          </div>
        </div>
      </div>
      <div v-if="index !== stories.length - 1" class="divider" />
    </template>
  </div>
</template>
