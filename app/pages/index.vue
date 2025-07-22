<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const skills = [
  'Vue',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'Git',
  'Vitest',
  'Cloudflare'
]

const projects = [
  {
    name: 'Wallpaper Service',
    description: 'A service for managing and serving wallpaper for my phone',
    tech: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Tailwind CSS', 'shadcn/vue', 'Cloudflare Workers'],
    github: 'https://github.com/BruceShih/wallpapers',
    demo: 'https://wallpapers.bruceshih.me'
  },
  {
    name: 'Gmail Purge (archived)',
    description: 'A tool to help to clean up your Gmail inbox',
    tech: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Nuxt UI', 'Cloudflare Workers'],
    github: 'https://github.com/BruceShih/gmail-purge'
  },
  {
    name: 'Minesweeper (refactoring)',
    description: 'A minesweeper game',
    tech: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vitest'],
    github: 'https://github.com/BruceShih/minesweeper',
    demo: 'https://minesweeper.bruceshih.me/'
  },
  {
    name: 'My website',
    description: 'My personal portfolio website',
    tech: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Tailwind CSS', 'shadcn/vue', 'Cloudflare Workers'],
    github: 'https://github.com/BruceShih/website',
    demo: 'https://bruceshih.me'
  }
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/BruceShih' },
  { name: 'Twitter', url: 'https://twitter.com/bruceshihtw' },
  { name: 'Email', url: 'mailto:contact@bruceshih.me' }
]
</script>

<template>
  <div class="min-h-screen bg-black text-green-400 font-mono">
    <div class="container mx-auto px-6 py-8 max-w-4xl">
      <!-- Terminal Header -->
      <div class="flex items-center gap-3 mb-8">
        <Icon
          name="memory:terminal"
          class="size-6"
        />
        <span class="text-xl">bruceshih.me ~ portfolio</span>
      </div>

      <!-- ASCII Art Name -->
      <div class="mb-8 text-green-300">
        <pre class="text-sm leading-tight">
██████  ██████  ██    ██  ██████ ███████     ███████ ██   ██ ██ ██   ██
██   ██ ██   ██ ██    ██ ██      ██          ██      ██   ██ ██ ██   ██
██████  ██████  ██    ██ ██      █████       ███████ ███████ ██ ███████
██   ██ ██   ██ ██    ██ ██      ██               ██ ██   ██ ██ ██   ██
██████  ██   ██  ██████   ██████ ███████     ███████ ██   ██ ██ ██   ██
        </pre>
        <p class="mt-4 text-green-400">
          > Software Developer | Vue.js Enthusiast | Problem Solver
        </p>
      </div>

      <!-- Command Line Tabs -->
      <Tabs
        default-value="about"
        class="w-full"
      >
        <div class="mb-6">
          <span class="text-green-400">$ cat </span>
          <TabsList class="bg-transparent border-none p-0">
            <TabsTrigger
              value="about"
              class="bg-transparent text-green-400 hover:text-green-300 data-[state=active]:text-white data-[state=active]:bg-green-900/20 border-none rounded-none"
            >
              about.txt
            </TabsTrigger>
            <span class="text-green-400 mx-2">|</span>
            <TabsTrigger
              value="projects"
              class="bg-transparent text-green-400 hover:text-green-300 data-[state=active]:text-white data-[state=active]:bg-green-900/20 border-none rounded-none"
            >
              projects.json
            </TabsTrigger>
            <span class="text-green-400 mx-2">|</span>
            <TabsTrigger
              value="contact"
              class="bg-transparent text-green-400 hover:text-green-300 data-[state=active]:text-white data-[state=active]:bg-green-900/20 border-none rounded-none"
            >
              contact.sh
            </TabsTrigger>
          </TabsList>
        </div>

        <!-- About Content -->
        <TabsContent
          value="about"
          class="space-y-4"
        >
          <div class="border border-green-400/30 p-6 rounded bg-green-900/5">
            <div class="mb-4">
              <span class="text-green-300"># About Me</span>
            </div>
            <div class="space-y-4 text-green-100">
              <p>
                Hello! I'm a passionate software developer with expertise in modern web technologies.
                I love creating beautiful, functional applications that solve real-world problems.
              </p>
              <p>
                My journey in programming started 10 years ago, and I've been constantly learning
                and evolving my skills. I enjoy working with technologies like Vue, TypeScript,
                and modern CSS frameworks.
              </p>
            </div>

            <div class="mt-6">
              <span class="text-green-300"># Skills</span>
              <div class="mt-2 flex flex-wrap gap-2">
                <span
                  v-for="skill in skills"
                  :key="skill"
                  class="px-2 py-1 text-xs border border-green-400/30 text-green-400 rounded"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </TabsContent>

        <!-- Projects Content -->
        <TabsContent
          value="projects"
          class="space-y-4"
        >
          <div class="border border-green-400/30 p-6 rounded bg-green-900/5">
            <div class="mb-4">
              <span class="text-green-300"># Projects Repository</span>
            </div>
            <div class="space-y-6">
              <div
                v-for="(project, index) in projects"
                :key="project.name"
                class="space-y-2"
              >
                <div class="text-green-300">
                  {{ `"project_${index + 1}": {` }}
                </div>
                <div class="ml-4 space-y-1 text-green-100">
                  <div>"name": "{{ project.name }}",</div>
                  <div>"description": "{{ project.description }}",</div>
                  <div>"tech": {{ JSON.stringify(project.tech) }},</div>
                  <div class="flex gap-4 mt-2">
                    <a
                      :href="project.github"
                      target="_blank"
                      class="text-green-400 hover:text-green-300 underline"
                    >
                      view_code()
                    </a>
                    <a
                      v-if="project.demo"
                      :href="project.demo"
                      target="_blank"
                      class="text-green-400 hover:text-green-300 underline"
                    >
                      live_demo()
                    </a>
                  </div>
                </div>
                <div class="text-green-300">
                  }
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <!-- Contact Content -->
        <TabsContent
          value="contact"
          class="space-y-4"
        >
          <div class="border border-green-400/30 p-6 rounded bg-green-900/5">
            <div class="mb-4">
              <span class="text-green-300">#!/bin/bash</span>
            </div>
            <div class="space-y-4">
              <div class="text-green-100">
                # Let's connect and collaborate!
              </div>
              <div class="space-y-2">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  class="block text-green-400 hover:text-green-300"
                >
                  <span class="text-green-300">$</span> open {{ social.url }}
                </a>
              </div>
              <div class="mt-6 text-green-100">
                # Always interested in new opportunities and interesting projects
                echo "Feel free to reach out!"
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <!-- Terminal Cursor -->
      <div class="mt-8 flex items-center">
        <span class="text-green-400">$ </span>
        <span class="bg-green-400 w-2 h-5 ml-1 animate-pulse" />
      </div>
    </div>
  </div>
</template>
