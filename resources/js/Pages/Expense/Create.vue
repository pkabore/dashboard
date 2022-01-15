<template>
  <div class="flex justify-center max-w-3xl mx-auto px-2">
    <div class="w-full">
      <h2 class="my-4 border-b text-center text-gray-600 font-bold text-2xl">
        Enregistrer dépense
      </h2>
      <form @submit.prevent="submit" method="post" class="mx-auto max-w-sm">
        <div
          v-if="message"
          class="
            mb-1
            font-medium
            text-sm text-green-700
            flex
            items-center
            justify-end
          "
        >
          <span>{{ message }}</span>
          <CheckIcon class="h-5 w-5 ml-1" />
        </div>
        <div class="mx-auto">
          <label for="description" class="text-sm font-bold text-gray-800"
            >Motif:</label
          >
          <input
            id="description"
            type="text"
            maxlength="256"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-500': form.errors.description }"
            v-model="form.description"
            placeholder="Motif"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.description">
            {{ form.errors.description }}
          </div>
        </div>
        <div class="mt-1 relative">
          <label
            for="category"
            class="text-sm family-mono uppercase font-bold text-gray-800"
            >Rayon:</label
          >
          <Listbox id="category" v-model="form.category_id">
            <div class="mt-1">
              <ListboxButton
                class="
                  relative
                  w-full
                  py-[11px]
                  pl-3
                  pr-10
                  text-sm text-left
                  bg-white
                  border border-slate-300
                  focus:outline-none focus:border-slate-400
                  rounded-md
                  cursor-default
                "
              >
                <span class="block truncate">
                  {{ form.category_id.name || "Sélectionner" }}
                </span>
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
                  <SelectorIcon
                    class="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>
              <ListboxOptions
                class="
                  w-full
                  py-1
                  mt-1
                  overflow-y-scroll
                  bg-slate-50
                  rounded-md
                  shadow-md shadow-slate-500/50
                  max-h-60 max-w-full
                  focus:outline-none
                "
              >
                <ListboxOption disabled>
                  <div class="relative w-10/12 mb-1 mx-auto">
                    <input
                      @input="searchCategory"
                      type="text"
                      maxlength="32"
                      @keydown="escapeSpace"
                      class="input text-sm py-[7px] pl-3 text-sm pr-10"
                      v-model="search.search"
                      placeholder="Rechercher rayon"
                    />
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
                      <SearchIcon
                        class="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </ListboxOption>
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="(category, i) in categories"
                  :key="i"
                  :value="category"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'text-blue-700 bg-blue-200' : 'text-gray-900',
                      'list-none cursor-default text-sm select-none relative py-2 pl-10 pr-4',
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
                      class="
                        absolute
                        inset-y-0
                        left-0
                        flex
                        items-center
                        pl-3
                        text-
                        emerald-700
                      "
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </div>
          </Listbox>
          <div
            class="text-red-700 text-xs mt-1"
            v-if="form.errors['category_id.id']"
          >
            {{ form.errors["category_id.id"] }}
          </div>
        </div>
        <div class="mx-auto">
          <label for="fee" class="text-sm font-bold text-gray-800"
            >Frais:</label
          >
          <input
            id="fee"
            type="text"
            maxlength="16"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-500': form.errors.fee }"
            v-model="form.fee"
            placeholder="Frais"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.fee">
            {{ form.errors.fee }}
          </div>
        </div>
        <div class="flex items-center justify-end mx-auto mt-4">
          <button
            type="submit"
            class="
              bg-blue-600
              text-white
              py-2
              px-4
              text-sm
              shadow-md shadow-blue-500/50
              rounded-md
              hover:bg-blue-700
              transition
              ease-in-out
              duration-300
              focus:outline-none
            "
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import Layout from "@/Pages/Layout.vue";
import SearchIcon from "@/Components/SearchIcon.vue";
import SelectorIcon from "@/Components/SelectorIcon.vue";
import CheckIcon from "@/Components/CheckIcon.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import axios from "axios";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

export default {
  layout: Layout,

  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    SelectorIcon,
    SearchIcon,
  },

  props: {
    message: String,
  },

  setup() {
    const form = useForm({
      category_id: { id: 0, name: "" },
      description: "",
      fee: "",
    });

    const search = ref({ search: "" });
    const categories = ref([]);

    const searchCategory = () => {
      axios
        .post(route("categories.search"), search.value)
        .then((res) => {
          categories.value = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const escapeSpace = (e) => {
      if (e.keyCode === 32) {
        e.stopImmediatePropagation();
        search.value.client = search.value.client + " ";
      }
    };

    const submit = () => {
      form.post(route("expenses.store"), {
        onSuccess: () => form.reset(),
      });
    };

    return {
      submit,
      searchCategory,
      escapeSpace,
      form,
      search,
      categories,
    };
  },
};
</script>
