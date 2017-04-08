<template>
    <div class="class-bargin">
        <label>交易金额:</label><input name="volume" type="text"/>元<br/>
        <label>描述:</label><input name="discription" type="text"/><br/>
        <label>客户:</label><input name="custom" type="text"/>
        <button @click="submit">提交</button>
    </div>
</template>

<script>
  import axios from '@/axios'

  export default {
    name: 'classBargin',
    data () {
      return {

      }
    },
    methods:{
    submit(){
      let volume = document.getElementsByName("volume")[0].value,
        discription = document.getElementsByName("discription")[0].value,
        custom = document.getElementsByName("custom")[0].value;


        axios.get("/account/transferRequest?volume="+volume+"&discription="+discription+"&custom="+custom+"&marketid="+this.$route.params.id+"&dealtype="+this.$route.params.type)
          .then(function (res) {
            if(res.data.code === '401'){
              alert('请登录')
              //location.hash = '/'
            } else if(res.data.msg === 'SUCCESS'){
              alert('提交成功');
              window.history.back()
            } else
              alert('申请失败，请尝试刷新后申请');
            location.reload()
          })
          .catch(function (error) {
            alert("请求错误")
          })


    }
  }
  }
</script>

<style scoped>
    .class-bargin{
        height: 10rem;
        padding-top: 5rem;
    }
    .class-bargin input{
        margin: 0.5rem auto;
        width: 11rem;
        height: 1.25rem;
        border: 1px grey solid;
        border-radius: 0.25rem;
        padding: 0.25rem;
    }

    .class-bargin button{
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
