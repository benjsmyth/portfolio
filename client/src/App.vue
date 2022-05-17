<script setup lang="ts">
  import Card from './components/Card.vue'
  import Footer from './components/Footer.vue'
  import Navigator from './components/Navigator.vue'
  import Viewer from './components/Viewer.vue'
</script>

<!-- <script lang="ts">
  export default {
    inject: ['projects']
  }
</script> -->

<template>
  <div id="app-wrapper">
    <Navigator/>
    <Viewer/>
    <Footer/>
  </div>
</template>
