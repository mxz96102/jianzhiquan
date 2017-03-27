<template>
  <div id="app">
    <router-view class="main-body"></router-view>
  </div>

</template>
<script>

export default {
  name: 'app',
}
</script>

<style>
html,body{
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}

.main-body{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
</style>
