<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = { path: '/projects', where: [{ title: { $ne: 'Projects' } }], limit: 20, sort: [{ title: 1 }] }
</script>

<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        <template v-for="project in list" :key="project._path">
          <UCard class="relative h-40 overflow-hidden">
            <NuxtImg
              :src="project.preview"
              :alt="`Preview of ${project.title}`"
              class="preview-image absolute -top-5 right-0 w-3/5 opacity-50"
            />
            <h2 class="text-xl mb-2 mx-2">
              <ULink
                :to="project.link"
                target="_blank"
              >
                {{ project.title }}
              </ULink>
            </h2>
            <p class="mb-6 mx-2">
              {{ project.description }}
            </p>
            <UButton
              :to="project.repository"
              class="mx-2"
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
    </template>

    <template #not-found>
      <p>No projects found.</p>
    </template>

    <!-- TODO: paging? -->
  </ContentList>
</template>

<style scoped>
.preview-image {
  mask-image: linear-gradient(270deg, black, transparent);
}
</style>
