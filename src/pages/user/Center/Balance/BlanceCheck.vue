<template>
    <div class="balance-check">
        <label>提现金额:</label><input name="volume" type="text"/>元<br/>
        <label>支付宝账号:</label><input name="discription" type="text"/>
        <button @click="submit">提交</button>
    </div>
</template>

<script>
  import axios from '@/axios'

  export default {
    name: 'balanceCheck',
    data () {

      return {}
    },
    methods:{
      submit(){
        let volume = document.getElementsByName("volume")[0].value,
        discription = document.getElementsByName("discription")[0].value;

        if(confirm("金额："+volume+"\n支付宝账号："+discription+"\n你是否确认")){
          axios.get("/account/transferRequest?volume=-"+volume+"&discription="+discription)
            .then(function (res) {
              if(res.data.code === '401'){
                alert('请登录')
                //location.hash = '/'
              } else if(res.data.msg === 'SUCCESS'){
                alert('申请成功');
              } else
                alert('申请失败，请尝试刷新后申请');
              location.reload()
            })
            .catch(function (error) {
              alert("通信错误")
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
</style>
