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
        钱包余额 <span class="center-list-im">{{num.balance}}元</span><span class="center-list-less">明细/工资/提现</span><i class="fa fa-angle-right"></i>
      </li>
        <li v-if="this.auth === true" @click="()=>location.hash='#/center/job/'+result.partyid">
            兼职管理 <span class="center-list-im">{{num.memberNum}}个</span><span class="center-list-less">人员/工作管理</span><i class="fa fa-angle-right"></i>
        </li>
        <li  v-if="parseInt(num.colleageNum) !== 0" @click="()=>location.hash='#/class/'">
            班级管理 <span class="center-list-im">{{num.colleageNum}}个</span><span class="center-list-less">销售/班级管理</span><i class="fa fa-angle-right"></i>
        </li>
    </ul>
      <navbar />
  </div>
</template>

<script>
import axios from '@/axios'
import Navbar from '@/components/navbar'

function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default {
  name: '',

  beforeCreate(){
    axios.get('/user/checkUserInfo')
      .then((res)=>{
        if(res.data.msg === 'FALSE'){
          alert('请完善信息')
          location.hash = '/complete'
        }
      })
      .catch(function (error) {
        alert("请求错误");
      });

    if(getParameterByName("job") !== ""&&getParameterByName("job") !== null) {
      location.hash = '#/job/info/' + getParameterByName("job")
    }
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
        axios.get("/party/partyInfo")
          .then((res)=>{
            if(res.data.msg === 'SUCCESS'){
              __this.result.partyid = res.data.result.id;
              __this.auth = true
            }
          })
          .catch(function (error) {
            __this.auth = false
          })
      })
      .catch(function (error) {
        //alert("请求错误")
      });

    axios.get("/user/figures").then((res)=>{
      console.log(res);
      if(res.data.msg === 'SUCCESS'&& !!(res.data.result)){
        __this.num = res.data.result;
      }

    })



    return {
      auth: false,
      result:{
        username:"Loading",
        phonenum:"",
        school:"",
        university:{uniname:"Loading"}
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
