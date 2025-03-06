<script setup>
import { ref } from "vue";
const ourMenu = ref([
  {
    title: "Get Word Definitions (english)",
    author: "Free Dictionary API",
    description:
      "Checking single word definitions in English.",
    link: "/get-word-def",
  },
]);
</script>
<template>
  <div class="px-4">
    <h1 class="text-3xl md:text-4xl lg:text-5xl text-center mb-5">
      Welcome to web API getter
    </h1>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <RouterLink
        v-for="menu in ourMenu"
        :to="{ path: menu.link }"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
          >test</span
        >

        <div class="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
              {{ menu.title }}
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600">
              By {{ menu.author }}
            </p>
          </div>
        </div>

        <div class="mt-4">
          <p class="text-sm text-pretty text-gray-500">
            {{ menu.description }}
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
