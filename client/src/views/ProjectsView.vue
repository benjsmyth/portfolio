<script setup lang="ts">
  import Card from '../components/Card.vue'
</script>

<script lang="ts">
  export default {
    inject: ['projects']
  }
</script>

<template>
  <div id="projects-wrapper">
    <Card v-for="project in projects"
      :key="project.title"
      :head="project.title"
      :body="project.content"
    />
  </div>
</template>
