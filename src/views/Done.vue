<template>
<div class="min-h-full flex items-center justify-center">
  <div class="max-w-md w-full">
    <NavList />
    <div class="px-6 py-4 transition-all duration-300">
      <div v-if="doneList.length" class="divide-y">
        <TodoItem
          v-for="it in doneList"
          :key="it.id"
          :name="it.name"
          @confirm="remove(it.id)"
          btn="Delete"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NavList from "../components/NavList.vue"
import TodoItem from "../components/TodoItem.vue"

export default {
  components: { TodoItem, NavList },
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