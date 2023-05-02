<!-- Home view -->

<script setup lang="ts">
  import NavCard from '../components/NavCard.vue';
  import { RouterLink } from 'vue-router';
  import { CodeIcon, HashtagIcon, InformationCircleIcon, MailOpenIcon } from '@heroicons/vue/solid';
</script>

<template>
  <div id="home-wrapper" class="gap-3 grid grid-cols-3">
    <RouterLink id="home-to-about" class="col-span-1" exact to="/about">
      <NavCard id="home-nav-about" head="About" body="About me">
        <InformationCircleIcon id="information-circle-icon" class="h-5 w-5"/>
      </NavCard>
    </RouterLink>
    <RouterLink id="home-to-tags" class="col-span-2" exact to="/tags">
      <NavCard id="home-nav-tags" head="Tags" body="Related topics">
        <HashtagIcon id="hashtag-icon" class="h-5 w-5"/>
      </NavCard>
    </RouterLink>
    <RouterLink id="home-to-projects" class="col-span-2" exact to="/projects">
      <NavCard id="home-nav-projects" head="Projects" body="My work">
        <CodeIcon id="code-icon" class="h-5 w-5"/>
      </NavCard>
    </RouterLink>
    <RouterLink id="home-to-contact" class="col-span-1" exact to="/contact">
      <NavCard id="home-nav-contact" head="Contact" body="Get in touch">
        <MailOpenIcon id="mail-open-icon" class="h-5 w-5"/>
      </NavCard>
    </RouterLink>
  </div>
</template>
