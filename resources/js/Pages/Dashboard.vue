<template>
  <Head title="Administration" />
  <div class="min-h-screen relative">
    <div
      class="
        w-40
        transform
        fixed
        inset-y-0
        left-0
        transition
        ease-in-out
        duration-3000
        transition-all
        shadow-2xl shadow-green-500/50
        rounded-br-lg
        md:rounded-none
        z-10
        md:visible
        bg-slate-600
        text-white text-sm
        p-[4px]
        space-y-2
        md:transform-none
      "
      :class="{
        'invisible -translate-x-full': sidebar,
        'translate-x-0': !sidebar,
      }"
    >
      <Link
        :href="route('sales.create')"
        class="
          flex
          items-center
          w-full
          px-1
          py-2
          rounded-md
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
      >
        <ShoppingIcon class="h-5 w-5 mr-2 text-gray-200" />
        <span>Vendre</span>
      </Link>

      <Link
        :href="route('articles.index')"
        class="
          flex
          items-center
          w-full
          px-1
          py-2
          rounded-md
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
      >
        <ArticleIcon class="h-5 w-5 mr-2 text-gray-200" />
        <span>Articles</span>
      </Link>

      <Link
        href="#"
        class="
          flex
          items-center
          w-full
          px-1
          py-2
          rounded-md
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
      >
        <PrintIcon class="h-5 w-5 mr-2 text-gray-200" />
        <span>Factures</span>
      </Link>

      <Link
        :href="route('clients.index')"
        class="
          flex
          items-center
          w-full
          px-1
          py-2
          rounded-md
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
      >
        <GroupIcon class="h-5 w-5 mr-2 text-gray-200" />
        <span>Clients</span>
      </Link>

      <Link
        href="/stats"
        class="
          flex
          items-center
          w-full
          px-1
          py-2
          rounded-md
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
      >
        <ChartIcon class="h-5 w-5 mr-2 text-gray-200" />
        <span>Stats</span>
      </Link>
      <Link
        :href="route('logout')"
        method="post"
        as="button"
        class="
          w-full
          flex
          items-center
          px-1
          py-2
          rounded-md
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
      >
        <LogoutIcon class="h-5 w-5 mr-2 text-gray-200" />
        <span>Logout</span>
      </Link>
    </div>
    <div
      class="min-h-full mx-auto absolute inset-x-0 top-0 md:left-40"
      style=""
    >
      <div
        class="md:hidden p-3 text-slate-800 flex items-center justify-between"
      >
        <span class="text-xl font-medium">Market Admin</span>
        <MenuIcon
          @click="sidebar = !sidebar"
          class="w-5 h-5 cursor-pointer text-gray-600"
        />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import { Head, Link } from "@inertiajs/inertia-vue3";
import LogoutIcon from "@/Components/LogoutIcon.vue";
import GroupIcon from "@/Components/GroupIcon.vue";
import InvoiceIcon from "@/Components/InvoiceIcon.vue";
import ArticleIcon from "@/Components/ArticleIcon.vue";
import AddIcon from "@/Components/AddIcon.vue";
import EditIcon from "@/Components/EditIcon.vue";
import DeleteIcon from "@/Components/DeleteIcon.vue";
import PrintIcon from "@/Components/PrintIcon.vue";
import ChartIcon from "@/Components/ChartIcon.vue";
import MenuIcon from "@/Components/MenuIcon.vue";
import ShoppingIcon from "@/Components/ShoppingIcon.vue";

import { ref } from "vue";

export default {
  components: {
    Head,
    Link,
    LogoutIcon,
    GroupIcon,
    ArticleIcon,
    InvoiceIcon,
    MenuIcon,
    PrintIcon,
    AddIcon,
    EditIcon,
    DeleteIcon,
    ChartIcon,
    ShoppingIcon,
  },

  setup(props) {
    const sidebar = ref(true);
    return { sidebar };
  },
};
</script>
