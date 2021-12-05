<template>
  <div>
    <h3>Welcome</h3>
      <p>{{user.displayName}}</p>
      <p>{{user.email}}</p>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth"
export default {
  data() {
    return {
      user: this.$store.state.user
    }
  },
  created() {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    })
  },
}
</script>