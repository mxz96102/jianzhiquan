<template>
  <div class="center">
    <div class="center-head">
      <div class="center-avatar">
          <img src="../../../assets/logo.png" alt="">
      </div>
      <div class="center-info">
          <h1 class="center-name">{{result.username}}</h1>
          <p>学校：{{result.university.uniname}}</p>
          <p>手机号：{{result.phonenum}}</p>
      </div>
    </div>
    <ul class="center-list">
      <li @click="()=>location.hash='#/balance'">
        钱包余额 <span class="center-list-im"></span><span class="center-list-less">明细/工资/提现</span><i class="fa fa-angle-right"></i>
      </li>
        <li v-if="result.party !== null" @click="()=>location.hash='#/center/job/'+result.partyid">
            兼职管理 <span class="center-list-im"></span><span class="center-list-less">人员/工作管理</span><i class="fa fa-angle-right"></i>
        </li>
        <li  v-if="result.party !== null" @click="()=>location.hash='#/class/manage'">
            班级管理 <span class="center-list-im"></span><span class="center-list-less">销售/班级管理</span><i class="fa fa-angle-right"></i>
        </li>

    </ul>
      <navbar />
  </div>
</template>

<script>
import axios from '@/axios'
import Navbar from '@/components/navbar'

export default {
  name: '',
  beforeCreate(){
    axios.get('/user/checkUserInfo')
      .then((res)=>{
        console.log(res);
        if(res.data.msg === 'FALSE'){
          alert('请完善信息')
          location.hash = '/complete'
        }
      })
      .catch(function (error) {
        alert("通信错误");
      });
  },
  data () {
    let __this = this;

    axios.post("user/userInfo")
      .then((res)=>{
        console.log(res);
        if(res.data.code === '401'){
          alert('请登录')
          location.hash = '/'
        }else
            __this.result = res.data.result;
      })
      .catch(function (error) {
        alert("通信错误")
      });

    axios.get("/user/figures").then((res)=>{
      console.log(res);
      if(res.data.msg === 'SUCCESS'){
        __this.num = res.data.result;
      }

    })

    axios.get("/party/partyInfo")
      .catch(function (error) {
        __this.auth = false
      })

    return {
      auth: true,
      result:{
        username:"Loading",
        phonenum:"",
        school:""
      },
      location : window.location,
      num:{}
    }
  },
  components: {
    'navbar': Navbar
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
