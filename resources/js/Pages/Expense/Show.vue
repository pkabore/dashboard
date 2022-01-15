<template>
  <div class="flex justify-center max-w-3xl mx-auto px-2">
    <div class="w-full">
      <h2 class="my-4 border-b text-center text-gray-600 font-bold text-2xl">
        Éditer rayon
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
            :class="{ 'border-amber-700': form.errors.name }"
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
              @click="openModal"
              v-if="category.id != 1"
              class="
                bg-red-600
                text-white
                py-2
                px-4
                mr-4
                text-sm
                shadow-md shadow-red-700/50
                rounded-md
                hover:bg-red-700
                transition
                ease-in-out
                duration-300
                focus:outline-none
              "
            >
              Supprimer
            </button>
          </div>
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
            Modifier
          </button>
        </div>
        <Dialog
          as="div"
          @close="closeModal"
          class="max-w-sm mx-auto relative z-30"
          :open="isOpen"
        >
          <div class="mx-auto overflow-y-auto">
            <div class="px-4 text-center">
              <span
                class="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div
                class="
                  inline-block
                  w-full
                  mx-auto
                  max-w-md
                  p-6
                  my-8
                  overflow-hidden
                  text-left
                  align-middle
                  transition-all
                  transform
                  bg-white
                  shadow-md
                  rounded-2xl
                "
              >
                <DialogTitle as="h3" class="text-lg leading-6 text-gray-900">
                  Confirmer la suppression ?
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-red-700 font-bold">
                    Attention , cette opération supprimera aussi les articles
                    associés!
                  </p>
                </div>

                <div class="mt-4 flex items-center">
                  <button
                    type="button"
                    class="
                      bg-red-600
                      mr-2
                      text-white
                      py-2
                      px-4
                      mr-4
                      text-sm
                      shadow-md shadow-red-700/50
                      rounded-md
                      hover:bg-red-700
                      transition
                      ease-in-out
                      duration-300
                      focus:outline-none
                    "
                    @click="deleteCategory"
                  >
                    Oui, supprimer
                  </button>
                  <button
                    type="button"
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
                    @click="isOpen = false"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </form>
    </div>
  </div>
</template>


<script>
import CheckIcon from "@/Components/CheckIcon.vue";
import Layout from "@/Pages/Layout.vue";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
import { Dialog, DialogOverlay, DialogTitle } from "@headlessui/vue";

export default {
  layout: Layout,
  components: {
    CheckIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
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
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
      deleteCategory,
    };
  },
};
</script>
