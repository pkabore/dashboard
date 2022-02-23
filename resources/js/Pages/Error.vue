<template>
  <Head :title="status.toString()" />
  <div
    class="
      antialiased
      font-sans
      h-screen
      flex
      items-center
      justify-center
      bg-gray-100
    "
  >
    <div
      class="
        max-w-3xl
        rounded-2xl
        bg-white
        shadow-xl
        w-full
        flex
        items-center
        justify-center
        p-2
      "
      style="height: 80%"
    >
      <div>
        <p class="text-gray-600 text-lg xs:text-2xl font-bold pb-4 space-x-2">
          <span class="border-r pr-2">{{ status }}</span>
          <span>{{ message }}</span>
        </p>
        <p class="text-blue-600">
          <Link :href="route('home') || '/'"> Go Home </Link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";

export default {
  props: {
    status: Number,
  },
  components: {
    Link,
    Head,
  },
  setup(props) {
    const messages = {
      401: "Unauthorized",
      403: "Forbidden",
      404: "Not Found",
      405: "Not Allowed",
      419: "Page Expired",
      429: "Too Many Requests",
      500: "Server Error",
      503: "Service Unavailable",
    };

    const message = messages[props.status.toString()];
    return { message };
  },
};
</script>