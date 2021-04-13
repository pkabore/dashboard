<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">Ventes</h2>
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
            placeholder="Rechercher une vente"
          />
        </div>
        <ExportButton :href="route('sales.export')" />
        <CreateButton :href="route('sales.create')" />
      </div>
      <div class="w-full mx-auto overflow-x-auto">
        <table class="w-full table-auto whitespace-nowrap text-sm">
          <thead>
            <tr>
              <th class="py-3">Id</th>
              <!-- <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByReceiptId', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByReceiptId == 'asc',
                    }"
                  />
                  <span>Reçu</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByReceiptId', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{
                      'text-blue-700': form.sortByReceiptId == 'desc',
                    }"
                  />
                </div>
              </th> -->
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByDate', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByDate == 'asc' }"
                  />
                  <span>Date</span>
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
                    @click="setFilter('sortByTaxes', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByTaxes == 'asc' }"
                  />
                  <span>Taxes</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByTaxes', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByTaxes == 'desc' }"
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
            </tr>
          </thead>
          <tbody class="pt-4">
            <tr
              v-for="sale in reactiveSales"
              :key="sale.id"
              class="border-t space-x-2 hover:bg-neutral-200 text-center"
            >
              <td class="p-2">
                {{ sale.id }}
              </td>
              <!-- <td class="p-2">
                {{ sale.receipt_id }}
              </td> -->
              <td class="text-gray-600">
                {{ sale.date }}
              </td>
              <td class="p-2 font-medium">
                {{ sale.taxes.toLocaleString("fr-FR") }} FCFA
              </td>
              <td class="p-2 font-medium text-blue-700">
                {{ sale.total.toLocaleString("fr-FR") }} FCFA
              </td>
              <td class="p-2 inline-flex justify-center">
                <Link :href="route('sales.show', sale.id)">
                  <ChevronRightIcon class="h-5 w-5 text-blue-700" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination class="my-5" :links="links" @paginate="(payload) => (form.uri = payload)" />
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
import Pagination from '@/Components/Pagination.vue';
import { Link } from "@inertiajs/inertia-vue3";
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
    Pagination
  },

  props: { sales: Object },

  setup(props) {
    const form = ref({
      search: "",
      uri: route('sales.search')
    });

    const reactiveSales = ref(props.sales.data);
    const links = ref(props.sales.links);

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
          reactiveSales.value = res.data.data;
          links.value = res.data.links;
        })
        .catch((err) => console.log(err));
    });

    return { form, setFilter, reactiveSales, links };
  },
};
</script>