<!-- Application component -->

<script setup lang="ts">
  import Header from './components/Header.vue';
  import Viewer from './components/Viewer.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app-wrapper"
    class="h-full text-slate-300">
    <!-- TODO: Turn into slots -->
    <Header id="app-header"
      class="bg-slate-700 outline outline-1 outline-slate-500"/>
    <Viewer id="app-viewer"
      class="bg-slate-800"/>
    <Footer id="app-footer"
      class="bg-slate-900 outline outline-1 outline-slate-500"/>
  </div>
</template>
