<template>
  <div class="max-w-screen mt-8 border rounded-lg">
    <div class="bg-green-500 px-6 py-4 text-white flex justify-between">
      <div>
        <router-link :class="`py-1 px-3 rounded-md text-white font-bold select-none ${route.name === 'todo' ? 'bg-green-600': ''}`" to='todo'>Todo</router-link>
        <router-link :class="`py-1 px-3 rounded-md text-white font-bold select-none ${route.name === 'done' ? 'bg-green-600': ''}`" to='done'>Done</router-link>
      </div>
    </div>
    <div class="flex px-6">
      <div v-if="todoList.length" class="flex items-center mr-10">
        <svg class="w-5 inline-block fill-current" viewBox="0 0 24 24">
          <path :d="mdiCheckCircleOutline" />
        </svg>
        <span class="ml-1">{{ todoList.length }}</span>
      </div>

      <div v-if="doneList.length" class="flex items-center">
        <svg class="w-5 inline-block fill-current" viewBox="0 0 24 24">
          <path :d="mdiCheckCircle" />
        </svg>
        <span class="ml-1">{{ doneList.length }}</span>
      </div>
    </div>
  </div>
  <div class="px-6 py-4 transition-all duration-300">
    <router-view />
  </div>
</template>

<script>
import { useRoute } from "vue-router"
import { mdiCheckCircle, mdiCheckCircleOutline } from '@mdi/js'

export default {
  data() {
    return {
      todoList: this.$store.state.todoList,
      doneList: this.$store.state.doneList,
    }
  },
  setup() {
    const route = useRoute()

    return { route, mdiCheckCircle, mdiCheckCircleOutline }
  },
}
</script>

