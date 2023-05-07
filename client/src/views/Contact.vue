<!-- Contact view -->

<script setup lang="ts">
  import ContactCard from '../components/ContactCard.vue';
</script>

<template>
  <div id="contact-wrapper">
    <ContactCard
      head="Contact Form"
      body="Contact body"
    />
    <RouterLink id="contact-to-home" exact to="/home">
      <NavCard id="contact-home-card"
        head="Home"
        body="Go home"/>
    </RouterLink>
  </div>
</template>
