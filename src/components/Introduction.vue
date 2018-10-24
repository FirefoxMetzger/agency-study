<template>
  <div class="md-layout md-alignment-center-center">
    <div class="md-layout-item md-size-100">
      <h2>Introduction</h2>
    </div>
    <div class="md-layout-item md-size-100">
      This study asks you to rate robots in different scales.
    </div>
    <div class="md-layout-item">
      <md-button class="md-primary md-raised" v-on:click="submit">Next</md-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    submit: function () {
      this.$router.push({path: 'meta'})
    }
  }
}
</script>

<style scoped>

</style>
