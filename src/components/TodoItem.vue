<template>
    <div class="flex justify-between pl-3 mb-4">
      <span class="pt-4">{{ name }}</span>
      <button
        class="border rounded-md py-1 px-3 mt-4 text-sm text-gray-700 select-none"
        @click="$emit('confirm')"
      >
        {{ btn }}
      </button>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    btn: {
      type: String,
      default: 'Done'
    },
  },
  emits: ['confirm']
}
</script>