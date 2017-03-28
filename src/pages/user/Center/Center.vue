<template>
  <div class="center">
    <div class="center-head">
      <div class="center-avatar">
          <img src="../../../assets/logo.png" alt="">
      </div>
      <div class="center-info">
          <h1 class="center-name">{{username}}</h1>
          <p>学校：{{school}}</p>
          <p>手机号：{{phonenum}}</p>
      </div>
    </div>
    <ul class="center-list">
      <li>
        钱包余额 <span class="center-list-im">359</span><span class="center-list-less">明细/工资/提现</span><i class="fa fa-angle-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/axios'
export default {
  name: '',
  data () {
    let __this = this;

    axios.get("user/userInfo")
      .then((res)=>{
        console.log(res);
        if(res.data.code === '401'){
          alert('请登录')
          location.hash = '/'
        }
        [__this.username,__this.phonenum,__this.school]

      })
      .catch(function (error) {

      });

    return {
      username: "Loading",
      phonenum:"",
      school:""
    }
  }
}
</script>

<style scoped>
.center-head{
    width: 100%;
    display: flex;
    border-bottom: #ddd 1px solid;
}
.center-avatar{
    width: 50%;
}
.center-avatar>img {
    width: 80%;
    height: 80%;
    margin: 20px auto;
}
.center-info{
    width: 50%;
    text-align: left;
}
.center-list{
    padding: 0;
    list-style: none;
    margin: 0 auto;
}
.center-list>li{
    border-bottom: #ddd 1px solid;
    line-height: 3rem;
    height: 3rem;
}
.center-list-im{
    margin-left: 1.5rem;
    font-size: 1.2rem;
    color: #ff3300;
}
.center-list-less{
    margin-left: 1.5rem;
    font-size: 0.9rem;
}
.fa-angle-right{
    margin-left: 1.5rem;
}
</style>
