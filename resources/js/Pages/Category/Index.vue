<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">Rayons</h2>
    <div class="max-w-2xl mx-auto rounded-md bg-white border pt-4 my-7">
      <div class="flex items-center justify-center space-x-2 px-2 mb-4">
        <div class="relative max-w-sm mx-auto">
          <span
            class="
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-2
              pointer-events-none
            "
          >
            <SearchIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
          <input
            id="search"
            type="text"
            maxlength="32"
            class="input text-sm py-[7px] pl-3 text-sm pr-10"
            v-model="form.search"
            placeholder="Rechercher un rayon"
          />
        </div>
        <!-- <Filters /> -->
        <Link
          :href="route('categories.create')"
          class="
            bg-blue-600
            text-white
            py-1
            px-2
            text-sm
            shadow-md shadow-blue-500/50
            flex
            items-center
            rounded-md
            hover:bg-blue-700
            transition
            ease-in-out
            duration-300
            focus:outline-none
          "
        >
          <AddIcon class="h-5 w-5 mr-1 text-blue-200" />
          <span>Ajouter</span>
        </Link>
      </div>
      <div class="w-full mx-auto overflow-x-auto">
        <table class="w-full table-auto whitespace-nowrap text-sm shadow-md">
          <thead>
            <tr>
              <th class="py-3">Id</th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByName', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByName == 'asc' }"
                  />
                  <span>Nom</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByName', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByName == 'desc' }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByArticles', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByArticles == 'asc',
                    }"
                  />
                  <span>Articles</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByArticles', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByArticles == 'desc',
                    }"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="pt-4">
            <tr
              v-for="category in reactiveCategories"
              :key="category.id"
              class="border-t space-x-2 text-center hover:bg-neutral-200"
            >
              <td class="p-2 family-mono">
                {{ category.id }}
              </td>
              <td class="p-2 uppercase text-xs">
                {{ category.name }}
              </td>
              <td class="p-2 text-blue-700 family-mono">
                {{ parseFloat(category.articles).toLocaleString("fr-FR") }}
              </td>
              <td class="p-2 inline-flex justify-center">
                <Link :href="route('categories.edit', category.id)">
                  <ChevronRightIcon class="h-5 w-5 text-blue-700" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import Layout from "@/Pages/Layout.vue";
import SearchIcon from "@/Components/SearchIcon.vue";
import AddIcon from "@/Components/AddIcon.vue";
import ChevronRightIcon from "@/Components/ChevronRightIcon.vue";
import ChevronDownIcon from "@/Components/ChevronDownIcon.vue";
import ChevronUpIcon from "@/Components/ChevronUpIcon.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { watch, ref } from "vue";
import axios from "axios";

export default {
  layout: Layout,
  components: {
    Link,
    SearchIcon,
    AddIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ChevronDownIcon,
  },

  props: { categories: Object },

  setup(props) {
    const form = ref({
      search: "",
    });

    const reactiveCategories = ref(props.categories);

    const setFilter = (key, value) => {
      const keys = Object.keys(form.value);
      if (keys.length > 1) {
        keys.forEach((key) => {
          if (key.startsWith("sortBy")) delete form.value[key];
        });
      }
      form.value[key] = value;
    };

    watch(form.value, () => {
      axios
        .post(route("categories.search"), form.value)
        .then((res) => {
          reactiveCategories.value = res.data.data;
        })
        .catch((err) => console.log(err));
    });

    return { form, setFilter, reactiveCategories };
  },
};
</script>