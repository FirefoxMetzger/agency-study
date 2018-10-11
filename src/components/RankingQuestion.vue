<template>
  <div class="md-layout-item md-size-100 md-layout md-alignment-center-center">
    <div class="md-layout-item md-size-25">
      <slot></slot>
    </div>
    <draggable v-model="order" class="md-layout">
      <div v-for="element in order" :key="element" class="md-layout-item item">
        {{element}}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  props: {
    value: {
      type: Array,
      default: () => {
        return [
          'Nao',
          'Pepper',
          'Furhat'
        ]
      }
    }
  },
  data () {
    return {
      order: this.value
    }
  },
  watch: {
    order: function () {
      this.$emit('input', this.order)
    },
    value: function () {
      this.order = this.value
    }
  }
}
</script>
