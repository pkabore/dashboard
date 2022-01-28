<template>
	<div class="max-w-full relative" :id="id">
	  <div
	    class="relative z-0"> 
	    <input class="pl-3 pr-10 py-2 focus:outline-none sm:text-sm input"
	    @focus="$emit('search', keyword); open=true"
	    @input="$emit('search', keyword); open=true"
	    @click="open=true"
	    v-model="keyword"
	    placeholder="Rechercher . . ." 
	  />
	    <span
	      class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
	    >
	      <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
	    </span>
	  </div>
	    <div
	      v-show="open && items.length"
	      class="absolute z-10 w-full py-1 mt-[3px] text-sm bg-white border rounded shadow-lg shadow-slate-500/50 max-h-60 focus:outline-none overflow-auto transform transition duration-300 ease-in"
	    >
	      <ul>
	        <li
	          v-for="(item, key) in items"
	          :key="key"
	          @click="selected=item; open=false; keyword=selected.name ? selected.name : selected.fname + ' ' + selected.lname; $emit('choice', selected)"
	          class="hover:text-blue-900 hover:bg-blue-100 text-gray-900 cursor-default select-none relative py-2 pl-2"
	        >
	          {{ item.name ? item.name : `${item.fname} ${item.lname}` }}
	        </li>
	      </ul>
	    </div>
	</div>
</template>

<script>
	import SelectorIcon from "@/Components/SelectorIcon.vue";
	import { ref, onMounted } from 'vue';
	export default{
		components: {
			SelectorIcon
		},
		props:{
			items: Array,
			default: Object,
			id: String
		},
		setup(props){
			const open = ref(false);
			const selected = ref(props.default);
			const keyword = ref(props.default.name);
			
			onMounted(() => {
				window.addEventListener('click', (e) => {
					const isOutside = !(e.target.id == props.id || (e.target.parentElement && e.target.parentElement.id == props.id) || (e.target.parentElement.parentElement && e.target.parentElement.parentElement.id == props.id));
					if (isOutside)
						open.value = false;
				});

				window.addEventListener('keydown', (e) => {
					if (open.value && e.keyCode === 27)
						open.value = false;
				});
			});

			return {
				open,
				selected,
				keyword
			}
		}
	}
</script>