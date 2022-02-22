<template>
  <div class="flex justify-center max-w-3xl mx-auto px-2">
    <div class="w-full">
      <h2 class="my-4 text-center text-gray-600 font-bold text-2xl">
        Éditer rayon
      </h2>
      <form @submit.prevent="submit" method="post" class="mx-auto p-4 bg-white rounded-3xl max-w-sm">
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
            :class="{ 'border-blue-700': form.errors.name }"
            v-model="form.name"
            placeholder="Nom du rayon"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.name">
            {{ form.errors.name }}
          </div>
        </div>
        <div class="flex items-center justify-end mx-auto mt-4">
          <div class="flex items-center justify-center">
            <button
              type="button"
              @click="isOpen=!isOpen"
              v-if="category.id != 1"
              class="delete-btn"
            >
              Supprimer
            </button>
          </div>
          <button
            type="submit"
            class="update-btn"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          >
            Modifier
          </button>
        </div>
      </form>
    </div>
  </div>
  <Dialog
    @cancel="isOpen = false"
    @confirm="deleteCategory()"
    :class="{'hidden': !isOpen}"
    type="Supprimer"
    message="Confirmez-vous cette suppression?"
  />
</template>


<script>
import Layout from "@/Pages/Layout.vue";
import CheckIcon from "@/Components/CheckIcon.vue";
import Dialog from "@/Components/Dialog.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

export default {
  layout: Layout,

  components: {
    CheckIcon,
    Dialog
  },

  props: {
    category: Object,
    message: String,
  },

  setup(props) {
    const form = useForm({
      name: props.category.name,
    });

    const deleteForm = useForm({
      id: props.category.id,
    });

    const isOpen = ref(false);

    const deleteCategory = () => {
      isOpen.value = false;
      deleteForm.delete(route("categories.destroy", props.category.id));
    };

    const submit = () => {
      form.put(route("categories.update", props.category.id), {
        onSuccess: () => {},
      });
    };

    return {
      form,
      submit,
      isOpen,
      deleteCategory,
    };
  },
};
</script>
