<template>
  <div class="flex justify-center max-w-3xl mx-auto px-2">
    <div class="w-full">
      <h2 class="my-4 border-b text-center text-gray-600 font-bold text-2xl">
        Ajouter rayon
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
          <label for="name" class="text-sm font-bold text-gray-800"
            >Rayon:</label
          >
          <input
            id="name"
            type="text"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-500': form.errors.name }"
            v-model="form.name"
            placeholder="Nom du rayon"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.name">
            {{ form.errors.name }}
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
            Créer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import Layout from "@/Pages/Layout.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { CheckIcon } from "@heroicons/vue/solid";

export default {
  layout: Layout,

  components: {
    CheckIcon,
  },

  props: {
    message: String,
  },

  setup() {
    const form = useForm({
      name: "",
    });

    const submit = () => {
      form.post(route("categories.store"), {
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
