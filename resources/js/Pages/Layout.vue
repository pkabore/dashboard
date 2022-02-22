<template>
  <Head title="Admin" />
  <div class="min-h-screen relative">
    <div
      class="
        w-[180px]
        transform
        fixed
        inset-y-0
        left-0
        transition
        ease-in-out
        duration-300
        shadow-xl shadow-sky-700
        z-10
        md:visible
        bg-slate-700
        text-white text-base
        py-4
        px-2
        space-y-2
        print:hidden
        md:transform-none
      "
      :class="{
        'invisible -translate-x-full': sidebar,
        'translate-x-0': !sidebar,
      }"
    >
      <Link
        @click="sidebar=!sidebar"
        href="/"
        class="
          flex
          items-center
          w-full
          pl-3
          py-2
          hover:bg-slate-800
          rounded-full
          transition
          ease-out
          duration-200
        "
        :class="{
          'bg-slate-800': $page.component.startsWith('Stats'),
        }"
      >
        <ChartIcon class="h-5 w-5 mr-4 text-gray-200" />
        <span>Analytics</span>
      </Link>
      <Link
        @click="sidebar=!sidebar"
        :href="route('sales.index')"
        class="
          flex
          items-center
          w-full
          pl-3
          py-2
          rounded-full
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
        :class="{
          'bg-slate-800': $page.component.startsWith('Sale'),
        }"
      >
        <ShoppingIcon class="h-5 w-5 mr-4 text-gray-200" />
        <span>Ventes</span>
      </Link>

      <Link
        @click="sidebar=!sidebar"
        :href="route('articles.index')"
        class="
          flex
          items-center
          w-full
          pl-3
          py-2
          rounded-full
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
        :class="{
          'bg-slate-800': $page.component.startsWith('Article'),
        }"
      >
        <ArticleIcon class="h-5 w-5 mr-4 text-gray-200" />
        <span>Articles</span>
      </Link>

      <Link
        @click="sidebar=!sidebar"
        :href="route('categories.index')"
        class="
          flex
          items-center
          w-full
          pl-3
          py-2
          rounded-full
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
        :class="{
          'bg-slate-800': $page.component.startsWith('Category'),
        }"
      >
        <FolderIcon class="h-5 w-5 mr-4 text-gray-200" />
        <span>Rayons</span>
      </Link>

      <Link
        @click="sidebar=!sidebar"
        :href="route('bills.index')"
        class="
          flex
          items-center
          w-full
          pl-3
          py-2
          rounded-full
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
        :class="{
          'bg-slate-800': $page.component.startsWith('Bill'),
        }"
      >
        <PrintIcon class="h-5 w-5 mr-4 text-gray-200" />
        <span>Factures</span>
      </Link>

      <Link
        @click="sidebar=!sidebar"
        :href="route('quotes.index')"
        class="
          flex
          items-center
          w-full
          pl-3
          py-2
          rounded-full
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
        :class="{
          'bg-slate-800': $page.component.startsWith('Quote'),
        }"
      >
        <FormatedListIcon class="h-5 w-5 mr-4 text-gray-200" />
        <span>Devis</span>
      </Link>

      <Link
        @click="sidebar=!sidebar"
        :href="route('clients.index')"
        class="
          flex
          items-center
          w-full
          pl-3
          py-2
          rounded-full
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
        :class="{
          'bg-slate-800': $page.component.startsWith('Client'),
        }"
      >
        <GroupIcon class="h-5 w-5 mr-4 text-gray-200" />
        <span>Clients</span>
      </Link>
      <Link
        @click="sidebar=!sidebar"
        :href="route('expenses.index')"
        class="
          flex
          items-center
          w-full
          pl-3
          py-2
          rounded-full
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
        :class="{
          'bg-slate-800': $page.component.startsWith('Expense'),
        }"
      >
        <PaymentIcon class="h-5 w-5 mr-4 text-gray-200" />
        <span>Dépenses</span>
      </Link>
      <Link
        @click="sidebar=!sidebar"
        :href="route('logout')"
        method="post"
        as="button"
        class="
          w-full
          flex
          items-center
          pl-3
          py-2
          rounded-full
          hover:bg-slate-800
          transition
          ease-out
          duration-200
        "
      >
        <LogoutIcon class="h-5 w-5 mr-4 text-gray-200" />
        <span>Logout</span>
      </Link>
    </div>
    <div
      class="min-h-full absolute top-0 inset-x-0 md:left-[180px]"
    >
      <div
        class="md:hidden print:hidden p-2 text-gray-800 flex items-center justify-between"
      >
        <span class="text-xl font-medium">Market Admin</span>
        <MenuIcon @click="sidebar = !sidebar" class="w-5 h-5 text-gray-600" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import { Link, Head } from "@inertiajs/inertia-vue3";
import LogoutIcon from "@/Components/LogoutIcon.vue";
import GroupIcon from "@/Components/GroupIcon.vue";
import InvoiceIcon from "@/Components/InvoiceIcon.vue";
import ArticleIcon from "@/Components/ArticleIcon.vue";
import PaymentIcon from "@/Components/PaymentIcon.vue";
import PrintIcon from "@/Components/PrintIcon.vue";
import ChartIcon from "@/Components/ChartIcon.vue";
import MenuIcon from "@/Components/MenuIcon.vue";
import CheckListIcon from "@/Components/CheckListIcon.vue";
import ShoppingIcon from "@/Components/ShoppingIcon.vue";
import FolderIcon from "@/Components/FolderIcon.vue";
import FormatedListIcon from "@/Components/FormatedListIcon.vue";
import { ref } from "vue";

export default {
  components: {
    Link,
    Head,
    LogoutIcon,
    GroupIcon,
    ArticleIcon,
    InvoiceIcon,
    MenuIcon,
    CheckListIcon,
    PrintIcon,
    PaymentIcon,
    ChartIcon,
    ShoppingIcon,
    FolderIcon,
    FormatedListIcon,
  },

  setup() {
    const sidebar = ref(true);
    return { sidebar };
  },
};
</script>

<style>
.family-mono {
  font-family: "Ubuntu Mono", "ui-monospace", "Ubuntu Mono", monospace;
}
</style>