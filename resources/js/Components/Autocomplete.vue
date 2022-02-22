<template>
  <div class="max-w-full relative" :id="id">
    <div class="relative">
      <input
        class="pl-3 pr-10 py-2 focus:outline-none sm:text-sm input"
        @focus="
          $emit('search', keyword);
          open = true;
        "
        @input="
          $emit('search', keyword);
          open = true;
        "
        @click="open = true"
        v-model="keyword"
        placeholder="Rechercher . . ."
        @blur="open = false"
      />
      <span
        class="
          absolute
          inset-y-0
          right-0
          flex
          items-center
          pr-2
          pointer-events-none
        "
      >
        <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
      </span>
    </div>
    <div
      v-show="open && items.length"
      class="
        absolute
        z-10
        w-full
        py-1
        mt-[3px]
        text-sm
        bg-white
        border
        rounded-3xl
        shadow-lg
        max-h-60
        overflow-auto
      "
    >
      <ul>
        <li
          v-for="(item, key) in items"
          :key="key"
          @mousedown="
            selected = item;
            open = false;
            keyword = selected.name
              ? selected.name
              : selected.fname + ' ' + selected.lname;
            $emit('choice', selected);
          "
          class="
            hover:text-blue-900 hover:bg-blue-100
            text-gray-900
            cursor-default
            select-none
            relative
            py-2
            pl-2
          "
        >
          {{ item.name ? item.name : `${item.fname} ${item.lname}` }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SelectorIcon from "@/Components/SelectorIcon.vue";
import { ref } from "vue";
export default {
  components: {
    SelectorIcon,
  },
  props: {
    items: Array,
    default: Object,
    id: String,
  },
  setup(props) {
    const open = ref(false);
    const selected = ref(props.default);
    const keyword = ref(props.default.name);
    return {
      open,
      selected,
      keyword,
    };
  },
};
</script>