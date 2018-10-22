<template>
  <div class="md-layout">
    <div class="md-layout-item md-layout md-size-100">
      <div class="md-layout-item md-size-25"></div>
      <div class="md-layout-item" v-for="tick in ticks" :key="tick"><h3>{{tick}}</h3></div>
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
        'most capabile',
        '',
        'least capabile'
      ]
    }
  },
  data () {
    return {
    }
  }
}
</script>
