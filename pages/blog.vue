<template>
  <h1 class="text-2xl font-bold">Blog</h1>
  <div class="flex flex-col w-full">
    <template v-for="(story, index) in stories" :key="story.id">
      <div class="card flex-col md-flex-row bg-base-300 shadow-xl h-60">
        <figure class="md-ma-0 md-rounded-s-4 md-rounded-e-0">
          <img
            class="w-60 h-60"
            src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
            alt="Album"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ story.content.title }}</h2>
          <p>{{ story.content.description }}</p>
          <div class="card-actions justify-end items-center">
            <span class="mr-4 text-base-content text-sm ">
              <UseTimeAgo
                v-slot="{ timeAgo }"
                :time="story.published_at ?? story.created_at"
              >
                {{ timeAgo }}
              </UseTimeAgo>
            </span>
            <a :href="story.full_slug">Read More</a>
          </div>
        </div>
      </div>
      <div v-if="index !== stories.length - 1" class="divider"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useStoryblokApi } from '#imports'
import { UseTimeAgo } from '@vueuse/components'

const response = await useStoryblokApi().get('cdn/stories/', {
  starts_with: 'blog',
  sort_by: 'created_at:desc',
  page: 1,
  per_page: 10
})
const stories = response.data.stories
</script>
