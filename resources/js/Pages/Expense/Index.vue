<template>
  <div class="px-2 mx-auto w-full">
    <h2 class="text-2xl font-bold mt-4 text-gray-600 text-center">Dépenses</h2>
    <div class="max-w-3xl mx-auto bg-white rounded-md border pt-4 my-7">
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
            placeholder="Rechercher une dépense"
          />
        </div>
        <ExportButton :href="route('expenses.export')" />
        <CreateButton :href="route('expenses.create')" />
      </div>
      <div class="w-full mx-auto overflow-x-auto">
        <table class="w-full table-auto whitespace-nowrap text-sm">
          <thead>
            <tr>
              <th class="py-3">Id</th>
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
              <th class="py-3">Motif</th>
              <th class="py-3">Rayon</th>
              <th class="py-3">
                <div class="flex items-center justify-center">
                  <ChevronUpIcon
                    @click="setFilter('sortByFee', 'asc')"
                    class="h-4 w-4 mr-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByFee == 'asc' }"
                  />
                  <span>Frais</span>
                  <ChevronDownIcon
                    @click="setFilter('sortByFee', 'desc')"
                    class="h-4 w-4 ml-1 text-gray-500 hover:text-blue-700"
                    :class="{ 'text-blue-700': form.sortByFee == 'desc' }"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="pt-4">
            <tr
              v-for="expense in reactiveExpenses"
              :key="expense.id"
              class="border-t space-x-2 hover:bg-neutral-200 text-center"
            >
              <td class="p-2">
                {{ expense.id }}
              </td>
              <td class="p-2 text-gray-600">
                {{ expense.date }}
              </td>
              <td class="p-2">
                {{ expense.description }}
              </td>
              <td class="p-2 text-blue-700">
                {{ expense.category }}
              </td>
              <td class="p-2">
                {{ parseFloat(expense.fee).toLocaleString("fr-FR") }}
              </td>
              <td class="p-2 inline-flex justify-center">
                <DeleteIcon
                  @click="prepareDeletion(expense.id)"
                  class="h-5 w-5 text-red-600"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination class="my-5" :links="links" @paginate="(payload) => form.uri = payload" />
    </div>
  </div>
  <Dialog
    @cancel="isOpen = false"
    @confirm="deleteExpense()"
    :class="{'hidden': !isOpen}"
    type="Supprimer"
    message="Confirmez-vous cette suppression?"
  />
</template>


<script>
import Layout from "@/Pages/Layout.vue";
import SearchIcon from "@/Components/SearchIcon.vue";
import CreateButton from "@/Components/CreateButton.vue";
import DeleteIcon from "@/Components/DeleteIcon.vue";
import Dialog from "@/Components/Dialog.vue";
import ChevronDownIcon from "@/Components/ChevronDownIcon.vue";
import ChevronUpIcon from "@/Components/ChevronUpIcon.vue";
import ExportButton from "@/Components/ExportButton.vue";
import Pagination from '@/Components/Pagination.vue';
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { watch, ref } from "vue";
import axios from "axios";

export default {
  layout: Layout,

  components: {
    Link,
    SearchIcon,
    CreateButton,
    DeleteIcon,
    Dialog,
    ChevronUpIcon,
    ChevronDownIcon,
    ExportButton,
    Pagination
  },

  props: { expenses: Object },

  setup(props) {
    const isOpen = ref(false);

    const form = ref({
      search: "",
      uri: route("expenses.search")
    });

    const deleteForm = useForm({
      id: 0,
    });

    const links = ref(props.expenses.links);

    const prepareDeletion = (id) => {
      deleteForm.id = id;
      isOpen.value = true;
    };

    const reactiveExpenses = ref(props.expenses.data);

    const setFilter = (key, value) => {
      const keys = Object.keys(form.value);
      if (keys.length > 1) {
        keys.forEach((key) => {
          if (key.startsWith("sortBy")) delete form.value[key];
        });
      }
      form.value[key] = value;
    };

    const deleteExpense = () => {
      isOpen.value = false;
      deleteForm.delete(route("expenses.destroy", deleteForm.id), {
        only: ["expenses"],
        onSuccess: () => {
          reactiveExpenses.value = props.expenses.data;
        },
      });
    };

    watch(form.value, () => {
      axios
        .post(form.value.uri, form.value)
        .then((res) => {
          reactiveExpenses.value = res.data.data;
          links.value = res.data.links;
        })
        .catch((err) => console.log(err));
    });

    return { isOpen, prepareDeletion, form, setFilter, deleteExpense, reactiveExpenses, links };
  },
};
</script>