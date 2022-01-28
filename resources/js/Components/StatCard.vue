<template>
	<div class="font-sans bg-gray-800 text-white shadow-md text-gray-900 rounded-md p-[7px] w-full overflow-x-auto max-w-sm mx-auto flex flex-col justify-center items-center">
	  <p class="text-sm capitalize">{{title}}</p>
	  <p class="text-base font-bold text-sky-700">{{parseFloat(value).toLocaleString('fr-FR')}}</p>
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