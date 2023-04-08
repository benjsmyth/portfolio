<script lang="ts">
  import { ExternalLinkIcon } from '@heroicons/vue/solid';
  export default { components: { ExternalLinkIcon } };
</script>

<template>
  <div id="footer-wrapper" class="text-amber-100">
    <footer class="flex justify-between pt-4 px-3 py-2 text-sm">
      <div class="flex gap-2 justify-between">
        <a class="transition ease-in-out hover:text-zinc-300" href="https://github.com/benjsmyth" target="_blank">GitHub</a>
        <ExternalLinkIcon class="place-self-center h-5 w-5"/>
        <span>|</span>
        <a class="transition ease-in-out hover:text-zinc-300" href="https://linkedin.com/benjsmyth" target="_blank">LinkedIn</a>
        <ExternalLinkIcon class="place-self-center h-5 w-5"/>
      </div>
      <span class="font-thin">2023 &copy; Ben J. Smyth</span>
    </footer>
  </div>
</template>
