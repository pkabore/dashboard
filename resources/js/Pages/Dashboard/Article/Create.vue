<template>
  <div class="flex justify-center max-w-3xl mx-auto px-2">
    <div class="w-full">
      <h2 class="my-4 border-b text-center text-gray-600 font-bold text-2xl">
        Ajouter article
      </h2>
      <form @submit.prevent="submit" method="post" class="mx-auto max-w-sm">
        <div
          v-if="message"
          class="
            mb-1
            font-medium
            text-sm text-green-600
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
            class="input rounded shadow-md text-sm"
            :class="{ 'border-red-500': form.errors.name }"
            v-model="form.name"
            placeholder="Nom de l'article"
          />
          <div class="text-red-500 text-xs mt-1" v-if="form.errors.name">
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
            class="input rounded shadow-md text-sm"
            :class="{ 'border-red-500': form.errors.stock }"
            v-model="form.stock"
            placeholder="Stock initial"
          />
          <div class="text-red-500 text-xs mt-1" v-if="form.errors.stock">
            {{ form.errors.stock }}
          </div>
        </div>
        <div class="relative mt-[5px]">
          <label for="category" class="text-sm font-bold text-gray-800"
            >Catégorie:</label
          >
          <Listbox id="category" v-model="form.category_id">
            <div class="mt-1">
              <ListboxButton
                class="
                  relative
                  w-full
                  py-2
                  pl-3
                  pr-10
                  text-sm text-left
                  bg-white
                  rounded-lg
                  shadow-md
                  cursor-default
                  focus:outline-none
                "
              >
                <span class="block truncate">{{
                  form.category_id.name || "Sélectionner"
                }}</span>
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
                  absolute
                  w-full
                  py-1
                  mt-1
                  overflow-y-scroll
                  bg-white
                  rounded-md
                  shadow-lg
                  max-h-60
                  focus:outline-none
                "
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="category in categories"
                  :key="category.name"
                  :value="category"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'text-amber-600 bg-amber-200' : 'text-gray-900',
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
                        text-amber-600
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
            class="text-red-500 text-xs mt-1"
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
            class="input rounded shadow-md text-sm"
            :class="{ 'border-red-500': form.errors.price }"
            v-model="form.price"
            placeholder="Prix unitaire"
          />
          <div class="text-red-500 text-xs mt-1" v-if="form.errors.price">
            {{ form.errors.price }}
          </div>
        </div>
        <div class="mx-auto mt-[5px]">
          <label for="description" class="text-sm font-bold text-gray-800"
            >Description:</label
          >
          <textarea
            id="description"
            type="text"
            class="input rounded shadow-md text-sm"
            :class="{ 'border-red-500': form.errors.description }"
            v-model="form.description"
            placeholder="Description de l'article"
          >
          </textarea>
          <div class="text-red-500 text-xs mt-1" v-if="form.errors.description">
            {{ form.errors.description }}
          </div>
        </div>
        <div class="mx-auto mt-[5px]">
          <label for="tax" class="text-sm font-bold text-gray-800">Taxe:</label>
          <input
            id="tax"
            type="text"
            class="input rounded shadow-md text-sm"
            :class="{ 'border-red-500': form.errors.tax }"
            v-model="form.tax"
            placeholder="Taxe"
          />
          <div class="text-red-500 text-xs mt-1" v-if="form.errors.tax">
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
            class="input rounded shadow-md text-sm"
            :class="{ 'border-red-500': form.errors.expires_at }"
            v-model="form.expires_at"
            placeholder="Date d'expiration"
          />
          <div class="text-red-500 text-xs mt-1" v-if="form.errors.expires_at">
            {{ form.errors.expires_at }}
          </div>
        </div>
        <div class="flex items-center justify-end mx-auto mt-4">
          <button
            type="submit"
            class="
              bg-blue-600
              text-white
              py-1
              px-2
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
            Ajouter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import Dashboard from "@/Pages/Dashboard.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

export default {
  layout: Dashboard,

  components: {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    SelectorIcon,
  },

  props: {
    categories: Array,
    message: String,
  },

  setup(props) {
    const form = useForm({
      category_id: "",
      name: "",
      description: "",
      price: "",
      tax: "",
      expires_at: "",
      stock: "",
    });

    const submit = () => {
      form.post(route("articles.store"), {
        onSuccess: () => form.reset(),
      });
    };

    return {
      form,
      submit,
    };
  },
};
</script>
