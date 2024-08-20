<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
import { UseTimeAgo } from '@vueuse/components'

const query: QueryBuilderParams = { path: '/blog', where: [{ title: { $ne: 'Blog' } }], limit: 10, sort: [{ created: -1 }] }
</script>

<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div v-for="(blog, index) in list" :key="blog._path">
        <h2 class="text-xl mb-2">
          {{ blog.title }}
        </h2>
        <p class="mb-2">
          {{ blog.description }}
        </p>

        <div class="flex justify-between items-end">
          <ULink
            :key="blog._path"
            :to="blog._path"
            class="text-sm"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            ...Keep reading
          </ULink>
          <span class="mr-4 text-base-content text-sm">
            <UseTimeAgo
              v-slot="{ timeAgo }"
              :time="blog.created"
            >
              {{ timeAgo }}
            </UseTimeAgo>
          </span>
        </div>
        <UDivider v-if="list && index !== list.length - 1" type="solid" class="my-6" />
      </div>
    </template>

    <template #not-found>
      <p>No blog post found.</p>
    </template>

    <!-- TODO: paging? -->
  </ContentList>
</template>
