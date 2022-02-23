<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">Articles</h2>
    <div class="max-w-3xl bg-white w-full mx-auto rounded-3xl border pt-4 my-7">
      <div class="flex items-center justify-center space-x-2 px-2 mb-4">
        <div class="relative max-w-sm mx-auto">
          <span
            class="
              absolute
              inset-y-0
              left-0
              flex
              items-center
              pl-2
              pointer-events-none
            "
          >
            <SearchIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
          <input
            id="search"
            type="text"
            maxlength="32"
            class="input text-sm py-[7px] pr-2 text-sm pl-8"
            v-model="form.search"
            placeholder="Rechercher ..."
          />
        </div>
        <ExportButton :href="route('articles.export')" />
        <CreateButton :href="route('articles.create')" />
      </div>
      <div class="w-full mx-auto overflow-x-auto pb-4">
        <table class="w-full table-auto whitespace-nowrap text-sm">
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
                  <span>Dés.</span>
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
                    @click="setFilter('sortByStock', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByStock == 'asc' }"
                  />
                  <span>Stock</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByStock', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByStock == 'desc',
                    }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByPrice', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByPrice == 'asc' }"
                  />
                  <span>Prix</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByPrice', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByPrice == 'desc',
                    }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByTax', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByTax == 'asc' }"
                  />
                  <span>Taxe</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByTax', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByTax == 'desc' }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByExpiresAt', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByExpiresAt == 'asc',
                    }"
                  />
                  <span>Exp. Date</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByExpiresAt', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByExpiresAt == 'desc',
                    }"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="article in reactiveArticles"
              :key="article.id"
              class="space-x-2 text-center"
            >
              <td class="p-2">
                {{ article.id }}
              </td>
              <td class="p-2 capitalize">
                {{ article.name }}
              </td>
              <td
                class="family-mono"
                :class="{
                  'text-red-700': article.stock <= 100,
                  'text-blue-700': article.stock > 100,
                }"
              >
                {{ article.stock.toLocaleString("fr-FR") }}
              </td>
              <td class="p-2">
                {{ parseFloat(article.price).toLocaleString("fr-FR") }}
              </td>
              <td class="p-2">
                {{ parseFloat(article.tax).toLocaleString("fr-FR") + "%" }}
              </td>
              <td class="p-2">
                {{ article.expires_at }}
              </td>
              <td class="p-2">
                <Link :href="route('articles.edit', article.id)">
                  <ChevronRightIcon class="h-5 w-5 text-blue-600 ml-1" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination class="my-5" :links="links" @paginate="(payload) => form.uri = payload" />
    </div>
  </div>
</template>

<script>
import Layout from "@/Pages/Layout.vue";
import SearchIcon from "@/Components/SearchIcon.vue";
import Pagination from "@/Components/Pagination.vue";
import AddIcon from "@/Components/AddIcon.vue";
import ChevronRightIcon from "@/Components/ChevronRightIcon.vue";
import ChevronDownIcon from "@/Components/ChevronDownIcon.vue";
import ChevronUpIcon from "@/Components/ChevronUpIcon.vue";
import CreateButton from "@/Components/CreateButton.vue";
import ExportButton from "@/Components/ExportButton.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { watch, ref } from "vue";
import axios from "axios";

export default {
  layout: Layout,

  components: {
    Link,
    SearchIcon,
    Pagination,
    AddIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    ExportButton,
    CreateButton
  },

  props: { articles: Object },

  setup(props) {
    const form = ref({
      search: '',
      uri: route('articles.search')
    });

    const orders = ref([]);
    const links = ref(props.articles.links);

    const reactiveArticles = ref(props.articles.data);

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
        .post(form.value.uri, form.value)
        .then((res) => {
          reactiveArticles.value = res.data.data;
          links.value = res.data.links;
        })
        .catch((err) => (err));
    });

    return { form, setFilter, reactiveArticles, links };
  },
};
</script>