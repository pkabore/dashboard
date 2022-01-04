<template>
  <Head title="Log in" />

  <div class="min-h-screen max-w-sm mx-auto flex items-center justify-center px-2">
    <div class="w-full bg-white rounded-xl shadow-md py-2 px-2 sm:px-6">
      <div style="max-width: 300px; margin: 0 auto;">
    <h2 class="font-bold text-center text-gray-600 text-2xl mb-4">
      Admin
      &nbsp;&nbsp;-&nbsp;&nbsp;
      Login
    </h2>
    <form @submit.prevent="submit" method="post">
      <div v-if="status" class="mt-16 mb-4 font-medium text-sm text-sky-600">
        {{ status }}
      </div>
      <div class="relative mx-auto">
        <EmailIcon class="absolute left-2 top-3 w-5 h-5 text-gray-600" />
        <input
          id="email"
          type="email"
          class="input rounded inset-0 pl-8"
          :class="{ 'border-red-500': form.errors.email }"
          v-model="form.email"
          placeholder="Email"
          autocomplete="username"
        />
        <div  class="text-red-500 text-xs mt-1" v-if="form.errors.email">
          {{ form.errors.email }}
        </div>
      </div>

      <div class="relative mx-auto mt-1">
        <LockIcon class="absolute left-2 top-3 w-5 h-5 text-gray-600" />
        <input
          id="password"
          type="password"
          class="input rounded inset-0 pl-8"
          :class="{ 'border-red-500': form.errors.password }"
          v-model="form.password"
          placeholder="Password"
          autocomplete="current-password"
        />
        <div class="text-red-500 text-xs mt-1" v-if="form.errors.password">
          {{ form.errors.password }}
        </div>
      </div>

      <div class="flex items-center justify-end mx-auto mt-4">
        <div>
        <button
          type="submit"
          class="btn hover:bg-gray-100 text-sky-700 border-b-4 shadow-md border border-gray-300 "
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
<!--           <LoginIcon class="mr-2 text-sky-100" />
 -->          <span>Log in</span>
        </button>
        </div>
      </div>
    </form>
  </div>
  </div>
  </div>
</template>

<script>
import LockIcon from "@/Components/LockIcon.vue";
import EmailIcon from "@/Components/EmailIcon.vue";
import LoginIcon from "@/Components/LoginIcon.vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { useForm } from "@inertiajs/inertia-vue3";
import { debounce } from "lodash";

export default {

  components: {
    Head,
    Link,
    LockIcon,
    EmailIcon,
    LoginIcon,
  },

  props: {
    status: String,
  },

  setup(props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false,
    });

    const submit = debounce(() => {
      form.post(route("login"), {
        onFinish: () => form.reset("password"),
      });
    }, 400);

    return {
      form,
      submit,
    };
  },
};
</script>
