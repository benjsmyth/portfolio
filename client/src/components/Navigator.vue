<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Navigator -->
  <div id="navigator-wrapper">
    <header>
      <nav class="flex justify-between p-2">
        <!-- Router menu -->
        <menu class="flex justify-between w-2/5">
            <!-- Home -->
            <div class="transition ease-in-out hover:text-amber-900 px-2 py-1">
                <RouterLink to="/">Home</RouterLink>
            </div>
            <!-- About -->
            <div class="transition ease-in-out hover:text-amber-900 px-2 py-1">
                <RouterLink to="/about">About</RouterLink>
            </div>
            <!-- Projects -->
            <div class="transition ease-in-out hover:text-amber-900 px-2 py-1">
                <RouterLink to="/projects">Projects</RouterLink>
            </div>
            <!-- Contact -->
            <div class="transition ease-in-out hover:text-amber-900 px-2 py-1">
                <RouterLink to="/contact">Contact</RouterLink>
            </div>
        </menu>
        <!-- Search bar -->
        <div class="flex gap-1 justify-between w-2/5">
            <input class="border bg-amber-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-900 focus:transition font-mono rounded px-2 py-1 text-sm w-full" type="search" placeholder="key-word|keyword[, ...]*"/>
            <button class="rounded transition ease-in-out hover:text-amber-900 px-2 py-1">Search</button>
        </div>
      </nav>
    </header>
  </div>
</template>
