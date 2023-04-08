<script setup lang="ts">
  import Footer from './components/Footer.vue'
  import Navigator from './components/Navigator.vue'
  // import Profile from './components/Profile.vue'
  import Viewer from './components/Viewer.vue'
</script>

<template>
  <div class="h-full" id="app-wrapper">
    <div class="flex h-full justify-between">
      <!-- <Profile class="basis-1/12 font-mono shadow-lg text-amber-900 text-center"/> -->
      <aside class="basis-1/12 border-amber-900 border-none border-r-4 font-mono space-y-4 h-full p-6 shadow">
        <div>
          <img class="rounded-full" src="./assets/sound-waves-svgrepo-com.svg"/>
        </div>
        <div class="h-5/6 w-full">
          <p class="text-center">
            Hi! My name is Ben, and this is my professional portfolio.
          </p>
        </div>
      </aside>
      <div class="basis-11/12 h-full">
        <Navigator class="bg-amber-100 border-b-2 border-amber-900 shadow sticky top-0 z-10"/>
        <Viewer class="border-amber-900 px-4 h-full overflow-auto z-0"/>
      </div>
      <aside class="border-amber-900 border-none border-l-4 h-full p-4 shadow" id="scrollbar"></aside>
    </div>
    <Footer class="bg-amber-100 border-t-2 border-amber-900 pb-2 px-4 shadow-lg sticky bottom-0"/>
  </div>
</template>
