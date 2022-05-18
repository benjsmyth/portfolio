<script setup lang="ts">
  import Card from '../components/Card.vue'
</script>

<script lang="ts">
  export default {
    inject: ['briefs']
  }
</script>

<template>
  <div id="about-wrapper">
    <Card v-for="brief in briefs"
      :key="brief.id"
      :head="brief.topic"
      :body="brief.desc"
    />
  </div>
</template>
