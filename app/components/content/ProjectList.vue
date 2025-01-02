<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content'

const query: QueryBuilderParams = {
  path: '/projects',
  where: [{ title: { $ne: 'Projects' } }],
  limit: 20,
  sort: [{ title: 1 }]
}
</script>

<template>
  <ContentList :query="query">
    <template #default="{ list }">
      <div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        <template
          v-for="project in list"
          :key="project._path"
        >
          <UCard class="relative h-40 overflow-hidden">
            <NuxtImg
              :alt="`Preview of ${project.title}`"
              class="preview-image absolute -top-5 right-0 w-3/5 opacity-50"
              :src="project.preview"
            />
            <h2 class="text-xl mb-2 mx-2">
              <ULink
                target="_blank"
                :to="project.link"
              >
                {{ project.title }}
              </ULink>
            </h2>
            <p class="mb-6 mx-2">
              {{ project.description }}
            </p>
            <UButton
              class="mx-2"
              color="primary"
              size="sm"
              square
              target="_blank"
              :to="project.repository"
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
