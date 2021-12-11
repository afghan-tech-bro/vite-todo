<template>
  <div>
    <h3>Welcome</h3>
      <p>{{user?.displayName}}</p>
      <p>{{user?.email}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.state.user
    }
  },
}
</script>