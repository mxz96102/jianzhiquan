<template>
  <div id="app">
    <router-view class="main-body"></router-view>
      <div v-if="$route.path!='/'&&$route.path!='/center'&&$route.path!='/complete'" class="back-button" >
          <a @Click="()=>history.back()"><svg version="1.1" class="back-button" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve">
        <circle id="XMLID_1_" class="st0" cx="12.5" cy="12.5" r="11"/>
        <polyline id="XMLID_12_" class="st1" points="8.5,12.6 15.5,6.7 8.5,12.6 15.5,18.4 "/>
      </svg>
      </a>
      </div>
  </div>
</template>
<script>

export default {
  name: 'app',
  data(){
    return {
      history : history
    }
  }
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
  margin: auto;
  height: 100vh;
  width: 100%;
}
div{
  box-sizing: border-box;
}
.back-button{
    width:40px;
    height: 40px;
    filter:alpha(opacity=75);
    -moz-opacity:0.75;
    opacity: 0.75;
    position: fixed;
    bottom: 20px;
    left: 20px;
    text-align: center;
    z-index: 10;
}
.st0{fill:#7A8783;stroke:#00FFB8;stroke-miterlimit:10;}
.st1{fill:none;stroke:#00FFB8;stroke-miterlimit:10;}
</style>
