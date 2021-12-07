<template>
<nav class="bg-gray-800 mx-auto px-2 lg:px-8 relative flex items-center justify-between h-16">
  <div>
    <router-link to="home" class="text-white px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
    <router-link to="todo" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Lists</router-link>
  </div>
  <div class="absolute inset-y-0 right-0 flex items-center pr-2" v-if="!user">
    <router-link to="signin" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In</router-link>
    <router-link to="register" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</router-link>
  </div>
  <div class="absolute inset-y-0 right-0 flex items-center pr-2" v-if="user">
    <div to="register" class="text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Name: {{ user.displayName }}</div>
    <button @click="logout" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</button>
  </div>
</nav>

<router-view />
</template>

<script>
import db from './firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore'

const auth = getAuth()
let todoListener = null

export default {
  created() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
      if (user) {
        this.$router.push('/todo')
        this.subscribeTodo()
      } else {
        this.$router.push('/signin')
        this.unsubscribeTodo()
      }
    })
  },
  data() {
    return {
      user: this.$store.state.user,
      todoPrint: []
    }
  },
  methods: {
    logout() {
      auth.signOut()
    },
    // Listen to todo updates
    subscribeTodo() {
      const q = query(collection(db, 'users2'), orderBy('timestamp', 'desc'))
      todoListener = onSnapshot(q, (snaps) => {
        // Loop through documents in database
        snaps.forEach((doc) => {
          const entry = doc.data().name + ': ' + doc.data().text
          todoPrint.append(entry)
        });
      });
    },
    // Unsubscribe from todo updates
    unsubscribeTodo() {
      if (todoListener != null) {
        todoListener()
        todoListener = null
      }
    }
  },
}
</script>
