<script lang="ts">
  import { ExternalLinkIcon } from '@heroicons/vue/solid';
  export default {
    components: {
      ExternalLinkIcon
    }
  };
</script>

<template>
  <div id="footer-wrapper"
    class="pb-2 outline outline-1 shadow-lg sticky bottom-0">
    <footer class="flex justify-between px-3 pt-2 text-sm text-slate-400">
      <a class="cursor-pointer ease-in-out flex gap-1 justify-between transition hover:text-slate-300"
        href="https://github.com/benjsmyth" target="_blank">GitHub
        <ExternalLinkIcon class="place-self-center h-5 w-5"/>
      </a>
      <span class="font-thin">Ben J. Smyth &copy; 2023</span>
    </footer>
  </div>
</template>
