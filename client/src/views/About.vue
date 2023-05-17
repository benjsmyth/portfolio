<script setup lang="ts">
  import { aboutKey } from '@/keys';
  import { inject } from 'vue';
  import FlipCard from '@/components/FlipCard.vue';
  const abouts = inject(aboutKey, []);
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
