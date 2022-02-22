<template>
	<div class="text-center p-[3px] py-2 w-full overflow-x-auto max-w-sm mx-auto">
	  <p class="text-xs md:text-sm text-sky-700 uppercase">{{title}}</p>
	  <p class="mt-1 text-lg text-neutral-700 family-mono">{{parseFloat(value).toLocaleString('fr-FR')}}</p>
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