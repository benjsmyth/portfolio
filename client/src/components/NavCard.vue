<!-- Navigation card component -->

<script setup lang="ts">
	import { RouterLink } from 'vue-router';
	import { ArrowCircleRightIcon } from '@heroicons/vue/solid';
	import { defineComponent } from 'vue';
</script>

<script lang="ts">
  export default defineComponent({
    props: {
      head: null,
      body: null,
			icon: null
    },
    components: {
      ArrowCircleRightIcon,
    }
  });
</script>

<template>
	<RouterLink exact :to="`${head.toLowerCase()}`">
		<div id="nav-card-wrapper" class="
				bg-slate-700 cursor-pointer divide-slate-500 divide-y ease-in-out hover:outline-2 m-2 mb-4 drop-shadow outline outline-1 outline-slate-500 px-4 py-2 rounded-lg text-slate-300/85 transition
			">
			<div id="nav-card-header" class="
					flex justify-between
				">
				<h4 id="nav-card-title" v-html="head" class="
						font-bold select-none
					">
				</h4>
				<slot id="nav-card-icon">
					<!-- Icon goes here -->
				</slot>
			</div>
			<div id="nav-card-body" class="
					flex justify-between
				">
				<div id="nav-card-icon-container" class="
						pt-2
					">
					<ArrowCircleRightIcon id="arrow-circle-right-icon" class="
						h-5 fill-slate-400 w-5
					"/>
				</div>
				<div id="nav-card-content" v-html="body" class="
						h-8 leading-6 py-1 text-right text-slate-400 text-sm
					">
				</div>
			</div>
		</div>
	</RouterLink>
</template>
