<script setup lang="ts">
import { UseTimeAgo } from '@vueuse/components'
import type { ArticleStoryblok } from '~/component-types-sb'

const client = useTypedStoryblokApi<ArticleStoryblok>()
const response = await client.getStories({
  starts_with: 'blog',
  sort_by: 'created_at:desc',
  page: 1,
  per_page: 10
})
const stories = useState<typeof response.data.stories>('blogs', () => response.data.stories)
</script>

<template>
  <UContainer>
    <h1 class="text-3xl font-bold">
      Blog
    </h1>
    <div class="py-6">
      <template v-for="(story, index) in stories" :key="story.id">
        <UCard>
          <template #header>
            <h2 class="text-xl">
              {{ story.content.title }}
            </h2>
          </template>

          <p class="text-primary flex justify-end">
            <NuxtLink v-if="story.full_slug" :to="story.full_slug">
              ...Keep reading
            </NuxtLink>
          </p>

          <template #footer>
            <div class="flex justify-between">
              <span class="mr-4 text-base-content text-sm">
                <UseTimeAgo
                  v-slot="{ timeAgo }"
                  :time=" story.created_at"
                >
                  {{ timeAgo }}
                </UseTimeAgo>
              </span>
            </div>
          </template>
        </UCard>
        <UDivider v-if="index !== stories.length - 1" type="solid" />
      </template>
    </div>
  </UContainer>
</template>
