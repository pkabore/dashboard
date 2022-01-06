<template>
	<div class="flex justify-center max-w-3xl mx-auto px-2">
		<div class="w-full">
			<h2 class="my-7 border-b text-center text-gray-600 font-bold text-2xl">Ajouter un nouveau article</h2>
		    <form @submit.prevent="submit" method="post" class="mx-auto max-w-sm">
		      <div v-if="status" class="mt-16 mb-4 font-medium text-sm text-sky-600">
		        {{ status }}
		      </div>
		      <div class="mx-auto">
		      	<label for="name" class="text-sm font-bold text-gray-800">Nom:</label>
		        <input
		          id="name"
		          type="text"
		          class="input rounded shadow-md text-sm"
		          :class="{ 'border-red-500': form.errors.name }"
		          v-model="form.name"
		          placeholder="Nom de l'article"
		        />
		        <div  class="text-red-500 text-xs mt-1" v-if="form.errors.name">
		          {{ form.errors.name }}
		        </div>
		      </div>

		      <div class="mx-auto mt-[5px]">
		      	<label for="description" class="text-sm font-bold text-gray-800">Description:</label>
		        <input
		          id="description"
		          type="text"
		          class="input rounded shadow-md text-sm"
		          :class="{ 'border-red-500': form.errors.description }"
		          v-model="form.description"
		          placeholder="Description de l'article"
		        />
		        <div class="text-red-500 text-xs mt-1" v-if="form.errors.description">
		          {{ form.errors.description }}
		        </div>
		      </div>
		      <div class="relative mt-[5px]">
		      	<label for="category" class="text-sm font-bold text-gray-800">Catégory:</label>
			    <Listbox id="category" v-model="form.category_id">
			      <div class="mt-1">
			        <ListboxButton
			          class="relative w-full py-1 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
			        >
			          <span class="block truncate">{{ form.category_id.name || "Sélectionner" }}</span>
			          <span
			            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
			          >
			            <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
			          </span>
			        </ListboxButton>

			        <transition
			          leave-active-class="transition duration-100 ease-in"
			          leave-from-class="opacity-100"
			          leave-to-class="opacity-0"
			        >
			          <ListboxOptions
			            class="absolute w-full py-1 mt-1 w-auto overflow-y-scroll text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
			          	as="div"
			          >
			            <ListboxOption
			              v-slot="{ active, selected }"
			              v-for="category in categories"
			              :key="category.name"
			              :value="category"
			              as="template"
			            >
			              <div
			                :class="[
			                  active ? 'text-green-900 bg-green-100' : 'text-gray-900',
			                  'list-none cursor-default select-none relative py-2 pl-10 pr-4',
			                ]"
			              >
			                <span
			                  :class="[
			                    selected ? 'font-medium' : 'font-normal',
			                    'block truncate',
			                  ]"
			                  >{{ category.name }}</span
			                >
			                <span
			                  v-if="selected"
			                  class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600"
			                >
			                  <CheckIcon class="w-5 h-5" aria-hidden="true" />
			                </span>
			              </div>
			            </ListboxOption>
			          </ListboxOptions>
			        </transition>
			      </div>
			    </Listbox>
			</div>
			<div class="mx-auto mt-[5px]">
				<label for="price" class="text-sm font-bold text-gray-800">Prix unitaire:</label>
		        <input
		          id="price"
		          type="text"
		          class="input rounded shadow-md text-sm"
		          :class="{ 'border-red-500': form.errors.price }"
		          v-model="form.price"
		          placeholder="Prix unitaire"
		        />
		        <div class="text-red-500 text-xs mt-1" v-if="form.errors.price">
		          {{ form.errors.price }}
		        </div>
		      </div>
		      	<div class="mx-auto mt-[5px]">
		      		<label for="tax" class="text-sm font-bold text-gray-800">Taxe:</label>
		              <input
		                id="tax"
		                type="text"
		                class="input rounded shadow-md text-sm"
		                :class="{ 'border-red-500': form.errors.tax }"
		                v-model="form.tax"
		                placeholder="Taxe"
		              />
		              <div class="text-red-500 text-xs mt-1" v-if="form.errors.tax">
		                {{ form.errors.tax }}
		              </div>
		            </div>
	            	<div class="mx-auto mt-[5px]">
	            		<label for="expires_at" class="text-sm font-bold text-gray-800">Date d'expiration:</label>
	                    <input
	                      id="expires_at"
	                      type="date"
	                      class="input rounded shadow-md text-sm"
	                      :class="{ 'border-red-500': form.errors.expires_at }"
	                      v-model="form.expires_at"
	                      placeholder="Date d'expiration"
	                    />
	                    <div class="text-red-500 text-xs mt-1" v-if="form.errors.expires_at">
	                      {{ form.errors.expires_at }}
	                    </div>
	                  </div>
		      <div class="flex items-center justify-end mx-auto mt-4">
		        <div>
		        <button
		          type="submit"
		          class="btn bg-white shadow-md"
		          :class="{ 'opacity-25': form.processing }"
		          :disabled="form.processing"
		        >
		<!--           <LoginIcon class="mr-2 text-sky-100" />
		 -->          <span>Ajouter</span>
		        </button>
		        </div>
		      </div>
		    </form>
		</div>
	</div>
</template>


<script>
import LoginIcon from "@/Components/LoginIcon.vue";
import Dashboard from "@/Pages/Dashboard.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'


export default {
	layout: Dashboard,

	components: {
	    Head,
	    Link,
	    LoginIcon,
	    Listbox,
	    ListboxButton,
	    ListboxOptions,
	    ListboxOption,
	    CheckIcon,
    	SelectorIcon,
	},

	props: {
		status: String,
		categories: Array
	},

	setup(props) {
		const form = useForm({
			category_id: "",
			name: "",
			description: "",
			price: '',
			tax: '',
			expires_at: '',
			stock: ''
		});

		const submit = () => {
			form.post(route("articles.store"), {
				onFinish: () => form.reset(),
			});
		};

		return {
			form,
			submit,
		};
	},
};
</script>
