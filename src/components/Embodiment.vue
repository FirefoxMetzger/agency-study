<template>
  <md-card>
    <md-card-media>
    </md-card-media>
    <md-card-header>
    Test
    </md-card-header>
    <md-card-content>
    </md-card-content>
  </md-card>
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
