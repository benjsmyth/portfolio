<!--
 * File:    `Tags` view component
 * Author:  Ben J. Smyth
 * Date:    May 7, 2023
-->

<script setup lang="ts">
  import { defineComponent, inject } from 'vue'
  import { tagKey } from '../keys';
  import Tag from '../components/Tag.vue';
  const tags = inject(tagKey, []);
</script>

<template>
  <div id="tags-wrapper">
    <div id="tags-view"
      class="gap-2 grid grid-cols-4">
      <Tag v-for="tag in tags"
        :key="tag.id"
        :keyword="tag.keyword"
      />
    </div>
    <div id="tags-usage"
      class="p-32 space-y-3 text-lg text-middle text-center text-slate-400">
      <p id="how-to-search">
        Search for tags like
        <span id="search-example"
          class="round-lg bg-slate-600 font-mono text-slate-300">
            django, vue-js, tailwind css
          </span>.
      </p>
      <p id="unnecessary-hashtag">
        You can include the
        <span id="tag-symbol" class=" round-lg bg-slate-600 font-mono text-slate-300 ">#</span>
          symbol, but you don't have to!
      </p>
    </div>
  </div>
</template>
