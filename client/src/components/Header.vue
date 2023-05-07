<!-- Header component -->

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { SearchIcon } from '@heroicons/vue/solid';
  import { defineComponent } from 'vue';
</script>

<script lang="ts">
  export default defineComponent({
    data() {
      return {
        searchQuery: ''
      }
    },
    methods: {
      searchSite(): void {
        this.$router.push({
          path: '/projects',
          query: { q: this.searchQuery
            .toLowerCase()
            .split(/[^\w]+/)
            .filter(Boolean)
          }
        });
      }
    },
    components: {
      RouterLink,
      SearchIcon
    }
  });
</script>

<template>
  <div id="header-wrapper">
    <header id="header-header">
      <nav id="header-nav"
        class="
          flex justify-between
        ">
        <menu id="header-menu"
          class="
            flex text-slate-400 w-2/5
          ">
          <RouterLink id="menu-home" to="/" :exact-active-class="
              'bg-slate-800 outline outline-1 outline-slate-500 text-slate-300'
            "
            class="
              ease-in-out p-2 px-3 transition hover:text-slate-300
            " exact>
            Home
          </RouterLink>
          <RouterLink id="menu-about" to="/about"
            :exact-active-class="
              'bg-slate-800 outline outline-1 outline-slate-500 text-slate-300'
            "
            class="
              ease-in-out p-2 px-3 transition hover:text-slate-300
            " exact>
            About
          </RouterLink>
          <RouterLink id="menu-tags" to="/tags"
            :exact-active-class="
              'bg-slate-800 outline outline-1 outline-slate-500 text-slate-300'
            "
            class="
              ease-in-out p-2 px-3 transition hover:text-slate-300
            " exact>
            Tags
          </RouterLink>
          <RouterLink id="menu-projects" to="/projects"
            :exact-active-class="
              'bg-slate-800 outline outline-1 outline-slate-500 text-slate-300'
            "
            class="
              ease-in-out p-2 px-3 transition hover:text-slate-300
            " exact>
            Projects
          </RouterLink>
          <RouterLink id="menu-contact" to="/contact"
            :exact-active-class="
              'bg-slate-800 outline outline-1 outline-slate-500 text-slate-300'
            "
            class="
              ease-in-out p-2 px-3 transition hover:text-slate-300
            " exact>
            Contact
          </RouterLink>
        </menu>
        <div id="header-search"
          class="w-1/3">
          <div id="search-tools" class="
              flex gap-2 justify-between hover:outline-2 outline outline-1 outline-slate-500 m-2 rounded-lg text-slate-500
            ">
            <input id="search-input" type="search-input" placeholder="Search" v-model.lazy.trim="searchQuery"
              @keyup.enter="searchSite"
              class="
                bg-slate-700 ease-in-out font-mono h-2/3 placeholder-slate-300/50 hover:placeholder-slate-300/75 outline-none px-3 py-1 rounded text-slate-300 text-sm transition w-full
              "/>
            <button id="search-button"
            @click="searchSite"
              class="
            ">
              <svg id="mag-glass"
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(148 163 184)"
                viewBox="0 0 20 20"
                class="
                  ease-in-out fill-slate-300/50 h-5 hover:fill-slate-300/75 transition w-8
                ">
                <path id="mag-glass-path"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="
                    M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z
                  "/>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
