<template>
  <div>
    <md-toolbar>
      <img id="logo" class="logo" src="/static/logo.png">
      <div class="md-title">An interesting Study</div>
    </md-toolbar>
    <div id="app">
      <router-view/>
    </div>
    <div id="Footer" class="md-alignment-center-left">
      <div class="md-layout-item">
        <img class="logo" src="/static/EU logo.png">
        <img class="logo" src="/static/UU logo.png">
      </div>
      <div class="md-layout-item">This project has received funding from the European Union’s Horizon 2020 research and innovation
programme under the Marie Skłodowska-Curie grant agreement No 765955”.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.md-title{
  font-size: 18pt;
}
.logo {
  width:100px;
  margin:5px;
}
#logo {
  width: 300px;
}
#animatas{
  width: 300px;
}

#Footer{
  background-color: #D3D3D3;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 30px;
}
</style>
