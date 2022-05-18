<script setup lang="ts">
  import Tag from '../components/Tag.vue'
</script>

<script lang="ts">
  export default {
    inject: ['tags']
  }
</script>

<template>
    <!-- Tags wrapper -->
    <div id="tags-wrapper">
      <Tag class="m-4 text-right" v-for="tag in tags"
          :key="tag.id"
          :keyword="tag.keyword"
      />
    </div>
</template>
