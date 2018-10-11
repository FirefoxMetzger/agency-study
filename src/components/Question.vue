<template>
  <div class="md-layout-item md-size-100 md-layout md-alignment-center-center">
    <div class="md-layout-item">
      <slot></slot>
    </div>
    <div class="md-layout-item" v-for="tick in indices" :key="tick">
      <md-radio v-model="selected" :value="tick"></md-radio>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number
    },
    points: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      selected: null
    }
  },
  computed: {
    indices: function () {
      var foo = []
      for (var i = 1; i <= this.points; i++) {
        foo.push(i)
      }
      return foo
    }
  },
  watch: {
    selected: function () {
      this.$emit('input', this.selected)
    }
  }
}
</script>
