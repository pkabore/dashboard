<template>
  <div class="flex justify-center max-w-3xl mx-auto px-2">
    <div
      class="w-screen h-screen fixed inset-0 bg-black opacity-50 z-20"
      v-show="isOpen"
    ></div>
    <div class="w-full">
      <h2 class="my-4 border-b text-center text-gray-600 font-bold text-2xl">
        Éditer client
      </h2>
      <form
        @submit.prevent="submit"
        method="post"
        class="mx-auto relative max-w-sm"
      >
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
          <label for="lname" class="text-sm font-bold text-gray-800"
            >Nom:</label
          >
          <input
            id="lname"
            type="text"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-500': form.errors.lname }"
            v-model="form.lname"
            placeholder="Nom"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.lname">
            {{ form.errors.lname }}
          </div>
        </div>
        <div class="mt-[8px] mx-auto">
          <label for="fname" class="text-sm font-bold text-gray-800"
            >Prénom:</label
          >
          <input
            id="fname"
            type="text"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-500': form.errors.fname }"
            v-model="form.fname"
            placeholder="Prénom"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.fname">
            {{ form.errors.fname }}
          </div>
        </div>
        <div class="mt-[8px] mx-auto">
          <label for="email" class="text-sm font-bold text-gray-800"
            >Email:</label
          >
          <input
            id="email"
            type="text"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-500': form.errors.email }"
            v-model="form.email"
            placeholder="Email"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.email">
            {{ form.errors.email }}
          </div>
        </div>
        <div class="mt-[8px] mx-auto">
          <label for="phone" class="text-sm font-bold text-gray-800"
            >Tel:</label
          >
          <input
            id="phone"
            type="text"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-500': form.errors.phone }"
            v-model="form.phone"
            placeholder="Numéro de téléphone"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.phone">
            {{ form.errors.phone }}
          </div>
        </div>
        <div class="mt-[8px] mx-auto">
          <label for="address" class="text-sm font-bold text-gray-800"
            >Addresse:</label
          >
          <input
            id="address"
            type="text"
            class="input rounded p-2 text-base"
            :class="{ 'border-red-500': form.errors.address }"
            v-model="form.address"
            placeholder="Addresse"
          />
          <div class="text-red-700 text-xs mt-1" v-if="form.errors.address">
            {{ form.errors.address }}
          </div>
        </div>
        <div class="flex items-center justify-end mx-auto mt-4">
          <div class="flex items-center justify-center">
            <button
              type="button"
              @click="openModal"
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
    @confirm="deleteClient()"
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
    Dialog,
  },

  props: {
    message: String,
    client: Object,
  },

  setup(props) {
    const isOpen = ref(false);

    const form = useForm({
      fname: props.client.fname,
      lname: props.client.lname,
      email: props.client.email,
      phone: props.client.phone,
      address: props.client.address,
    });

    const deleteForm = useForm({
      id: props.client.id,
    });

    const submit = () => {
      form.put(route("clients.update", props.client.id));
    };

    const deleteClient = () => {
      isOpen.value = false;
      deleteForm.delete(route("clients.destroy", props.client.id));
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
      deleteClient,
    };
  },
};
</script>