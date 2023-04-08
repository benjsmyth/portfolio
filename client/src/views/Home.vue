<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Card from '../components/Card.vue'
</script>

<template>
  <div id="home-wrapper" class="gap-4 grid grid-cols-2">
    <Card
      head="About"
      body="Read about me"
    />
    <Card
      head="Tags"
      body="Browse relevant topics"
    />
    <Card
      head="Projects"
      body="Discover my work"
    />
    <Card
      head="Contact"
      body="Get in touch"
    />
  </div>
</template>
