<template>
    <div class="balance-check">
        <label>提现金额:</label><input name="volume" type="text"/>元<br/>
        <label>支付宝账号:</label><input name="discription" type="text"/><br/>
        <button @click="onsubmit">提交</button>
    </div>
</template>

<script>
  import axios from '@/axios'

  export default {
    name: 'balanceCheck',
    data () {
      return {};
    },
    methods:{
      onsubmit(){
        let volume = document.getElementsByName("volume")[0].value,
        discription = document.getElementsByName("discription")[0].value;

        if(confirm("金额："+volume+"\n支付宝账号："+discription+"\n你是否确认提现")){
          discription += '(支付宝账号)-转出';
          axios.get("/account/transferRequest?volume=-"+volume+"&discription="+discription)
            .then(function (res) {
              if(res.data.code === '401'){
                alert('请登录')
                location.hash = '/'
              } else if(res.data.msg === 'SUCCESS'){
                alert('申请成功');
              } else
                alert('余额不足，请检查余额后再继续');
              history.back();
            })
            .catch(function (error) {
              alert("请求错误")
            })
        }

      }
    }
  }
</script>

<style scoped>
    .balance-check{
        height: 10rem;
        margin-top: 5rem;
        width: 80vw;
        border: solid black 1px;
    }
    .balance-check input{
        margin: 0.5rem auto;
        width: 11rem;
        height: 1.25rem;
        border: 1px grey solid;
        border-radius: 0.25rem;
        padding: 0.25rem;
    }

    .balance-check button{
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
    .balance-check label{
        width: 6rem;
    }
</style>
