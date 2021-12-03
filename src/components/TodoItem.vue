<template>
    <div class="">
    <span>{{ name }}</span>
    <button
      class=""
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