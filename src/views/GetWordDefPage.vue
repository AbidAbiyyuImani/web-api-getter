<script setup>
import { ref, onMounted } from "vue";
let DataWordDefinitions = ref([]);
let param = ref("");

const getData = async (param) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${param}`
  );
  const data = await response.json();
  DataWordDefinitions.value = data;
};
</script>
<template>
  <div class="px-4">
    <h1 class="text-3xl md:text-4xl lg:text-5xl text-center mb-5">
      Search Word Definitions
    </h1>
    <form action="#" class="flex justify-center mb-3">
      <input
        type="text"
        v-model="param"
        placeholder="Enter a word"
        autofocus
        class="w-full border border-indigo-500 rounded-l-full px-5 py-2 focus:outline-none text-lg"
      />
      <button
        @click="getData(param)"
        class="rounded-r-full bg-indigo-500 text-white px-3 py-2 text-lg"
      >
        Search
      </button>
    </form>
    <div
      v-if="DataWordDefinitions.length > 0"
      class="flex flex-col items-center"
    >
      <h1 class="font-semibold text-2xl">
        {{ DataWordDefinitions[0].word }} -
        {{
          DataWordDefinitions[0].phonetics[1].text
            ? DataWordDefinitions[0].phonetics[1].text
            : DataWordDefinitions[0].phonetics[0].text
        }}
      </h1>
      <p class="text-muted">
        {{ DataWordDefinitions[0].meanings[0].definitions[0].definition }}
      </p>
    </div>
    <h1
      v-show="DataWordDefinitions"
      v-else
      class="font-semibold text-center text-lg sm:text-xl lg:text-2xl"
    >
      Make sure that you input the correct word!
    </h1>
  </div>
</template>
