<script lang="ts">
  import {
    SortAscendingIcon,
    SortDescendingIcon
  } from '@heroicons/vue/solid';
  // import { RouterView } from 'vue-router';
  export default {
    components: {
      SortAscendingIcon,
      SortDescendingIcon
    }
  };
</script>

<template>
  <div class="bg-zinc-700 border shadow-inner" id="viewer-wrapper">
    <main class="p-8">
      <div class="flex items-end justify-between">
        <h1 class="font-bold text-4xl text-amber-100">{{ this.$route.name }}</h1>
        <template v-if="this.$route.name == 'Projects'">
          <div class="divide-zinc-900 divide-x flex font-mono pb-1 justify-between text-zinc-200 text-sm" id="sort">
            <button class="px-2"><SortDescendingIcon class="h-5 w-5"/></button>
            <button class="px-2"><SortAscendingIcon class="h-5 w-5"/></button>
            <button class="px-2">Date</button>
            <button class="px-2">Language</button>
            <button class="px-2">Title</button>
          </div>
        </template>
        <h2 class="text-2xl text-amber-100">{{ this.$route.meta.desc }}</h2>
      </div>
      <hr class="border-dashed border-zinc-800"/>
      <RouterView class="overflow-auto py-4"/>
    </main>
  </div>
</template>
