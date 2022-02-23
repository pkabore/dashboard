<template>
  <div class="flex justify-center max-w-3xl mx-auto px-2">
    <div class="w-full mb-3">
      <h2 class="my-4 text-center text-gray-600 font-bold text-2xl">
        Ajouter article
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
          <label for="name" class="text-sm font-bold text-gray-800">Nom:</label>
          <input
            id="name"
            type="text"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-700': form.errors.name }"
            v-model="form.name"
            placeholder="Nom de l'article"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.name">
            {{ form.errors.name }}
          </div>
        </div>

        <div class="mx-auto mt-[5px]">
          <label for="expires_at" class="text-sm font-bold text-gray-800"
            >Stock:</label
          >
          <input
            id="stock"
            type="text"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-700': form.errors.stock }"
            v-model="form.stock"
            placeholder="Stock initial"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.stock">
            {{ form.errors.stock }}
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
        <div class="mx-auto mt-[5px]">
          <label for="price" class="text-sm font-bold text-gray-800"
            >Prix unitaire:</label
          >
          <input
            id="price"
            type="text"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-700': form.errors.price }"
            v-model="form.price"
            placeholder="Prix unitaire"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.price">
            {{ form.errors.price }}
          </div>
        </div>
        <div class="mx-auto mt-[5px]">
          <label for="tax" class="text-sm font-bold text-gray-800">Taxe:</label>
          <input
            id="tax"
            type="text"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-700': form.errors.tax }"
            v-model="form.tax"
            placeholder="Taxe"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.tax">
            {{ form.errors.tax }}
          </div>
        </div>
        <div class="mx-auto mt-[5px]">
          <label for="expires_at" class="text-sm font-bold text-gray-800"
            >Date d'expiration:</label
          >
          <input
            id="expires_at"
            type="date"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-700': form.errors.expires_at }"
            v-model="form.expires_at"
            placeholder="Date d'expiration"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.expires_at">
            {{ form.errors.expires_at }}
          </div>
        </div>
        <div class="flex items-center justify-end mx-auto mt-4">
          <button
            type="submit"
            class="
              btn bg-blue-500 hover:bg-blue-600 text-white
            "
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          >
            Ajouter
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
      category_id: "",
      name: "",
      price: "",
      tax: "",
      expires_at: "",
      stock: "",
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
      form.post(route("articles.store"), {
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