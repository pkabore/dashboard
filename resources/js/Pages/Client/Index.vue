<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">Clients</h2>
    <div class="max-w-3xl mx-auto rounded-3xl bg-white border pt-4 my-7">
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
        <ExportButton :href="route('clients.export')" />
        <CreateButton :href="route('clients.create')" />
      </div>
      <div class="w-full mx-auto overflow-x-auto pb-4">
        <table class="w-full table- whitespace-nowrap text-sm shadow-md">
          <thead>
            <tr>
              <th class="py-3">Id</th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByLname', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByLname == 'asc' }"
                  />
                  <span>Nom</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByLname', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByLname == 'desc' }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByFname', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByFname == 'asc' }"
                  />
                  <span>Prénom</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByFname', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByFname == 'desc' }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByPhone', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByPhone == 'asc' }"
                  />
                  <span>Tel</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByPhone', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByPhone == 'desc' }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByEmail', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByEmail == 'asc' }"
                  />
                  <span>Email</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByEmail', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByEmail == 'desc' }"
                  />
                </div>
              </th>
              <th class="py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="client in reactiveClients"
              :key="client.id"
              class="space-x-2 text-center"
            >
              <td class="p-2">
                {{ client.id }}
              </td>
              <td class="p-2">
                {{ client.lname }}
              </td>
              <td class="p-2">
                {{ client.fname }}
              </td>
              <td class="p-2 text-blue-800">
                {{ client.phone }}
              </td>
              <td class="p-2 text-gray-700">
                {{ client.email }}
              </td>
              <td class="p-2 inline-flex justify-center">
                <Link :href="route('clients.edit', client.id)">
                  <ChevronRightIcon class="h-5 w-5 text-blue-700" />
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
import CreateButton from "@/Components/CreateButton.vue";
import ChevronRightIcon from "@/Components/ChevronRightIcon.vue";
import ChevronDownIcon from "@/Components/ChevronDownIcon.vue";
import ChevronUpIcon from "@/Components/ChevronUpIcon.vue";
import ExportButton from "@/Components/ExportButton.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Pagination from '@/Components/Pagination.vue';
import { watch, ref } from "vue";
import axios from "axios";

export default {
  layout: Layout,

  components: {
    Link,
    SearchIcon,
    CreateButton,
    ChevronRightIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    ExportButton,
    Pagination,
  },

  props: { clients: Object },

  setup(props) {
    const form = ref({
      search: "",
      uri: route('clients.search')
    });

    const reactiveClients = ref(props.clients.data);
    const links = ref(props.clients.links);

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
          reactiveClients.value = res.data.data;
          links.value = res.data.links;
        })
        .catch((err) => (err));
    });

    return { form, setFilter, reactiveClients, links };
  },
};
</script>