<script lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <!-- Viewer -->
  <div id="viewer-wrapper">
    <main class="p-8">
        <div class="flex items-end justify-between">
          <h1 class="font-bold text-4xl text-amber-900">{{ this.$route.name }}</h1>
          <h2 class="text-2xl text-amber-800">{{ this.$route.meta.desc }}</h2>
        </div>
        <hr class="border-dashed border-amber-800"/>
        <RouterView class="py-4 mx-2"/>
    </main>
  </div>
</template>
