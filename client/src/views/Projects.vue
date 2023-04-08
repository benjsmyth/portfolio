<script setup lang="ts">
  import Card from '../components/Card.vue'
</script>

<script lang="ts">
  export default { inject: ['projects'] }
</script>

<template>
  <div class="space-y-8">
    <div id="projects-wrapper">
      <Card v-for="project in projects"
        :key="project.id"
        :head="project.title"
        :body="project.content"
        :tags="project.tags"
      />
    </div>
    <div class="p-8 text-center">
      <span class="font-bold font-mono">Looks like you've reached the end ... :(</span>
    </div>
  </div>
</template>
