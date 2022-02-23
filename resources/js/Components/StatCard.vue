<template>
	<div class="text-center text-sm p-[3px] py-2 w-full overflow-x-auto max-w-sm mx-auto">
	  <p class="sm:text-base text-blue-600 sm:uppercase">{{title}}</p>
	  <p class="mt-1 sm:text-lg family-mono">{{parseFloat(value).toLocaleString('fr-FR')}}</p>
	</div>
</template>

<script>
	export default{
		props: {
			title: String,
			value: Number
		}
	}
</script>