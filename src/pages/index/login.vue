<template>
  <div class="login">
    <div class="logo-large">
      <img src="../../assets/logo.png" alt=""/>
      <h1>兼职圈 靠自己</h1>
    </div>
    <div class="login-form">
      <input class="form-input" placeholder="请输入手机号码" type="text" name="phone"/><br/>
      <input class="form-input" placeholder="请输入密码" type="password" name="passwd" value=""><br/>
      <div class="phone-passwd hidden">
        <input type="text" name="" value=""> <button @click="phoneCount()" name="button">获取验证码</button><br/>
      </div>
      <button @click="loginUser()" name="button">下一步</button>
    </div>
    <h1 @click="toggle()" class="login-toggle">使用验证码登录</h1>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'login',
  data () {
    return {}
  },
  methods: {
    toggle: function (){
      let [phone,passwd,toggle] = [document.getElementsByClassName('phone-passwd')[0],document.getElementsByClassName('form-input')[1],document.getElementsByClassName('login-toggle')[0]];

      if(passwd.className === 'form-input'){
        passwd.className = 'form-input hidden';
        phone.className = 'phone-passwd';
        toggle.innerHTML = '使用密码登录'
      } else {
        passwd.className = 'form-input';
        phone.className = 'phone-passwd hidden';
        toggle.innerHTML = '使用验证码登录'
      }
    },
    phoneCount(){
      let phone = document.getElementsByClassName('phone-passwd')[0],
      username = document.getElementsByClassName('form-input')[0];
      let button = phone.getElementsByTagName('button')[0],i = 60;

      if(!(/^1[34578]\d{9}$/.test(username.value))){
        alert('请输入正确的手机号码');
        return;
      }

      if(button.innerHTML === '获取验证码'){
        let counter = ()=>{
          i--;
          button.innerHTML = '请等待' + i + 's';

          if(i > 0){
            setTimeout(counter, 1000);
          } else {
            button.innerHTML = '获取验证码';
          }
        }
        //Sent phone request here
        counter();
      }
    },
    loginUser(){
      let [phonePasswd,passwd,username] = [document.getElementsByClassName('phone-passwd')[0],document.getElementsByClassName('form-input')[1],document.getElementsByClassName('form-input')[0]];

      if(!(/^1[34578]\d{9}$/.test(username.value))){
        alert('请输入正确的手机号码');
      } else {
        if(passwd.className === 'form-input'){
          if(!!passwd.value){
            //login here
            axios.post('auth/login',{'phonenum':username.value,'credential':passwd.value})
              .then(function (response) {
                let res = response.data;
                if(res.msg === 'SUCCESS'){
                  location.hash='#/center'
                } else {
                  alert("请检查手机号和密码")
                }
              })
              .catch(function (error) {
                alert('通信错误');
                console.log(error)
              });
          } else {
            alert('请输入密码');
          }
        } else {
          if(!!phonePasswd.value){
            //login here

          } else {
            alert('请输入验证码');
          }
        }
      }
    }
  }
}
</script>

<style>
.hidden{
  display: none;
}
.login{
  width: 75vw;
  margin-top: 5rem;
}
.login-toggle{
  font-size: 1rem;
  font-weight: lighter;
  text-decoration: underline;
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
.login-form{
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
.login-form>button{
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
.phone-passwd>button{
  background: #3399cc;
  width: 5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border-radius: 0.25rem;
  border: none;
  padding: 0.25rem;
  color: white;
}
.phone-passwd{
  height: 1.5em;
  line-height: 1.5rem;
}
.phone-passwd>input{
  width: 5.5rem;
  margin-right: 0.5rem;
  height: 1.5rem;
  border: 1px grey solid;
  border-radius: 0.25rem;
  padding-left: 0.25rem;
}
</style>
