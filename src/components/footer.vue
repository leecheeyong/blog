<script setup lang="ts">
defineProps({
  bgColor: {
    type: String,
    required: true
  }
})
const date: number = new Date().getFullYear()
</script>
<template>
  <footer :class="[bgColor == 'black' ? 'bg-[#363232]' : 'bg-white', 'w-full bottom-0 pb-6']">
    <div class="text-[#7c7b7b] container mx-auto px-4">
      <hr
        :class="[bgColor == 'black' ? 'border-[#7c7b7b]' : 'border-gray-200', 'mb-6 border-b-1']"
      />
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4">
          <div class="text-sm font-semibold py-1">
            Copyright © {{ date }}
            <a class="text-sm font-semibold py-1" href="https://joe.js.org" target="_blank"
              >Chee Yong Lee</a
            >
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul class="flex flex-wrap list-none md:justify-end justify-center">
            <li>
              <a
                class="text-sm block py-1 px-3"
                href="https://github.com/leecheeyong/blog"
                target="_blank"
                >Source Code</a
              >
            </li>
            <li>
              <a
                class="text-sm block py-1 px-3"
                href="https://github.com/leecheeyong"
                target="_blank"
                >Github</a
              >
            </li>
            <li>
              <a
                class="text-sm block py-1 px-3"
                href="https://paypal.me/cheeyonglee"
                target="_blank"
                >Donate</a
              >
            </li>
            <li>
              <a
                class="text-sm block py-1 px-3"
                href="https://github.com/leecheeyong/blog/blob/main/LICENSE"
                target="_blank"
                >MIT License</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a:hover {
  color: #e8b7b7;
}
</style>
