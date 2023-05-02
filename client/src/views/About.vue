<!-- About view -->

<script setup lang="ts">
  import FlipCard from '../components/FlipCard.vue';
  import { AcademicCapIcon } from '@heroicons/vue/solid';
</script>

<script lang="ts">
  export default {
    inject: ['abouts']
  };
</script>

<template>
  <div id="about-wrapper">
    <FlipCard v-for="about in abouts"
      :key="about.id"
      :head="about.topic"
      :body="about.content"
    />
  </div>
</template>
