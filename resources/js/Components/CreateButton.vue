<template>
	<Link
	  class="
	    btn bg-blue-500 hover:bg-blue-600 text-white flex items-center
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