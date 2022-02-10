<template>
	<div class="text-center p-[3px] w-full overflow-x-auto max-w-sm mx-auto">
	  <p class="text-xs md:text-sm text-sky-700">{{title}}</p>
	  <p class="mt-1 text-base md:text-sm text-neutral-700">{{parseFloat(value).toLocaleString('fr-FR')}}</p>
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