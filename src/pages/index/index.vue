<template>
  <div class="index">
    <div class="logo-large">
      <img src="../../assets/logo.png" alt=""/>
      <h1>兼职圈 靠自己</h1>
    </div>
    <div class="index-form">
      <input class="form-input" placeholder="请输入手机号码" type="text" name="phone"/><br/>
      <button @click="checkUser()" name="button">下一步</button>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {
    checkUser(){
      let [phonePasswd,passwd,username] = [document.getElementsByClassName('phone-passwd')[0],document.getElementsByClassName('form-input')[1],document.getElementsByClassName('form-input')[0]];

      if(!(/^1[34578]\d{9}$/.test(username.value))){
        alert('请输入正确的手机号码');
      } else {
        axios.get('auth/isRegistered?phonenum='+username.value,{'phonenum':''})
        .then(function (response) {
          let res = response.data;
            if(res.msg === 'TURE'){
              location.hash='#/login'
            } else {
              location.hash='#/register'
            }
          })
          .catch(function (error) {
            alert('通信错误');
            console.log(error)
          });
      }
    }
  }
}
</script>

<style>
.hidden{
  display: none;
}
.index{
  width: 75vw;
  margin-top: 5rem;
}
.logo-large{
  width: 7rem;
  margin: 1rem auto;
}
.logo-large>img{
  width: 100%;
}
.logo-large>h1{
  font-size: 1rem;
  font-weight: lighter;
}
.index-form{
  width: 100%;
}
.form-input{
  margin: 0.5rem auto;
  width: 11rem;
  height: 1.25rem;
  border: 1px grey solid;
  border-radius: 0.25rem;
  padding: 0.25rem;
}
.index-form>button{
  background: #ff3300;
  width: 11rem;
  height: 2rem;
  line-height: 1.5rem;
  border-radius: 0.25rem;
  border: none;
  padding: 0.25rem;
  color: white;
  margin-top: 1rem;
}
</style>
