<template>
	<a class="border text-green-700 text-sm py-1 px-2 hover:border-green-600 transition duration-300 ease-in-out rounded-md focus:outline-none flex items-center">
	  <ExportIcon class="h-5 w-5 mr-1" />
	  <span>Sauver</span>
	</a>
</template>

<script>
import ExportIcon from "@/Components/ExportIcon.vue";

export default{
	components: {ExportIcon}
}
</script>