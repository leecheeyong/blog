<script setup lang="ts">
import navBar from '@/components/navBar.vue'
import Footer from '@/components/footer.vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleBg = useToggle(isDark)
</script>

<template>
  <navBar :toggleBg="toggleBg" :bgColor="isDark ? 'black' : 'white'" />
  <div class="py-[150px] px-10 sm:py-32 min-h-screen">
    <div class="mx-auto max-w-7xl px-6">
      <Suspense timeout="100">
        <router-view :bgColor="isDark" />
        <template #fallback>
          <h2 :class="[isDark ? 'text-[#e8b7b7]' : 'text-[#db6b6b]', 'text-4xl font-bold']">
            Please wait...
          </h2>
        </template>
      </Suspense>
    </div>
  </div>
  <Footer :bgColor="isDark ? 'black' : 'white'" />
</template>

<style>
html.dark {
  background-color: #363232;
  color: white;
}
article h3,
.code {
  font-family: 'Anonymous Pro', monospace;
}
</style>
