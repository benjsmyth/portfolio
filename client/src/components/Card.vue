<script lang="ts">
  import {
    ArrowCircleRightIcon,
    ChevronRightIcon
  } from '@heroicons/vue/solid';
  import Tag from './Tag.vue';
  export default {
    props: [
      'head',
      'body',
      'tags'
    ],
    methods: {
      flip(body: any, icon: any) {
        if (body.getAttribute('class') == 'font-serif h-8 overflow-auto scroll-smooth py-1') {
          body.setAttribute('class', 'font-serif h-full overflow-auto scroll-smooth py-1');
        }
        else {
          body.setAttribute('class', 'font-serif h-8 overflow-auto scroll-smooth py-1');
        }
        if (icon.getAttribute('class') == 'ease h-5 origin-center transition w-5') {
          icon.setAttribute('class', 'ease h-5 origin-center rotate-90 transition w-5');
        }
        else {
          icon.setAttribute('class', 'ease h-5 origin-center transition w-5');
        }
      },
      action(event: any) {
        // TODO: Define Tag routing in its own component
        //  so that it can be called here
        let
          body: any,
          elem: any = event.target,
          icon: any;
        const getElemId: any = (elem: any) => {
            return elem.getAttribute('id');
        }
        let elemId: any = getElemId(elem);
        if (elemId != 'head') {
          while (elemId != 'head') {
            if (elemId === 'tag') {
              // TODO: Define Tag routing in its own component
              console.log('TODO: Define Tag routing in its own component');
              return;
            }
            elem = elem.parentNode;
            elemId = getElemId(elem);
          }
        }
        body = elem.nextSibling;
        icon = elem.querySelector('#chevron-right-icon');
        if (this.$route.name === 'Home') {
          // TODO: Router link to '/'
          console.log("/ TODO: Router link to '/'");
        }
        else if (this.$route.name != 'Contact') {
          this.flip(body, icon);
        }
      }
    },
    components: {
      ArrowCircleRightIcon,
      ChevronRightIcon,
      Tag
    }
  };
</script>

<template>
  <div
    class="bg-amber-50 border-l-8 border-amber-800
      divide-amber-200 divide-y drop-shadow-md
      my-2 px-4 py-2 rounded-lg"
    id="card">
    <div @click="action"
      class="cursor-pointer flex justify-between"
      id="head">
      <h4
        class="font-bold select-none text-amber-800"
        id="title">
        {{ head }}
      </h4>
      <div
        class="flex gap-3 justify-between"
        id="info">
        <div
          class="flex gap-2 justify-between text-sm"
          id="tags">
          <Tag id="tag" v-for="tag in tags"
            :key="tag"
            :keyword="tag"/>
        </div>
        <template v-if="this.$route.name == 'Home'">
          <div
          class="h-5 w-5"
          id="arrow-circle-right-icon">
            <ArrowCircleRightIcon/>
          </div>
        </template>
        <template v-else-if="this.$route.name != 'Contact'">
          <div
          class="ease h-5 origin-center transition w-5"
          id="chevron-right-icon">
            <ChevronRightIcon/>
          </div>
        </template>
      </div>
    </div>
    <div
      class="font-serif h-8 overflow-auto py-1 scroll-smooth"
      id="body"
      v-html="body">
    </div>
  </div>
</template>
