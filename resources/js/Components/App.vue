<template>
	<article class="mt-10 flex bg-white min-h-screen">
		<aside class="w-2/12 sticky">
			<div class="overflow-y-scrool">
				<div id="category" class="px-2">
					<h2 class="font-bold text-sm flex items-center">
						<FolderIcon class="w-5 h-5 text-gray-600 mr-1" />
						<span>Categories</span>
					</h2>
					<ul class="mt-4 space-y-2">
						<li v-for="(c, i) in categories" :key="i" class="block">
					        <label class="flex items-center">
					          <input
					            type="checkbox"
					            class="checkbox"
					            name="remember"
					            @input="selectCategories(c.id)"
					          />
					          <span class="ml-2 text-sm font-medium text-gray-900">{{c.name}}</span>
					        </label>
	        			</li>
					</ul>
				</div>
			</div>
		</aside>
		<section class="w-8/12 mx-auto">
			<div class="w-full flex justify-between">
				<h2 class=" text-gray-900 text-sm font-bold text-center">Urgencies</h2>
				<div class="max-w-xs relative">
			        <SearchIcon class="absolute right-2 top-4 w-5 h-5 text-gray-600" />
			        <input
			          type="text"
			          class="input inset-0 pl-8"
			          v-model="keywords"
			          placeholder="Search an urgency . . ."
			        />
				</div>
			</div>
			<div class="mt-4 mx-auto space-y-2">
				<div v-for="(urgency, i) in filteredUrgencies" :key="i">
					<Urgency :urgency="urgency" class="max-w-md" />
				</div>
			</div>
		</section>
		<aside class="w-2/12">
			<div class="overflow-y-scrool">
			<div id="participants" class="px-2">
				<h2 class="font-bold text-sm inline-flex items-center">
					<span class="text-xl text-green-500 mr-1">•</span>
					<span>Online participants: {{}}</span>
				</h2>
			</div>
			</div>
		</aside>
	</article>
</template>

<script>
	import { Link, useForm } from "@inertiajs/inertia-vue3";
	import Urgency from '@/Urgency/Urgency.vue';
	import SearchIcon from '@/Components/SearchIcon.vue';
	import FolderIcon from '@/Components/FolderIcon.vue';
	import { ref, onMounted, watch } from 'vue';
	import axios from 'axios';
	import {debounce, throttle} from 'lodash';

	export default{
		components: {
			Link,
			Urgency,
			SearchIcon,
			FolderIcon
		},

		props: {
			urgencies: {type: Array, default: []}
		},

		setup(props){
			const categories = ref([]);
			const searchedProposals = ref([]);
			const selectedCategories = ref([]);
			const keywords = ref('');
			const filteredUrgencies = ref(props.urgencies);
			const filteredProposals = ref('');

			const getCategories = () => {
				axios.get(route('categories.index'))
					.then(res => {
						categories.value = res.data;
					});
			}

			const selectCategories = (id) => {
				
				const index = selectedCategories.value.indexOf(id);
				if (index === -1)
					selectedCategories.value.push(id);
				else
					selectedCategories.value.splice(index, 1);

				if (selectedCategories.value.length !== 0)
					axios.post(route('urgencies.searchbycat'), {categories: selectedCategories.value})
					.then((res) => {
						filteredUrgencies.value = res.data;
					})
					.catch(() => {
						//set an error
					})
				else
					filteredUrgencies.value = props.urgencies;
			}

			const getUrgenciesByCategory = () => {

			}

			const getProposal = () => {
				axios.get(route('proposals.index'))
					.then(res => {
						categories.value = res.data;
					});
			}
		
			watch(keywords, debounce(() => {
				if (keywords.value.length == 0)
					return;
				axios.post(route('urgencies.search'), {search: keywords.value})
					.then((res) => {
						console.log(res.data);
						filteredUrgencies.value = res.data;
					})
					.catch(() => {
						//set an error
					})
			}, 500));
		
			onMounted(() => {
				getCategories();
			});

			return {
				categories,
				getCategories,
				selectCategories,
				keywords,
				filteredUrgencies,
				searchedProposals
			}
		}
	}
</script>