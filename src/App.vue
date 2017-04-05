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
  height: 100vh;
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
  margin: 0;
}

.main-body{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  margin: auto;
  height: 100vh;
  width: 100%;
}
div{
  box-sizing: border-box;
}
</style>
