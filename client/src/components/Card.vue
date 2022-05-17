<script lang="ts">
  export default {
    methods: {
      // Flip arrow icon
      flip(body: any, icon: any) {
        if (body.getAttribute('class') == 'h-8 overflow-auto py-1') {
          body.setAttribute('class', 'h-full overflow-auto py-1');
        }
        else {
          body.setAttribute('class', 'h-8 overflow-auto py-1');
        }
        if (icon.getAttribute('class') == 'transition ease origin-center') {
          icon.setAttribute('class', 'transition ease origin-center rotate-90');
        }
        else {
          icon.setAttribute('class', 'transition ease origin-center');
        }
      },
      // Clickable action event
      action(event: any) {
        let body: any, icon: any
        if (event.target.tagName == 'DIV') {
          body = event.target.nextSibling
          icon = event.target.childNodes['1'].childNodes['0']
        }
        if (this.$route.name == 'Home') {
          // ... RouterLink
        }
        else if (this.$route.name != 'Contact') {
          this.flip(body, icon)
        }
      }
    },
    props: [
      'head',
      'body'
    ]
  }
</script>

<template>
  <!-- Card -->
  <div class="bg-amber-50 border-l-8 border-amber-800 divide-amber-100 divide-y drop-shadow-md my-2 mx-4 px-4 py-2 rounded-lg">
    <div @click="action" class="cursor-pointer flex justify-between">
      <h3 class="font-bold text-amber-800">
        {{ head }}
      </h3>
      <template v-if="this.$route.name == 'Home'">
        <div class="pt-1">
          <img class="origin-center -rotate-90" height="10" width="10" src="./icons/arrow-right.svg"/>
        </div>
      </template>
      <template v-else-if="this.$route.name != 'Contact'">
        <div class="pt-1">
          <img class="transition ease origin-center" height="10" width="10" src="./icons/arrow-right.svg"/>
        </div>
      </template>
    </div>
    <div class="h-8 overflow-auto py-1" v-html="body"></div>
  </div>
</template>
