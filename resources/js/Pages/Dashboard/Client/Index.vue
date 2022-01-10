<template>
	<Dashboard>
		<div class="px-2 mx-auto w-full">
			<h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">Clients</h2>
			<div class="max-w-2xl mx-auto rounded-xl bg-white border pt-4 my-7">
				<div class="flex items-center justify-center space-x-2 px-2 mb-4">
					<div class="relative max-w-sm mx-auto">
					  <SearchIcon class="absolute right-2 top-4 w-4 h-4 text-gray-600" />
					  <input
					    id="search"
					    type="text"
					    class="input bg-slate-200 rounded inset-0 pr-8"
					    v-model="form.search"
					    placeholder="Rechercher un client"
					  />
					</div>
					<!-- <Filters /> -->
					<Link :href="route('clients.create')" class="bg-blue-600 text-white py-1 px-2 text-sm shadow-md shadow-blue-500/50 flex items-center rounded-md hover:bg-blue-700 transition ease-in-out duration-300 focus:outline-none">
						<AddIcon class="h-6 w-6 mr-1 text-blue-200" />
						<span>Ajouter</span>
					</Link>			
				</div>
			<div class="w-full mx-auto overflow-x-auto">
				<table class="w-full table-auto whitespace-nowrap text-sm shadow-sm" >
					<thead>
						<tr>
							<th class="py-3">Id</th>
							<th class="py-3">
								<div class="flex items-center justify-center">
								<ChevronUpIcon @click="setFilter('sortByLname','asc')" class="h-4 w-4 mr-1 text-gray-500 hover:text-amber-700 cursor-pointer" :class="{'text-amber-700': form.sortByLname == 'asc'}" />
								<span>Nom</span>
								<ChevronDownIcon @click="setFilter('sortByLname','desc')" class="h-4 w-4 ml-1 text-gray-500 hover:text-amber-700 cursor-pointer" :class="{'text-amber-700': form.sortByLname == 'desc'}" />
							</div>
							</th>
							<th class="py-3">
								<div class="flex items-center justify-center">
								<ChevronUpIcon @click="setFilter('sortByFname','asc')" class="h-4 w-4 mr-1 text-gray-500 hover:text-amber-700 cursor-pointer" :class="{'text-amber-700': form.sortByFname == 'asc'}" />
								<span>Prénom</span>
								<ChevronDownIcon @click="setFilter('sortByFname','desc')" class="h-4 w-4 ml-1 text-gray-500 hover:text-amber-700 cursor-pointer" :class="{'text-amber-700': form.sortByFname == 'desc'}" />
							</div>
							</th>
							<th class="py-3">
								<div class="flex items-center justify-center">
								<ChevronUpIcon @click="setFilter('sortByEmail','asc')" class="h-4 w-4 mr-1 text-gray-500 hover:text-amber-700 cursor-pointer" :class="{'text-amber-700': form.sortByEmail == 'asc'}" />
								<span>Email</span>
								<ChevronDownIcon @click="setFilter('sortByEmail','desc')" class="h-4 w-4 ml-1 text-gray-500 hover:text-amber-700 cursor-pointer" :class="{'text-amber-700': form.sortByEmail == 'desc'}"/>
							</div>
							</th>
							<th class="py-3">
								<div class="flex items-center justify-center">
								<ChevronUpIcon @click="setFilter('sortByPhone','asc')" class="h-4 w-4 mr-1 text-gray-500 hover:text-amber-700 cursor-pointer" :class="{'text-amber-700': form.sortByPhone == 'asc'}" />
								<span>Tel</span>
								<ChevronDownIcon @click="setFilter('sortByPhone','desc')" class="h-4 w-4 ml-1 text-gray-500 hover:text-amber-700 cursor-pointer" :class="{'text-amber-700': form.sortByPhone == 'desc'}" />
							</div>
							</th>
							<th class="py-3">
								<div class="flex items-center justify-center">
								<ChevronUpIcon @click="setFilter('sortByAddress','asc')" class="h-4 w-4 mr-1 text-gray-500 hover:text-amber-700 cursor-pointer" :class="{'text-amber-700': form.sortByAddress == 'asc'}" />
								<span>Addresse</span>
								<ChevronDownIcon @click="setFilter('sortByAddress','desc')" class="h-4 w-4 ml-1 text-gray-500 hover:text-amber-700 cursor-pointer" :class="{'text-amber-700': form.sortByAddress == 'desc'}" />
							</div>
							</th>
							<th class="py-3">Actions</th>
						</tr>
					</thead>
					<tbody class="pt-4">
						<tr v-for="client in reactiveClients.data" :key="client.id" class="border-t space-x-2 text-center hover:bg-neutral-200 cursor-pointer" @click="visit(client.id)">
							<td class="p-2">
								{{client.id}}
							</td>
							<td class="p-2">
								{{client.lname}}
							</td>
							<td :class="{'text-red-600' : client.stock <= 100, 'text-sky-600' : client.stock > 100}">
								{{client.fname}}
							</td>
							<td class="p-2">
								{{client.email}}
							</td>
							<td class="p-2">
								{{client.phone}}
							</td>
							<td class="p-2">
								{{client.address}}
							</td>
							<td class="p-2 inline-flex justify-center">
								<ChevronRightIcon class="h-6 w-6 text-sky-600" />
							</td>
						</tr>
					</tbody>
				</table>
				</div>
			</div>
		</div>
	</Dashboard>
</template>


<script>
	import Dashboard from '../../Dashboard.vue';
	import SearchIcon from '@/Components/SearchIcon.vue';
	import AddIcon from '@/Components/AddIcon.vue';
	import ChevronRightIcon from '@/Components/ChevronRightIcon.vue';
	import ChevronDownIcon from '@/Components/ChevronDownIcon.vue';
	import ChevronUpIcon from '@/Components/ChevronUpIcon.vue';
	import { Link } from '@inertiajs/inertia-vue3';
	import { Inertia } from '@inertiajs/inertia';
	import { watch, ref, reactive } from 'vue';
	import axios from 'axios';

	export default{
		components: {
			Link,
			SearchIcon,
			AddIcon,
			ChevronRightIcon,
			ChevronUpIcon,
			ChevronDownIcon,
			Dashboard
		},

		props: { clients: Object },

		setup(props) {
			const form = reactive({
				search: '',
				sortByLname: '',
				sortByFname: '',
				sortByEmail: '',
				sortByPhone: '',
				sortByStock: '',
				sortByAddress: ''
			});

			const reactiveClients = ref(props.clients);
			
			const setFilter = (key, value) => {
				const keys = Object.keys(form);
				if (keys.length > 1){
					keys.forEach(key => {
						if (key.startsWith('sortBy'))
							delete form[key]
					})
				}
				form[key] = value;
			}

			const visit = (id) => {
				Inertia.get(route('clients.edit', id));
			}

			watch(form, () => {
				axios.post(route('clients.search'), form)
					.then(res => {
						reactiveClients.value = res.data;
					})
					.catch(err => console.log(err));
			});

			return { form, setFilter, visit, reactiveClients }
		}
	}
</script>