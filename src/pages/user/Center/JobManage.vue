<template>
  <div class="job-manage">
    <h1>{{user}}</h1>

    <h2>{{info.name}}圈主</h2>
    <p>圈子id：{{info.id}}</p>
    <p>圈主id：{{info.ownerid}} </p>
    <table>
      <tr>
        <td>序号</td>
        <td>姓名</td>
        <td>班级</td>
        <td>QQ号</td>
        <td>宿舍</td>
      </tr>
      <tr v-for="man in men">
        <td>{{man.id}}</td>
        <td>{{man.username}}</td>
        <td>{{man.clazz}}</td>
        <td>{{man.qq}}</td>
        <td>{{man.dorm}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
  name: 'jobManage',
  data () {

    axios.get(" /party/partyInfo")
      .then(function (res) {
        if(res.data.msg === "SUCCESS")
          __this.info = res.data.result;
      }).catch()

    axios.get("/party/allMember?partyid="+this.$route.params.id)
      .then(function (res) {
        if(res.data.msg === "SUCCESS")
          __this.men = res.data.result;
      }).catch()

    axios.post("user/userInfo")
      .then((res)=>{
        console.log(res);
        if(res.data.code === '401'){
          alert('请登录')
          location.hash = '/'
        }else
          __this.user = res.data.result.username
      })

    return {
      info:{},
      men:[],
      user:"Loading"
    }
  }
}
</script>

<style scoped>
.job-manage>h1{
  font-size: 1.2rem;
  font-weight: lighter;
}
.job-manage>h2{
  font-size: 0.8rem;
  font-weight: lighter;
}
.job-manage>p{
  font-size: 0.8rem;
  font-weight: lighter;
  text-align: left;
  padding-left: 1rem;
}
.job-manage>table{
  width: 100%;
  border-collapse:collapse;
}
.job-manage>table td{
  border: 1px #ddd solid;
  font-size: 0.8rem;
}

</style>
