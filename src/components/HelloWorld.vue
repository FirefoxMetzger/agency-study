<template>
  <div class="md-layout md-alignment-center-center">
    <div class="md-layout-item md-size-100">
      <p>Welcome to this study about Agency in Robots</p>
      <p>In the future there will be a consent form here.</p>
    </div>
    
    <div class="md-layout-item">
      <md-button class="md-primary md-raised" v-on:click="submit">Agree</md-button>
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
      this.$router.push({path: 'embodiment'})
    }
  }
}
</script>

<style scoped>
.robot-display{
  margin-bottom: 40px;
}

.index-mod-0{

}

.index-mod-1{
  background-color: lightgray;
}
</style>
