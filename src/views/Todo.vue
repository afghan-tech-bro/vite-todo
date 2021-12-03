<template>
  <div v-if="todoList.length" class="divide-y">
    <TodoItem
      v-for="it in todoList"
      :key="it.id"
      :name="it.name"
      @confirm="finish(it.id)"
      btn="Done"
    />
  </div>
  <div class="flex rounded-md">
    <input
      type="text"
      class="border rounded-none rounded-l-md px-3 py-1.5 flex-1 focus:outline-none"
      placeholder="todo"
      v-model.trim="todo"
      @keyup.enter="addTodo(todo); todo = '';"
    />
    <button
      class="border rounded-none rounded-r-md px-4 border-green-600 bg-green-600 text-white select-none"
      @click="addTodo(todo); todo = '';"
    >Add</button>
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue"

export default {
  components: { TodoItem },
  data() {
    return {
      todoList: this.$store.state.todoList
    }
  },
  methods: {
    addTodo(todo) {
      this.$store.commit('addTodo', todo)
    },
    finish(id) {
      this.$store.commit('finish', id)
    }
  }
}
</script>