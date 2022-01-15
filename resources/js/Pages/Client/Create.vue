<template>
  <div class="flex justify-center max-w-3xl mx-auto px-2">
    <div class="w-full">
      <h2 class="my-4 border-b text-center text-gray-600 font-bold text-2xl">
        Ajouter client
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
            Ajouter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { useForm } from "@inertiajs/inertia-vue3";
import Layout from "@/Pages/Layout.vue";
import CheckIcon from "@/Components/CheckIcon.vue";

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
      fname: "",
      lname: "",
      phone: "",
      email: "",
      address: "",
    });

    const submit = () => {
      form.post(route("clients.store"), {
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
