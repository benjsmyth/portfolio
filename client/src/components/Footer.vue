<script lang="ts">
  import { ExternalLinkIcon } from '@heroicons/vue/solid'
  export default { components: { ExternalLinkIcon } }
</script>

<template>
  <div id="footer-wrapper">
    <footer class="flex justify-between p-3">
      <div class="flex gap-1 justify-between">
        <a class="transition ease-in-out hover:text-amber-900" href="https://github.com/benjsmyth" target="_blank">GitHub</a>
        <ExternalLinkIcon class="place-self-center h-5 w-5"/>
      </div>
      <span class="font-thin">Built by me.</span>
    </footer>
  </div>
</template>
