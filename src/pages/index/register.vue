<template>
  <div class="register">
    <div class="logo-large">
      <img src="../../assets/logo.png" alt=""/>
      <h1>兼职圈 靠自己</h1>
    </div>
    <div class="register-form">
      <input class="form-input" placeholder="请输入手机号码" type="text" name="phone"/><br/>

      <div class="register-complete hidden">
        <input class="form-input" placeholder="请输入密码" type="password" name="passwd" value=""><br/>
        <select class="form-input" name="">
          <option v-for="school in schoolList" :value="school.id">{{school.uniname}}</option>

        </select>
      </div>
      <div class="phone-passwd">
        <input type="text" name="" value=""> <button @click="phoneCount()" name="button">获取验证码</button><br/>
      </div>
      <button @click="nextStep()" name="button">下一步</button>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'
let flag = true;

export default {
  name: 'register',
  data () {
    let schoolList = [{
      uniname : "loading...",
      id : "1"
    }],__this = this;

    axios.get("/uni/allUniversity")
      .then(function (res) {
        if(res.data.msg === "SUCCESS"){
          __this.schoolList = res.data.result
          console.log(__this.schoolList)
        }
      });

    return {
      schoolList : schoolList
    }
  },
  methods: {
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
        };
        //Sent phone request here
        axios.get("/auth/code?phonenum="+username.value)
        counter();
      }
    },
    nextStep(){
      let [phonePasswd,passwd,username] = [document.getElementsByClassName('phone-passwd')[0],document.getElementsByClassName('form-input')[1],document.getElementsByClassName('form-input')[0]];
      let complete = ()=>{
        let compForm = document.getElementsByClassName('register-complete')[0];

        username.disabled = true;
        compForm.className = 'register-complete';
        phonePasswd.className += ' hidden';

        flag = false;
      };

      if(!(/^1[34578]\d{9}$/.test(username.value))){
        alert('请输入正确的手机号码');
        return;
      }

      if(flag){
        if(!!phonePasswd.getElementsByTagName('input')[0].value){
        //login here

          complete();
        } else {
          alert('请输入验证码');
        }
      } else {
        if(passwd.value.length < 9){
          alert('密码长度最少是9')
        } else {
          axios.get('auth/register?phonenum=' +username.value +
            '&credential=' +passwd.value +
            '&code=' +phonePasswd.getElementsByTagName('input')[0].value +
            '&uniid='+document.getElementsByTagName('select')[0].value)
            .then((res)=>{
              let data = res.data;
              if(res.data.msg === 'SUCCESS'){
                location.hash = "#/complete"
              }else if(res.data.msg.includes('code')){
                alert("验证码错误，请重试")
                location.reload()
              }else {
                alert("该号码已注册，请重试")
                //location.reload()
              }
            })
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
.register{
  width: 75vw;
  margin-top: 5rem;
}
.register-toggle{
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
.register-form{
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
select.form-input{
  height: 2rem;
}
.register-form>button{
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
