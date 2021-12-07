<template>
<div class="min-h-full flex items-center justify-center">
  <div class="max-w-md w-full">

    <NavList />
  
    <div class="px-6 py-4 transition-all duration-300">
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
        >
          Add
        </button>
      </div>
      
      <div v-if="todoList.length" class="divide-y">
        <TodoItem
          v-for="it in todoList"
          :key="it.id"
          :name="it.name"
          @confirm="finish(it.id)"
          btn="Done"
        />
      </div>
    </div>
  </div>
</div>

</template>

<script>
import NavList from "../components/NavList.vue"
import TodoItem from "../components/TodoItem.vue"
import db from '../firebase'
import {
  addDoc,
  collection,
} from 'firebase/firestore'

export default {
  components: { TodoItem, NavList },
  data() {
    return {
      todoList: this.$store.state.todoList,
      user: this.$store.state.user
    }
  },
  methods: {
    addTodo(todo) {
      this.$store.commit('addTodo', todo)
      addDoc(collection(db, 'users2'), {
        id: todo.id,
        text: todo.name,
        timestamp: Date.now(),
        name: this.user.displayName,
        userId: this.user.uid,
      })
    },
    finish(id) {
      this.$store.commit('finish', id)
    }
  }
}
</script>