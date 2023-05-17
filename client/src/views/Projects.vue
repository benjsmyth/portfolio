<script lang="ts">
  import { projectKey }
    from '@/keys';
  import { defineComponent, inject }
    from 'vue';
  import { CalendarIcon, SortAscendingIcon, SortDescendingIcon }
    from '@heroicons/vue/solid';
  import FlipCard
    from '@/components/FlipCard.vue';
  /*
  ** When "integrating with Composition-API-based code in an Options API component",
  ** use `setup()` https://vuejs.org/api/composition-api-setup.html.
  //
  ** To allow type inference, we use symbolic injection keys.
  ** But this needs to be done in a setup context,
  ** and the reference to `projects` in `filteredProjects`
  ** must reside in the same script. As an exception,
  ** we remove `script setup` and use `setup()` instead.
  */
  export default defineComponent({
    // Composition: Setup
    setup(): any {
      const projects: any[] = inject(projectKey, []); return {
        projects
      }
    },
    // Options: State
    data() {
      return {
        activeClass:
          "cursor-default ease-in-out bg-slate-700 px-2 py-1 text-slate-300 transition w-full",
        ascendingClass:
          "cursor-default ease-in-out bg-slate-700 px-2 py-1 text-slate-300 rounded-l-lg transition w-full",
        dateClass:
          "ease-in-out bg-slate-700 hover:text-slate-300 outline outline-1 outline-slate-600 px-2 py-1 rounded-r-lg text-slate-300 transition w-full",
        inactiveClass:
          "ease-in-out hover:text-slate-300 px-2 py-1 transition w-full",
        isAscending: true,
        isByTitle: true
      }
    },
    computed: {
      filteredProjects(): any[] {
        const searchQuery = this.$route.query.q
        let filteredProjects: any[] = (searchQuery != null && searchQuery.length > 0)
          ? this.projects.filter((project: any) => { for (const searchTag of searchQuery)
              if (project.tags.includes(searchTag)) return project;
            })
          : this.projects;
        if (this.isAscending) {
          if (this.isByTitle) {
            filteredProjects.sort((a: any, b: any) => a.title.localeCompare(b.title));
          } else {
            filteredProjects.sort((a: any, b: any) => a.date.localeCompare(b.date));
          }
        } else {
          if (this.isByTitle) {
            filteredProjects.sort((a: any, b: any) => b.title.localeCompare(a.title))
          } else {
            filteredProjects.sort((a: any, b: any) => b.date.localeCompare(a.date));
          }
        }
        return filteredProjects;
      }
    },
    methods: {
      sortAscending() {
        this.isAscending = true;
      },
      sortDescending() {
        this.isAscending = false;
      },
      sortDate() {
        this.isByTitle = this.isByTitle ? false : true;
      }
    },
    // Options: Misc
    components: {
      CalendarIcon,
      FlipCard,
      SortAscendingIcon,
      SortDescendingIcon
    }
  });
</script>

<template>
  <div id="projects-wrapper"
    class="
      overflow-hidden space-y-4
    ">
    <div id="organizing-tools"
      class="
        flex justify-around outline outline-1 outline-slate-600 mx-auto mb-5 rounded-lg text-slate-400 text-sm w-1/6
      ">
      <button id="sort-ascending-button" @click="sortAscending" :class="[
          isAscending ? ascendingClass : inactiveClass
        ]">
        <SortAscendingIcon id="sort-ascending-icon"
          class="
            h-4 mx-auto w-4
          "/>
      </button>
      <button id="sort-descending-button" @click="sortDescending" :class="[
          !isAscending ? activeClass : inactiveClass
        ]"
        class="
          border-x border-slate-600
        ">
        <SortDescendingIcon id="sort-descending-icon"
          class="
            h-4 mx-auto w-4
          "/>
      </button>
      <button id="order-date-button" @click="sortDate" :class="[
          !isByTitle ? dateClass : inactiveClass
        ]"
        class="
          rounded-r-lg
        ">
        <CalendarIcon id="calendar-icon"
          class="
            h-4 mx-auto w-4
          "/>
      </button>
    </div>
    <TransitionGroup name="list" tag="flip-card" appear>
      <FlipCard v-for="project in filteredProjects"
        :key="project.id"
        :head="project.title"
        :body="project.content"
        :tags="project.tags"
      />
    </TransitionGroup>
  </div>
</template>

<style>
  .list-move, /* apply transition to moving elements */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  /* ensure leaving items are taken out of layout flow so that moving
    animations can be calculated correctly. */
  .list-leave-active {
    position: absolute;
  }
</style>
