<template>
  <div v-if="doneList.length">
    <TodoItem
      v-for="it in doneList"
      :key="it.id"
      :name="it.name"
      @confirm="remove(it.id)"
      btn="Delete"
    />
  </div>
</template>

<script>
import TodoItem from "../components/TodoItem.vue"

export default {
  components: { TodoItem },
  data() {
    return {
      doneList: this.$store.state.doneList,
    }
  },
  methods: {
    remove(id) {
      this.$store.commit('remove', id)
    }
  }
}
</script>

<style>

</style>