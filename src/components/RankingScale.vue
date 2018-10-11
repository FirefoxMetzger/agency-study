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
      default: 3
    },
    ticks: {
      type: Array,
      default: () => [
        '',
        'low',
        'medium',
        'high'
      ]
    }
  },
  data () {
    return {
    }
  }
}
</script>
