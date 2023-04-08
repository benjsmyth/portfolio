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
        if (body.getAttribute('class') == 'h-8 overflow-auto py-1') {
          body.setAttribute('class', 'h-full overflow-auto py-1');
        }
        else {
          body.setAttribute('class', 'h-8 overflow-auto py-1');
        }
        if (icon.getAttribute('class') == 'ease h-5 origin-center transition w-5') {
          icon.setAttribute('class', 'ease h-5 origin-center rotate-90 transition w-5');
        }
        else {
          icon.setAttribute('class', 'ease h-5 origin-center transition w-5');
        }
      },
      action(event: any) {
        let body: any, icon: any;
        if (event.target.tagName == 'DIV') {
          body = event.target.nextSibling;
          icon = event.target.querySelector('#heroicon');
        }
        if (this.$route.name == 'Home') {
          // TODO: Router link to '/'
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
  <div class="bg-amber-50 border-l-8 border-amber-800 divide-amber-200 divide-y drop-shadow-md my-2 px-4 py-2 rounded-lg">
    <div @click="action" class="cursor-pointer flex justify-between">
      <h4 class="font-bold text-amber-800">
        {{ head }}
      </h4>
      <div class="flex gap-3 justify-between">
        <div class="flex gap-2 justify-between text-sm">
          <Tag v-for="tag in tags"
            :key="tag"
            :keyword="tag"
          />
        </div>
        <template v-if="this.$route.name == 'Home'">
          <div class="h-5 w-5" id="heroicon">
            <ArrowCircleRightIcon/>
          </div>
        </template>
        <template v-else-if="this.$route.name != 'Contact'">
          <div class="ease h-5 origin-center transition w-5" id="heroicon">
            <ChevronRightIcon/>
          </div>
        </template>
      </div>
    </div>
    <div class="font-serif h-8 overflow-auto py-1" v-html="body"></div>
  </div>
</template>
