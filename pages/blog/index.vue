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

useHead({
  title: 'Blog'
})

function getFirstParagraph(story: typeof response.data.stories[0]) {
  const firstParagraph = story.content.content.content?.find(block => block.type === 'paragraph')
  if (firstParagraph) {
    const firstText = firstParagraph.content?.find(e => e.type === 'text')
    if (firstText)
      return firstText.text
  }
  return ''
}
</script>

<template>
  <UContainer>
    <h1 class="text-3xl font-bold">
      Blog
    </h1>
    <div class="py-6">
      <template v-for="(story, index) in stories" :key="story.id">
        <h2 class="text-xl mb-2">
          {{ story.content.title }}
        </h2>
        <p class="mb-2">
          {{ getFirstParagraph(story) }}
        </p>
        <div class="flex justify-between">
          <ULink
            v-if="story.full_slug"
            class="text-sm"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            :to="story.full_slug"
          >
            ...Keep reading
          </ULink>
          <span class="mr-4 text-base-content text-sm">
            <UseTimeAgo
              v-slot="{ timeAgo }"
              :time=" story.created_at"
            >
              {{ timeAgo }}
            </UseTimeAgo>
          </span>
        </div>
        <UDivider v-if="index !== stories.length - 1" type="solid" />
      </template>
    </div>
  </UContainer>
</template>
