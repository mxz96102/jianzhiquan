<template>
  <div class="navbar">
    <div @click="()=>location.hash='#/my/job/list'"  class="navbar-item">
      <i class="fa fa-send" ></i>我的兼职
    </div>
    <div @click="()=>location.hash='#/job/list'"  class="navbar-item">
      <i class="fa fa-bullhorn"></i>发现兼职
    </div>
    <div  @click="()=>location.hash='#/center'" class="navbar-item">
      <i class="fa fa-user"></i>个人中心
    </div>
  </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css'

export default {
  name: 'navbar',
  data () {
    return {
      location : window.location
    }
  }
}
</script>

<style scoped>
.navbar{
  height: 3rem;
  margin: 0;
  padding: 0;
  width: 100vw;
  position: absolute;
  bottom: 0;
  border-top: black 1px solid;
  display: flex;
}

.navbar-item{
  width: 33.3vw;
  position: relative;
  float: left;
  height: 3rem;
  line-height: 3rem;
  border: black 1px solid;
  border-bottom: 0;
  box-sizing: border-box;
}
</style>
