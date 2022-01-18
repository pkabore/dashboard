<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">Clients</h2>
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
            placeholder="Rechercher un client"
          />
        </div>
        <a :href="route('clients.export')" class="border text-teal-700 py-1 px-2 hover:border-teal-600 transition duration-300 ease-in-out rounded-md focus:outline-none">
          Export xlsx
        </a>
        <!-- <Filters /> -->
        <Link
          :href="route('clients.create')"
          class="
            bg-blue-600
            text-white
            py-1
            px-2
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
          <tbody class="pt-4">
            <tr
              v-for="client in reactiveClients.data"
              :key="client.id"
              class="border-t space-x-2 text-center hover:bg-neutral-200"
            >
              <td class="p-2">
                {{ client.id }}
              </td>
              <td class="p-2">
                {{ client.lname }}
              </td>
              <td
                :class="{
                  'text-red-700': client.stock <= 100,
                  'text-blue-700': client.stock > 100,
                }"
              >
                {{ client.fname }}
              </td>
              <td class="p-2">
                {{ client.phone }}
              </td>
              <td class="p-2">
                {{ client.email }}
              </td>
              <td class="p-2 inline-flex justify-center">
                <Link :href="route('clients.edit', client.id)">
                  <EditIcon class="h-5 w-5 text-blue-700" />
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
import EditIcon from "@/Components/EditIcon.vue";
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
    EditIcon,
    ChevronUpIcon,
    ChevronDownIcon,
  },

  props: { clients: Object },

  setup(props) {
    const form = ref({
      search: "",
    });

    const reactiveClients = ref(props.clients);

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
        .post(route("clients.search"), form.value)
        .then((res) => {
          reactiveClients.value = res.data;
        })
        .catch((err) => console.log(err));
    });

    return { form, setFilter, reactiveClients };
  },
};
</script>