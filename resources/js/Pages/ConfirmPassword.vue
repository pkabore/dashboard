<template>
  <Head title="Securité" />
  <div
    class="min-h-screen max-w-sm mx-auto flex items-center justify-center px-2"
  >
    <div class="w-full bg-white rounded-xl shadow-md py-2 px-2 sm:px-6">
      <div style="max-width: 300px; margin: 0 auto">
        <h2 class="font-bold text-center text-gray-900 text-2xl mt-2 mb-4">
          Accès sécurisé
        </h2>
        <form @submit.prevent="submit" class="w-full mx-auto max-w-xs">
          <div class="text-gray-600">
            Veuillez confirmer votre mot de passe.
          </div>
          <div class="relative">
            <LockIcon class="absolute left-2 top-3 w-5 h-5 text-gray-600" />
            <input
              type="password"
              class="input bg-slate-300 max-w-xs inset-0 pl-8"
              :class="{ 'border-red-500': form.errors.password }"
              v-model="form.password"
              required
              placeholder="Mot de passe"
              autocomplete="current-password"
            />
            <div class="text-red-500 text-xs mt-1" v-if="form.errors.password">
              {{ form.errors.password }}
            </div>
          </div>

          <div class="flex justify-end mt-4">
            <button
              class="
                bg-blue-600
                text-white
                py-1
                px-2
                text-sm
                shadow-md shadow-blue-500/50
                flex
                items-center
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
              Confirmer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LockIcon from "@/Components/LockIcon.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";

export default {
  components: {
    Head,
    LockIcon,
  },

  setup() {
    const form = useForm({
      password: "",
    });

    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset(),
      });
    };

    return {
      form,
      submit,
    };
  },
};
</script>
