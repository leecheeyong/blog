<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import getPosts from '@/composables/blogPosts'
const route = useRoute()
defineProps(['bgColor'])
const posts = ref()
onMounted(async () => {
  posts.value = await getPosts()
})
document.title = 'Joe | Blog'
</script>
<template>
  <div class="mx-auto max-w-3xl lg:mx-0">
    <h2 class="dark.text-[#e8b7b7] text-[#db6b6b] text-5xl font-bold">
      Blog <span class="text-xl">@ Joe Lee</span>
    </h2>
    <p :class="[bgColor ? 'text-gray-300' : 'text-gray-600', 'mt-2 text-lg leading-8']">
      Articles covering a wide range of topics in not just full stack development
    </p>
  </div>
  <div
    :class="[
      bgColor ? 'border-gray-600' : 'border-gray-200',
      'mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-y-8 gap-x-8 border-t  pt-11 sm:mt-11 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3'
    ]"
  >
    <article
      v-if="Array.isArray(posts)"
      v-for="post in posts"
      :key="post.id"
      :class="[
        bgColor ? 'bg-[#3b3b3b]' : 'bg-gray-100',
        'flex max-w-xl flex-col items-start justify-between rounded-lg min-w-full'
      ]"
    >
      <router-link :to="'/' + post.id" class="p-8">
        <div class="group relative">
          <h3
            :class="[
              bgColor ? 'text-[#b6b6fd]' : 'text-[#7c7cf7]',
              'mt-3 text-[20px] font-bold leading-6'
            ]"
          >
            <span class="absolute inset-0" />
            {{ post.title }}
          </h3>
          <p class="mt-5 text-[16px] leading-6 line-clamp-3">{{ post.description }}</p>
        </div>
      </router-link>
    </article>
  </div>
</template>
