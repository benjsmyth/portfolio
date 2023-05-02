<!-- Flip card component -->

<script lang="ts">
  import { ChevronRightIcon } from '@heroicons/vue/solid';
  export default {
    props: {
      head: null,
      body: null,
    },
    methods: {
      flipCard(event: MouseEvent) {
        let elem: EventTarget = event.target;
        while (elem.getAttribute('id') != 'card-wrapper') {  // Defer to #card-wrapper
          elem = elem.parentNode;  // Climb DOM tree
        }
        this.animateFlip(  // Call flip animation
          elem.querySelector('#card-body'),
          elem.querySelector('#chevron-right-icon')
        );
      },
      animateFlip(body: HTMLBodyElement, icon: HTMLOrSVGElement) {
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
    components: {
      ChevronRightIcon,
    },
  };
</script>

<template>
  <div id="card-wrapper" @click.stop.prevent="flipCard"
    class="
      bg-slate-700 cursor-pointer divide-slate-400 divide-y ease-in-out m-2 mb-4 drop-shadow outline outline-1 outline-slate-600 px-4 py-2 rounded-lg select-none text-slate-300/85 transition
      hover:outline-2
    ">
    <div id="card-header"
      class="flex justify-between">
      <h4 id="card-header-title"
        v-html="head"
        class="font-bold select-none">
      </h4>
      <div id="chevron-right-icon"
        class="
          ease h-5 origin-center transition w-5
        ">
        <ChevronRightIcon/>
      </div>
    </div>
    <div id="card-body"
      v-html="body"
      class="
        h-8 indent-3 leading-6 overflow-hidden py-1 text-justify text-slate-400 text-sm
      ">
    </div>
  </div>
</template>
