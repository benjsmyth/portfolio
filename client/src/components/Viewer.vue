<!--
  * File    : Viewer component
  * Author  : Ben J. Smyth
  * Date    : May 7, 2023
 -->

<script setup lang="ts">
  import { defineComponent } from 'vue';
</script>

<script lang="ts">
  export default defineComponent({
    // Options: State
    computed: {
      routeDesc(): any {
        return this.$route.meta.desc;
      },
      routeName(): any {
        return this.$route.name;
      }
    },
    methods: {
      formatText(text: string) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
    }
  });
</script>

<template>
  <div id="viewer-wrapper" class="
      h-full overflow-auto px-28 py-3
    ">
    <main id="viewer-main" class="
        overflow-auto p-8
      ">
      <div id="viewer-window" class="
          flex items-end justify-between
        ">
        <h1 id="viewer-route-name" class="font-bold text-4xl text-slate-300">
          {{ formatText(routeName) }}
        </h1>
        <h2 class="text-2xl text-slate-300">
          {{ formatText(routeDesc) }}
        </h2>
      </div>
      <RouterView class="
        overflow-auto py-4
      "/>
    </main>
  </div>
</template>
