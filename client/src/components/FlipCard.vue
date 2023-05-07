<!--
  * File    : Flip card component
  * Author  : Ben J. Smyth
  * Date    : May 7, 2023
 -->

<script setup lang="ts">
  import { ChevronRightIcon } from '@heroicons/vue/solid';
  import { defineComponent } from 'vue';
</script>

<script lang="ts">
  export default defineComponent({
    // Options: State
    props: {
      head: HTMLElement,
      body: HTMLElement
    },
    methods: {
      flipCard(event: MouseEvent): void {
        let elem: any = event.target; while (elem.getAttribute('id') != "card-wrapper") {
          elem = elem.parentNode;
        };
        this.animateFlip(
          elem.querySelector('#card-body'),
          elem.querySelector('#chevron-right-icon')
        );
      },
      animateFlip(body: HTMLBodyElement, icon: HTMLElement) {
        if (body.getAttribute('class') ===  // Expand/collapse body
          'h-8 indent-3 leading-6 overflow-hidden py-1 text-justify text-slate-400 text-sm') {
            body.setAttribute('class',
              'h-full indent-3 leading-6 overflow-hidden py-1 scroll-smooth row-span-2 text-justify text-slate-400 text-sm'
            );
          }
        else {
          body.setAttribute(
            'class', 'h-8 indent-3 leading-6 overflow-hidden py-1 text-justify text-slate-400 text-sm'
          );
        }
        if (icon.getAttribute('class') ===  // Rotate arrow icon
          'ease h-5 origin-center transition w-5') {
            icon.setAttribute(
              'class', 'ease h-5 origin-center rotate-90 transition w-5'
            );
          }
        else {
          icon.setAttribute(
            'class', 'ease h-5 origin-center transition w-5'
          );
        }
      },
    },
    // Options: Misc
    components: {
      ChevronRightIcon
    }
  });
</script>

<template>
  <div id="card-wrapper" @click.stop.prevent="flipCard" class="
      bg-slate-700 cursor-pointer divide-slate-400 divide-y drop-shadow ease-in-out
      hover:outline-2 m-2 mb-4 outline outline-1 outline-slate-600 px-4 py-2
      rounded-lg select-none text-slate-300/85 transition
    ">
    <div id="card-header" class="
        flex justify-between
      ">
      <h4 id="card-header-title" v-html="head" class="
        font-bold select-none
      ">
      </h4>
      <div id="chevron-right-icon" class="
          ease h-5 origin-center transition w-5
        ">
        <ChevronRightIcon/>
      </div>
    </div>
    <div id="card-body" v-html="body" class="
      h-8 indent-3 leading-6 overflow-hidden py-1 text-justify text-slate-400 text-sm
    ">
    </div>
  </div>
</template>
