<template>
  <div class="flex justify-center max-w-3xl mx-auto px-2">
    <div class="w-full">
      <h2 class="my-4 text-center text-gray-600 font-bold text-2xl">
        Enregistrer dépense
      </h2>
      <form @submit.prevent="submit" method="post" class="mx-auto rounded-3xl bg-white p-4 max-w-sm">
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
          <Autocomplete @choice="(category) => form.category_id = category.id" id="category" :items="categories" @search="(keyword) => {search.search=keyword; searchCategory()}" :default="{name: '', id:1}" />
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
              btn
              hover:bg-blue-700
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
import Autocomplete from "@/Components/Autocomplete.vue";
import CheckIcon from "@/Components/CheckIcon.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import axios from "axios";

export default {
  layout: Layout,

  components: {
    CheckIcon,
    Autocomplete,
    SearchIcon,
  },

  props: {
    message: String,
  },

  setup() {
    const form = useForm({
      category_id: 0,
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
          (err);
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
