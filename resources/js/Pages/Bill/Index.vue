<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">Factures</h2>
    <div class="max-w-3xl mx-auto rounded-md border pt-4 my-7">
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
            placeholder="Rechercher une facture"
          />
        </div>
        <ExportButton :href="route('bills.export')" />
        <CreateButton :href="route('bills.create')" />
      </div>
      <div class="w-full mx-auto overflow-x-auto">
        <table class="w-full table-auto whitespace-nowrap text-sm">
          <thead>
            <tr>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <!-- <ChevronUpIcon
                    @click="setFilter('sortByReceiptId', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByReceiptId == 'asc',
                    }"
                  /> -->
                  <span>Id</span>
                  <!-- <ChevronDownIcon
                    @click="setFilter('sortByReceiptId', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByReceiptId == 'desc',
                    }"
                  /> -->
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByClientName', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByClientName == 'asc',
                    }"
                  />
                  <span>Client</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByClientName', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByClientName == 'desc',
                    }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByDate', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByDate == 'asc' }"
                  />
                  <span>Isssue</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByDate', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByDate == 'desc' }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByDeadline', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByDeadline == 'asc',
                    }"
                  />
                  <span>Délai</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByDeadline', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByDeadline == 'desc',
                    }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByTotal', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByTotal == 'asc' }"
                  />
                  <span>Total</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByTotal', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByTotal == 'desc' }"
                  />
                </div>
              </th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByStatut', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByStatut == 'asc' }"
                  />
                  <span>Statut</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByStatut', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByStatut == 'desc',
                    }"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="pt-4">
            <tr
              v-for="bill in reactiveBills"
              :key="bill.id"
              class="border-t space-x-2 hover:bg-neutral-200 text-center"
            >
              <td class="p-2">
                {{ bill.id }}
              </td>
              <td class="p-2">
                {{ bill.client_name }}
              </td>
              <td class="lowercase text-gray-600">
                {{ bill.date }}
              </td>
              <td class="lowercase">
                {{ bill.deadline }}
              </td>
              <td class="p-2 font-medium">
                {{ bill.total.toLocaleString("fr-FR") }} FCFA
              </td>
              <td class="p-2 font-medium">
                <span
                  v-if="bill.status == 'Payé'"
                  class="border border-green-600 text-green-600 text-xs px-1 py-[2px] rounded-md"
                >
                  {{ bill.status }}
                </span>
                <span
                  v-else
                  class="border border-red-600 text-red-600 text-xs px-1 py-[2px] rounded-md"
                >
                  {{ bill.status }}
                </span>
              </td>
              <td class="p-2 inline-flex justify-center">
                <Link :href="route('bills.show', bill.id)">
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
import ChevronRightIcon from "@/Components/ChevronRightIcon.vue";
import ChevronDownIcon from "@/Components/ChevronDownIcon.vue";
import ChevronUpIcon from "@/Components/ChevronUpIcon.vue";
import CreateButton from "@/Components/CreateButton.vue";
import ExportButton from "@/Components/ExportButton.vue";
import Pagination from "@/Components/Pagination.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { watch, ref } from "vue";
import axios from "axios";

export default {
  layout: Layout,

  components: {
    Link,
    SearchIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    CreateButton,
    Pagination,
    ExportButton
  },

  props: { bills: Object },

  setup(props) {
    const form = ref({
      search: "",
      uri: route('bills.search')
    });

    const reactiveBills = ref(props.bills.data);
    const links = ref(props.bills.links);

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
          reactiveBills.value = res.data.data;
          links.value = res.data.links;
        })
        .catch((err) => (err));
    });

    return { form, setFilter, reactiveBills, links };
  },
};
</script>