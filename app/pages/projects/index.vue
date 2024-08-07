<script setup lang="ts">
import type { ProjectStoryblok } from '../../component-types-sb'

const { path, query } = useRoute()
const client = useTypedStoryblokApi<ProjectStoryblok>()
const page = ref(Number.parseInt(query.page as string || '1'))
const pageSize = ref(10)
const totalStories = ref(0)
const stories = useState<TStories<ProjectStoryblok>['data']['stories']>(path)
try {
  const { headers, data } = await client.getStories({
    starts_with: 'projects',
    sort_by: 'created_at:desc',
    page: 1,
    per_page: 10
  })
  stories.value = data.stories
  totalStories.value = headers.total ? Number.parseInt(headers.total) : 0
}
catch (error) {
  console.error(error)
}

useHead({
  title: 'Projects'
})
</script>

<template>
  <UContainer>
    <h1 class="text-3xl font-bold">
      Projects
    </h1>
    <div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
      <template v-for="story in stories" :key="story.id">
        <UCard class="relative h-40 overflow-hidden -z-10">
          <NuxtImg
            v-if="story.content.preview?.filename"
            :src="story.content.preview?.filename"
            :alt="`Preview of ${story.content.title}`"
            class="preview-image absolute -top-5 right-0 w-3/5 opacity-50"
          />
          <h2 class="text-xl mb-2 px-2">
            <ULink
              :to="story.content.link?.url"
              target="_blank"
            >
              {{ story.content.title }}
            </ULink>
          </h2>
          <p class="mb-6 px-2">
            {{ story.content.description }}
          </p>
          <UButton
            :to="story.content.repository?.url"
            target="_blank"
            size="sm"
            color="primary"
            square
            variant="link"
          >
            Repository
          </UButton>
        </UCard>
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

<style scoped>
.preview-image {
  mask-image: linear-gradient(270deg, black, transparent);
}
</style>
