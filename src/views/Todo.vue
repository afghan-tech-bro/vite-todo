<template>
  <div v-if="todoList.length">
    <TodoItem
      v-for="it in todoList"
      :key="it.id"
      :name="it.name"
      @confirm="finish(it.id)"
      btn="Done"
    />
  </div>
  <div class="">
    <input
      type="text"
      class=""
      placeholder="todo"
      v-model.trim="todo"
      @keyup.enter="addTodo(todo); todo = '';"
    />
    <button
      class=""
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