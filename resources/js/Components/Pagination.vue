<template>
  <div v-if="links.length > 3">
    <ul v-if="!links[1].url.includes('search')" class="w-full flex justify-center items-center flex-wrap -mb-1">
      <li v-for="(link, key) in links">
        <Link v-if="link.url === null" :key="key" class="mb-1 mr-1 px-4 py-2 text-gray-400 text-sm leading-4 border rounded-full" v-html="link.label" />
        <Link v-else :preserveScroll="true" :key="`link-${key}`" class="mb-1 mr-1 px-3 py-2 focus:text-white text-sm leading-4 hover:bg-blue-600 hover:text-white border focus:border-blue-500 hover:border-blue-500 rounded-full" :class="{ 'bg-blue-600 border-transparent text-white': link.active }" :href="link.url" v-html="link.label" />
      </li>
    </ul>

    <ul v-else class="w-full flex justify-center items-center flex-wrap -mb-1">
      <li v-for="(link, key) in links">
        <button v-if="link.url === null" :key="key" class="mb-1 mr-1 px-4 py-2 text-gray-400 text-sm leading-4 border rounded-full" v-html="link.label" ></button>
        <button v-else @click.prevent="emitPaginate(link.url)" :key="`link-${key}`" class="mb-1 mr-1 px-3 py-2 focus:text-white text-sm leading-4 hover:bg-blue-600 hover:text-white border focus:border-blue-500 hover:border-blue-500 rounded-full" :class="{ 'bg-blue-600 border-transparent text-white': link.active }" v-html="link.label">
        </button>
      </li>
    </ul>
</div>    
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'

export default {
  components: {
    Link,
  },
  props: {
    links: Array,
  },

  setup(props, {emit}){
    const emitPaginate = (url) => {
      emit('paginate', url);
    }

    return {
      emitPaginate
    };
  }
}
</script>
