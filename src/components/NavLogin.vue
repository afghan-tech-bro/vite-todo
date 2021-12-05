<template>
<nav class="bg-gray-800 mx-auto px-2 lg:px-8 relative flex items-center justify-between h-16">
  <div>
    <router-link to="home" class="text-white px-3 py-2 rounded-md text-sm font-medium">Home</router-link>
    <router-link to="todo" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Lists</router-link>
  </div>
  <div class="absolute inset-y-0 right-0 flex items-center pr-2" v-if="!email">
    <router-link to="signin" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign In {{email}}</router-link>
    <router-link to="register" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</router-link>
  </div>
  <div class="absolute inset-y-0 right-0 flex items-center pr-2" v-if="email">
    <button @click="logout" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout{{email}}</button>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
      email: this.$store.state.user.email,
    }
  },
  methods: {
    logout() {
      this.$router.push('/signin')
    }
  },
  watch: {
    email() {
      console.log(email)
    }
  }
}
</script>
