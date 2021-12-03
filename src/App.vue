<template>
  <div class="">
    <div class="">
      <div>
        <router-link :class="`${route.name === 'todo' ? 'bg-green-600' : ''}`" to='todo'>Todo {{ todoList.length }}</router-link>
        <router-link :class="`${route.name === 'done' ? 'bg-green-600' : ''}`" to='done'>Done {{ doneList.length }}</router-link>
      </div>
    </div>
    <div class="">
      <div v-if="todoList.length" class="">
        <svg class="w-5" viewBox="0 0 24 24">
          <path :d="mdiCheckCircleOutline" />
        </svg>
        <span class="ml-1">{{ todoList.length }}</span>
      </div>

      <div v-if="doneList.length" class="flex items-center">
        <svg class="w-5" viewBox="0 0 24 24">
          <path :d="mdiCheckCircle" />
        </svg>
        <span class="ml-1">{{ doneList.length }}</span>
      </div>
    </div>
  </div>
  <div class="">
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

