<script setup lang="ts">
import { useRoute } from 'vue-router'
import blogContent from '@/composables/blogContent'
const route = useRoute()
const { title, date, markdown, err } = await blogContent(route.params.id)
</script>
<template>
  <div v-if="err">
    <h2 class="dark.text-[#e8b7b7] text-[#db6b6b] text-4xl font-bold">{{ err }}</h2>
    <span class="ml-1 md:ml-2 text-base font-medium">Hey, this page does not exists</span>
  </div>
  <div v-else>
    <nav class="mb-5 tracking-tight code" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link to="/" class="hover:text-gray-400 inline-flex items-center"
            >Blog</router-link
          >
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="ml-1 md:ml-2 text-base font-medium">{{ title }}</span>
          </div>
        </li>
      </ol>
      <br /><span class="text-xs">Published on {{ date }}</span>
    </nav>
    <article
      class="prose prose-img:rounded-xl dark:prose-invert prose-a:text-blue-600 lg:text-xl prose-a:no-underline prose-a:text-[#7272f7]"
      v-html="markdown"
    />
  </div>
</template>
