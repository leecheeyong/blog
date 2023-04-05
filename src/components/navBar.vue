<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
defineProps({
  toggleBg: {
    type: Function,
    required: true
  },
  bgColor: {
    type: String,
    required: true
  }
})

type Navigation = {
  name: string
  href: string
  current: boolean
  self: boolean
}

const navigation: Navigation[] = [
  { name: 'Home', href: 'https://joe.js.org', current: false, self: false },
  { name: 'Blog', href: '/', current: true, self: true },
  { name: 'Github', href: 'https://github.com/leecheeyong', current: false, self: false },
  { name: 'Twitter', href: 'https://twitter.com/itscheeyong', current: false, self: false }
]
</script>
<template>
  <Disclosure
    as="nav"
    :class="[
      bgColor == 'black' ? 'absolute min-w-full bg-[#363232]' : 'absolute min-w-full bg-white'
    ]"
    v-slot="{ open }"
  >
    <div class="mx-auto px-2 sm:px-6 lg:px-10 py-1">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            :class="[
              bgColor == 'black'
                ? 'text-gray-300 hover:bg-gray-600'
                : 'text-gray-600 hover:bg-gray-200',
              'inline-flex items-center justify-center rounded-md p-2'
            ]"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="https://www.joelee.works/assets/joelee.jpg"
              style="border-radius: 100%; width: 100%"
              alt="Joe Lee's Avatar"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :target="item.self ? '_self' : '_blank'"
                :href="item.href"
                :class="[
                  item.current
                    ? bgColor == 'black'
                      ? 'bg-gray-700 text-white'
                      : 'bg-gray-300 text-gray-900'
                    : bgColor == 'black'
                    ? 'text-gray-100 hover:bg-gray-600 hover:text-white'
                    : 'text-gray-500 hover:bg-gray-200 hover:text-gray-700',
                  'rounded-md px-3 py-2 text-sm font-medium'
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            type="button"
            @click="() => toggleBg()"
            :class="[
              bgColor == 'black'
                ? 'text-gray-300 hover:bg-gray-600'
                : 'text-gray-600 hover:bg-gray-200',
              'rounded-full p-[10px]'
            ]"
          >
            <span class="sr-only">Toggle Background Color</span>
            <SunIcon v-if="bgColor == 'black'" class="h-6 w-6" aria-hidden="true" />
            <MoonIcon v-else class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :target="[item.self ? '_self' : '_blank']"
          :class="[
            item.current
              ? bgColor == 'black'
                ? 'bg-gray-700 text-white'
                : 'bg-gray-300 text-gray-900'
              : bgColor == 'black'
              ? 'text-gray-300 hover:bg-gray-600 hover:text-white'
              : 'text-gray-500 hover:bg-gray-200 hover:text-gray-700',
            'block rounded-md px-3 py-2 text-base font-medium'
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
