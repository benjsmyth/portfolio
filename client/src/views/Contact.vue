<script lang="ts">
  import ContactForm from '@/components/ContactForm.vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: {
      ContactForm
    }
  });
</script>

<template>
  <div class="contact-wrapper">
    <ContactForm/>
  </div>
</template>
