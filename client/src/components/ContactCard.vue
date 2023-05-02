<script lang="ts">
  import { ArrowCircleRightIcon } from '@heroicons/vue/solid';
  export default {
    props: {
      head: null,  // Title and arrow icon
      body: null  // Embedded HTML content
    },
    components: {
      ArrowCircleRightIcon,
    }
  };
</script>
<template>
  <div id="contact-card-wrapper"
    class="
      bg-slate-700 cursor-pointer divide-slate-400 divide-y ease-in-out m-2 mb-4 drop-shadow outline outline-1 outline-slate-600 px-4 py-2 rounded-lg text-slate-300/85 transition
      hover:outline-2
    ">
    <div id="contact-card-header"
      class="flex justify-between">
      <h4 id="contact-card-header-title"
        v-html=head
        class="font-bold select-none">
      </h4>
      <ArrowCircleRightIcon class="h-5 w-5"/>
    </div>
    <div id="contact-card-body" v-html=body
      class="
        h-8 leading-6 overflow-auto py-1 scroll-smooth text-right text-slate-400 text-sm
      ">
    </div>
  </div>
</template>
