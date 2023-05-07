<!-- Tag component -->

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    props: [
      'id',
      'keyword'
    ],
    methods: {
      searchSite(): void {
        this.$router.push({
          path: '/projects',
          query: {
            q: this.keyword.toLowerCase().split(/[^\w]+/).filter(Boolean)
          }
        });
      }
    }
  });
</script>

<template>
  <div id="tag-wrapper" @click="searchSite" class="
      draggable drop-shadow ease-in-out flex items-end m-3 outline outline-1 outline-slate-600 p-1 rounded-lg text-sm transition
      hover:cursor-pointer hover:outline-2
    ">
    <svg id="hashtag-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="
        h-5 fill-slate-500 w-5
      ">
      <path id="hashtag-icon-path" clip-rule="evenodd" fill-rule="evenodd" d="
        M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z
      "/>
    </svg>
    <span id="tag-keyword" class="
        font-bold font-mono
      ">
      {{ keyword }}
    </span>
  </div>
</template>
