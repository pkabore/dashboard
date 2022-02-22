<template>
  <Head title="Login" />
  <div
    class="min-h-screen bg-gray-100 mx-auto flex items-center justify-center px-2"
  >
    <div class="w-full rounded-3xl max-w-sm bg-white border py-4 px-2 sm:px-6">
      <div style="max-width: 300px; margin: 0 auto">
        <h2 class="font-bold text-center text-gray-600 text-xl mt-2 mb-4">
          Admin &nbsp;&nbsp;-&nbsp;&nbsp; Connexion
        </h2>
        <form @submit.prevent="submit" method="post">
          <div
            v-if="status"
            class="mt-16 mb-4 font-medium text-sm text-blue-700"
          >
            {{ status }}
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
                <EmailIcon class="h-5 w-5" />
              </span>
              <input
                id="email"
                type="email"
                class="input rounded py-2 pl-8"
                :class="{ 'border-red-500': form.errors.email }"
                v-model="form.email"
                placeholder="Email"
              />
            </div>
            <div class="text-red-700 text-xs mt-1" v-if="form.errors.email">
              {{ form.errors.email }}
            </div>
          </div>

          <div class="mt-[8px]">
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
            <LockClosedIcon class="h-5 w-5" />
          </span>
          <input
            required
            id="password"
            :type="revealPassword ? 'text' : 'password'"
            class="input py-2 pl-8"
            :class="form.errors.password ? 'border-red-500' : ''"
            v-model="form.password"
            placeholder="Mot de passe"
          />
          <span
            class="
              absolute
              right-2
              pl-2
              inset-y-0
              flex
              items-center
              cursor-pointer
            "
            @click="revealPassword = !revealPassword"
          >
            <EyeIcon v-if="revealPassword" class="h-5 w-5" />
            <EyeOffIcon v-else class="h-5 w-5" />
          </span>
        </div>
        <div class="text-red-700 text-xs mt-1" v-if="form.errors.password">
          {{ form.errors.password }}
        </div>
      </div>

          <div class="flex items-center justify-end mx-auto mt-4">
            <div>
              <button
                type="submit"
                class="
                  bg-blue-600
                text-white
                py-2
                px-4
                text-sm
                rounded-full
                focus:outline-none
                "
                :class="{ 'opacity-25': form.processing }"
                :disabled="form.processing"
              >
                Connexion
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import LockClosedIcon from "@/Components/LockIcon.vue";
import EmailIcon from "@/Components/EmailIcon.vue";
import EyeIcon from "@/Components/EyeIcon.vue";
import EyeOffIcon from "@/Components/EyeOffIcon.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

export default {
  components: {
    Head,
    LockClosedIcon,
    EmailIcon,
    EyeIcon,
    EyeOffIcon
  },

  props: {
    status: String,
  },

  setup() {
    const form = useForm({
      email: "",
      password: "",
      remember: false,
    });

    const revealPassword = ref(false);

    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password"),
      });
    };

    return {
      form,
      submit,
      revealPassword
    };
  },
};
</script>
