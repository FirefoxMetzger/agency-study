<template>
  <div class="md-layout">
    <div class="md-layout-item md-layout md-size-100">
      <div class="md-layout-item" v-for="tick in ticks" :key="tick">{{tick}}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    points: {
      type: Number,
      default: 5
    },
    ticks: {
      type: Array,
      default: () => [
        '',
        'totally disagree',
        'partially disagree',
        'neither agree nor disagree',
        'partially agree',
        'totally agree'
      ]
    }
  },
  data () {
    return {
    }
  }
}
</script>
