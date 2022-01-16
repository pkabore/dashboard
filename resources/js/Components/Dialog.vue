<template>
	<div class="bg-black opacity-50 fixed inset-0 transition-all transition duration-300 ease-in-out" :class="{'hidden': !open}">
		<div class="table-cell align-middle">
		<div class="absolute bg-white opacity-100 p-4 rounded-md shadow z-50 max-w-md mx-auto">
			<h2 class="my-3 text-lg text-center">
				{{message}}
			</h2>
			<div class="border-t py-3 flex items-center justify-end space-x-2">
				<button
	              class="
	                bg-white
	                py-2
	                px-4
	                border border-slate-300
	                hover:border-gray-600
	                transition
	                ease-in-out
	                duration-300
	                text-gray-700
	                focus:outline-none
	                rounded-md
	                focus:ring-0
	                text-sm
	              "
	              @click="$emit('cancel')"
	            >
	              Annuler
	            </button>
				<button
	              class="
	                bg-white
	                py-2
	                px-4
	                flex
	                border border-slate-300
	                hover:border-blue-600
	                transition
	                ease-in-out
	                duration-300
	                items-center
	                text-blue-700
	                focus:outline-none
	                rounded-md
	                focus:ring-0
	                text-sm
	              "
	              @click="$emit('confirm')"
	            >
              		<CheckIcon class="h-5 w-5 mr-1" />
              		<span>{{ type }}</span>
            	</button>
			</div>
		</div>
	</div></div>
</template>


<script>
	import CheckIcon from "@/Components/CheckIcon.vue";

	export default({
		components: {
			CheckIcon
		},
		props: {
			open: Boolean,
			type: String,
			message: String
		}
	})
</script>