<template>
  <Head title="Confirmation" />
  <div
    class="min-h-screen bg-gray-100 mx-auto flex items-center justify-center px-2"
  >
    <div class="w-full rounded-2xl max-w-sm bg-white border py-4 px-2 sm:px-6">
      <div style="max-width: 300px; margin: 0 auto">
        <h2 class="font-bold text-center text-gray-900 text-2xl mt-2 mb-4">
          Accès sécurisé
        </h2>
        <form @submit.prevent="submit" class="w-full mx-auto max-w-xs">
          <div class="text-gray-600">
            Veuillez confirmer votre mot de passe.
          </div>
          <div class="mx-auto">
            <div class="relative">
              <span
                class="
                  absolute
                  pl-2
                  inset-y-0
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <LockIcon class="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="password"
                class="input py-2 max-w-xs pl-8"
                :class="{ 'border-red-500': form.errors.password }"
                v-model="form.password"
                placeholder="Mot de passe"
              />
            </div>
            <div class="text-red-700 text-xs mt-1" v-if="form.errors.password">
              {{ form.errors.password }}
            </div>
          </div>

          <div class="flex justify-end mt-4">
            <button
              class="
                bg-blue-600
                  hover:btn-blue-700
                text-white
                text-sm
                btn
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
