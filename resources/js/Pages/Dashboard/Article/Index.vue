<template>
	<Dashboard>
		<div class="px-2 mx-auto w-full">
			<h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">Articles</h2>
			<div class="w-full max-w-2xl mx-auto overflow-x-auto rounded-xl bg-white border pt-4 my-7">
				<div class="flex items-center justify-center space-x-2 px-2 mb-4">
					<div class="relative max-w-sm mx-auto">
					  <SearchIcon class="absolute right-2 top-4 w-4 h-4 text-gray-600" />
					  <input
					    id="search"
					    type="text"
					    class="input bg-slate-200 rounded inset-0 pr-8"
					    v-model="form.search"
					    placeholder="Rechercher un article"
					  />
					</div>
					<!-- <Filters /> -->
					<Link :href="route('articles.create')" class="bg-blue-600 text-white py-1 px-2 text-sm shadow-md shadow-blue-500/50 flex items-center rounded-md hover:bg-blue-700 transition ease-in-out duration-300 focus:outline-none">
						<AddIcon class="h-6 w-6 mr-1 text-blue-200" />
						<span>Ajouter</span>
					</Link>			
				</div>
				<table class="w-full table-auto whitespace-nowrap text-sm shadow-sm" >
					<thead>
						<tr>
							<th>Id</th>
							<th>Nom</th>
							<th>Stock</th>
							<th>Prix</th>
							<th>Taxe</th>
							<th>Exp. Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody class="pt-4">
						<tr v-for="article in articles.data" :key="article.id" class="border-t space-x-2 text-center hover:bg-neutral-200 cursor-pointer" @click="visit(article.id)">
							<td class="p-2">
								{{article.id}}
							</td>
							<td class="p-2">
								{{article.name}}
							</td>
							<td :class="{'text-red-600' : article.stock <= 100, 'text-sky-600' : article.stock > 100}">
								{{article.stock}}
							</td>
							<td class="p-2">
								{{article.price}} FCFA
							</td>
							<td class="p-2">
								{{article.taxe}} FCFA
							</td>
							<td class="p-2">
								{{article.expires_at}}
							</td>
							<td class="p-2 inline-flex justify-center">
								<ChevronRightIcon class="h-6 w-6 text-sky-600" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</Dashboard>
</template>


<script>
	import Dashboard from '../../Dashboard.vue';
	import SearchIcon from '@/Components/SearchIcon.vue';
	import AddIcon from '@/Components/AddIcon.vue';
	import EditIcon from '@/Components/EditIcon.vue';
	import DeleteIcon from '@/Components/DeleteIcon.vue';
	import ChevronRightIcon from '@/Components/ChevronRightIcon.vue';
	import { Link, Head, useForm } from '@inertiajs/inertia-vue3';
	import { Inertia } from '@inertiajs/inertia';

	export default{
		components: {
			Link,
			Head,
			SearchIcon,
			AddIcon,
			EditIcon,
			DeleteIcon,
			ChevronRightIcon,
			Dashboard
		},

		props: { articles: Object },

		setup(props) {
			const form = useForm({ search: '' });
			const visit = (id) => {
				Inertia.get(route('articles.edit', id));
			}
			return { form, visit }
		}
	}
</script>