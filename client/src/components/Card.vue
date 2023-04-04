<script lang="ts">
  import { ArrowCircleRightIcon, ChevronRightIcon } from '@heroicons/vue/solid'
  import Tag from './Tag.vue'
  export default { props: ['head', 'body', 'tags'],
    methods: {
      flip(body: any, icon: any) {
        if (body.getAttribute('class') == 'h-8 overflow-auto py-1') {
          body.setAttribute('class', 'h-full overflow-auto py-1');
        }
        else { body.setAttribute('class', 'h-8 overflow-auto py-1'); }
        if (icon.getAttribute('class') == 'transition ease origin-center') {
          icon.setAttribute('class', 'transition ease origin-center rotate-90');
        }
        else { icon.setAttribute('class', 'transition ease origin-center'); }
      },
      action(event: any) {
        let body: any, icon: any
        if (event.target.tagName == 'DIV') {
          body = event.target.nextSibling
          icon = event.target.childNodes['1'].childNodes['0']
        }
        if (this.$route.name == 'Home') {
          // TODO: Router link to '/'
        }
        else if (this.$route.name != 'Contact') {
          this.flip(body, icon)
        }
      }
    },
    components: {
      ArrowCircleRightIcon,
      ChevronRightIcon,
      Tag
    }
  }
</script>

<template>
  <!-- Card -->
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
          <ArrowCircleRightIcon class="h-5 w-5" />
        </template>
        <template v-else-if="this.$route.name != 'Contact'">
          <ChevronRightIcon class="ease h-5 origin-center transition w-5"/>
        </template>
      </div>
    </div>
    <div class="font-serif h-8 overflow-auto py-1" v-html="body"></div>
  </div>
  <!---->
</template>
