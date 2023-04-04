<script lang="ts">
  import { RouterLink } from 'vue-router'
  import { SearchIcon } from '@heroicons/vue/solid'
  export default { components: {
    RouterLink,
    SearchIcon
  }}
</script>

<template>
  <div id="navigator-wrapper">
    <header>
      <!-- Navigation Menu -->
      <nav class="flex justify-between">
        <menu class="flex w-2/5">
          <RouterLink class="transition ease-in-out hover:bg-amber-900 hover:text-amber-100 p-3 px-4" to="/" exact>Home</RouterLink>
          <RouterLink class="transition ease-in-out hover:bg-amber-900 hover:text-amber-100 p-3" to="/about" exact>About</RouterLink>
          <RouterLink class="transition ease-in-out hover:bg-amber-900 hover:text-amber-100 p-3" to="/tags" exact>Tags</RouterLink>
          <RouterLink class="transition ease-in-out hover:bg-amber-900 hover:text-amber-100 p-3" to="/projects" exact>Projects</RouterLink>
          <RouterLink class="transition ease-in-out hover:bg-amber-900 hover:text-amber-100 p-3" to="/contact" exact>Contact</RouterLink>
        </menu>
        <!-- Search Bar -->
        <div class="w-2/5">
          <div class="flex gap-2 h-full justify-between p-2 w-full">
            <input class="border bg-amber-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-600 focus:transition font-mono rounded px-2 py-1 text-sm w-full" type="search" placeholder="phrase[, ...]*"/>
              <button class="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition ease-in-out hover:fill-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
                </svg>
            </button>
          </div>
        </div>
        <!---->
      </nav>
    </header>
    <!---->
  </div>
</template>

<style>
  nav a.router-link-exact-active {
    background: rgb(120 53 15);
    color: rgb(254 243 199);
  }
</style>
