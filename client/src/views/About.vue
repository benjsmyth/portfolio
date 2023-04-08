<script setup lang="ts">
  import Card from '../components/Card.vue'
</script>

<script lang="ts">
  export default { inject: ['briefs'] }
</script>

<template>
  <div id="about-wrapper" class="gap-4 grid grid-cols-2">
    <Card v-for="brief in briefs"
      :key="brief.id"
      :head="brief.topic"
      :body="brief.content"
    />
  </div>
</template>
