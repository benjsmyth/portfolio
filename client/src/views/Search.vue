<!-- Search view -->

<script setup lang="ts">
  import ProjectCard from '../components/ProjectCard.vue';
</script>

<script lang="ts">
  export default {
    // Composition
    inject: ['projects']
  };
</script>

<template>
  <div id="search-wrapper"
    class="space-y-8">
    <div id="search-view">
      <ProjectCard v-for="project in projects"
        :key="project.id"
        :head="project.title"
        :body="project.content"
        :tags="project.tags"/>
    </div>
  </div>
</template>
