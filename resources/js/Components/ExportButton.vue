<template>
	<a class="btn bg-slate-600 hover:bg-slate-700 text-white flex items-center">
	  <ExportIcon class="h-5 w-5 mr-1" />
	  <span>Exporter</span>
	</a>
</template>

<script>
import ExportIcon from "@/Components/ExportIcon.vue";

export default{
	components: {ExportIcon}
}
</script>