<template>
    <div class="class-att">
        <label>角色:</label><input name="role" type="text"/><br/>
        <label>名字:</label><input name="name" type="text"/><br/>
        <label>qq:</label><input name="qq" type="text"/><br/>
        <label>寝室号:</label><input name="dorm" type="text"/><br/>
        <label>手机号:</label><input name="phonenum" type="text"/><br/>
        <button @click="submit">提交</button>
    </div>
</template>

<script>
  import axios from '@/axios'

  export default {
    name: 'classAtt',
    data () {
      return {

      }
    },
    methods:{
    submit(){
      let qq = document.getElementsByName("qq")[0].value,
        dorm = document.getElementsByName("dorm")[0].value,
        name = document.getElementsByName("name")[0].value,
        role = document.getElementsByName("role")[0].value,
        phonenum = document.getElementsByName("phonenum")[0].value;


        axios.get("/market/createAtten?qq="+qq+"&dorm="+dorm+"&name="+name+"&role="+role+"&phonenum="+phonenum+"&marketid="+this.$route.params.id)
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
    .class-att{
        height: 20rem;
        margin-top: 5rem;
    }
    .class-att input{
        margin: 0.5rem auto;
        width: 11rem;
        height: 1.25rem;
        border: 1px grey solid;
        border-radius: 0.25rem;
        padding: 0.25rem;
    }

    .class-att button{
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
