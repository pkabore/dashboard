<template>
  <div
    class="
      fixed
      inset-0
      w-screen
      h-screen
      flex
      items-center
      justify-center
      z-20
      transition
      duration-300
      ease-in-out
    "
    style="background-color: rgba(0, 0, 0, .5);"
  >
    <div class="bg-white rounded-3xl w-full max-w-sm px-4 pt-4 z-30 drop-shadow-lg">
      <h2 class="my-3 text-lg text-center">
        {{ message }}
      </h2>
      <div class="pt-3 pb-2 flex items-center justify-end space-x-2">
        <button
          class="
            btn bg-blue-600 hover:bg-blue-700 text-white
          "
          @click="$emit('cancel')"
        >
          Annuler
        </button>
        <button
          class="
            btn
          "
          :class="{'text-red-600 bg-white border border-slate-300 hover:border-red-600' : type == 'Supprimer', 'bg-green-600 hover:bg-green-700 text-white': type != 'Supprimer'}"
          @click="$emit('confirm')"
        >
          {{ type }}
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import DeleteIcon from "@/Components/DeleteIcon.vue";
import CheckIcon from "@/Components/CheckIcon.vue";

export default {
  components: {
    DeleteIcon,
    CheckIcon,
  },
  props: {
    open: Boolean,
    type: String,
    message: String,
  }
};
</script>