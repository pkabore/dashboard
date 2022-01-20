<template>
	<Link
	  class="
	    border text-sky-700 text-sm py-1 px-2 hover:border-sky-600 transition duration-300 ease-in-out rounded-md focus:outline-none flex items-center
	  "
	>
	  <AddIcon class="h-4 w-4 mr-1" />
	  <span>Créér</span>
	</Link>
</template>

<script>
import AddIcon from "@/Components/AddIcon.vue";
import {Link} from "@inertiajs/inertia-vue3";

export default{
	components: {AddIcon, Link}
}
</script>