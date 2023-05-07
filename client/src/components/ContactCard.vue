<!--
  * File    : Contact card component
  * Author  : Ben J. Smyth
  * Date    : May 7, 2023
 -->

<script setup lang="ts">
  import { ArrowCircleRightIcon } from '@heroicons/vue/solid';
  import { defineComponent } from 'vue';
</script>

<script lang="ts">
  export default defineComponent({
    // Options: State
    props: {
      head: HTMLElement,
      body: HTMLElement
    },
    // Options: Misc
    components: {
      ArrowCircleRightIcon
    }
  });
</script>

<template>
  <div id="contact-card-wrapper" class="
      bg-slate-700 cursor-pointer divide-slate-400 divide-y drop-shadow ease-in-out
      hover:outline-2 m-2 mb-4 outline outline-1 outline-slate-600 px-4 py-2
      rounded-lg text-slate-300/85 transition
    ">
    <div id="contact-card-header" class="
        flex justify-between
      ">
      <h4 id="contact-card-header-title" v-html=head class="
        font-bold select-none
      ">
      </h4>
      <ArrowCircleRightIcon class="
        h-5 w-5
      "/>
    </div>
    <div id="contact-card-body" v-html=body class="
      h-8 leading-6 overflow-auto py-1 scroll-smooth text-right text-slate-400 text-sm
    ">
    </div>
  </div>
</template>
