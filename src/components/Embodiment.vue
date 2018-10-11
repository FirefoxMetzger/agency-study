<template>
  <md-card>
    <md-card-media>
      <img :src="src" style="width:200px;" />
    </md-card-media>
    <md-card-header>
      <h1>{{title}}</h1>
    </md-card-header>
    <md-card-content>
      <slot></slot>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    src: {
      type: String
    }
  },
  data () {
    return {
    }
  }
}
</script>
