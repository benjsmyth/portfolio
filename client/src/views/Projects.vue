<script setup lang="ts">
  import Card from '../components/Card.vue'
</script>

<script lang="ts">
  export default { inject: ['projects'] }
</script>

<template>
  <div class="space-y-8">
    <div id="projects-wrapper" class="gap-4 grid grid-cols-2">
      <Card v-for="project in projects"
        :key="project.id"
        :head="project.title"
        :body="project.content"
        :tags="project.tags"
      />
    </div>
  </div>
</template>
