<script setup lang="ts">
import { UseTimeAgo } from '@vueuse/components'
import type { ArticleStoryblok, PageStoryblok } from '../../component-types-sb'

useHead({
  title: 'Blog'
})

const { path, query } = useRoute()
const clientPage = useTypedStoryblokApi<PageStoryblok>()
const clientArticle = useTypedStoryblokApi<ArticleStoryblok>()
const page = ref(Number.parseInt(query.page as string || '1'))
const pageSize = ref(10)
const totalStories = ref(0)
const story = useState<TStory<PageStoryblok>['data']['story']>(path)
try {
  const { data } = await clientPage.getStory('blog')
  story.value = data.story
}
catch (error) {
  console.error(error)
}
const stories = useState<TStories<ArticleStoryblok>['data']['stories']>(`${path}-stories`)
try {
  const { headers, data } = await clientArticle.getStories({
    starts_with: 'blogs',
    sort_by: 'created_at:desc',
    page: page.value,
    per_page: pageSize.value
  })
  stories.value = data.stories
  totalStories.value = headers.total ? Number.parseInt(headers.total) : 0
}
catch (error) {
  console.error(error)
}

watch(page, async (newPage) => {
  try {
    const { data } = await clientArticle.getStories({
      starts_with: 'blogs',
      sort_by: 'created_at:desc',
      page: newPage,
      per_page: pageSize.value
    })
    stories.value = data.stories
  }
  catch (error) {
    console.error(error)
  }
})

function getFirstParagraph(story: TStories<ArticleStoryblok>['data']['stories'][0]) {
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
    <StoryblokComponent v-if="story" :blok="story.content" />
    <div>
      <template v-for="(s, index) in stories" :key="s.id">
        <h2 class="text-xl mb-2">
          {{ s.content.title }}
        </h2>
        <p class="mb-2">
          {{ getFirstParagraph(s) }}
        </p>
        <div class="flex justify-between">
          <ULink
            v-if="s.full_slug"
            class="text-sm"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            :to="s.full_slug"
          >
            ...Keep reading
          </ULink>
          <span class="mr-4 text-base-content text-sm">
            <UseTimeAgo
              v-slot="{ timeAgo }"
              :time=" s.created_at"
            >
              {{ timeAgo }}
            </UseTimeAgo>
          </span>
        </div>
        <UDivider v-if="stories && index !== stories.length - 1" type="solid" class="my-6" />
      </template>
    </div>
    <UPagination
      v-model="page"
      class="mt-8"
      :page-count="pageSize"
      :total="totalStories"
      :to="(page: number) => ({
        query: { page },
      })"
    />
  </UContainer>
</template>
