<script lang="ts">
  // import { RouterView } from 'vue-router';  // TODO: arrow navigators
</script>

<template>
  <div id="viewer-wrapper"
    class="h-full px-28 py-3 overflow-auto">
    <main id="viewer-main"
      class="p-8 overflow-auto">
      <div id="viewer-window"
        class="flex items-end justify-between">
        <h1 id="viewer-route-name"
          class="font-bold text-4xl text-slate-300">
          {{ this.$route.name.charAt(0).toUpperCase() + this.$route.name.slice(1) }}
        </h1>
        <h2 class="text-2xl text-slate-300">
          {{ this.$route.meta.desc.charAt(0).toUpperCase() + this.$route.meta.desc.slice(1) }}
        </h2>
      </div>
      <RouterView class="overflow-auto py-4"/>
    </main>
  </div>
</template>
