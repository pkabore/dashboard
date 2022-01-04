<template>
	<div id="category" class="p-4 mt-4">
		<h2 class="font-bold">Filter by categories</h2>

		<ul class="mt-4 space-y-2">
			<li v-for="(c, i) in categories" :key="i" class="block">
		        <label class="flex items-center">
		          <input
		            type="checkbox"
		            class="checkbox"
		            name="remember"
		            @input="selectCategories(c.id)"
		          />
		          <span class="ml-2 text-sm font-medium text-gray-900">{{c.name}}</span>
		        </label>
			</li>

		</ul>
	</div>
</template>

<script>
	export default{
		props: {
			categories: Array
		}
	}
</script>