<!--
  * File    : Footer component
  * Author  : Ben J. Smyth
  * Date    : May 7, 2023
 -->

<script setup lang="ts">
  import { ExternalLinkIcon } from '@heroicons/vue/solid';
  import { defineComponent } from 'vue';
</script>

<script lang="ts">
  export default defineComponent({
    // Options: Misc
    components: {
      ExternalLinkIcon
    }
  });
</script>

<template>
  <div id="footer-wrapper" class="
      bottom-0 outline outline-1 pb-2 shadow-lg sticky
    ">
    <footer id="footer-footer" class="
        flex justify-between pt-2 px-3 text-slate-400 text-sm
      ">
      <a id="github-link" href="https://github.com/benjsmyth" target="_blank" class="
          cursor-pointer ease-in-out flex gap-1 hover:text-slate-300 justify-between transition
        "
        >GitHub
        <ExternalLinkIcon id="external-link-icon" class="
          h-5 place-self-center w-5
        "/>
      </a>
      <span class="font-thin">Ben J. Smyth &copy; 2023</span>
    </footer>
  </div>
</template>
