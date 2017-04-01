<template>
  <div class="class-info">
    <h1>光电学院 &nbsp; 2012级 &nbsp;电子1201班</h1>
    <h2>联系人</h2>
    <table>
      <tr>
        <td>身份</td>
        <td>姓名</td>
        <td>电话</td>
        <td>QQ号</td>
        <td>宿舍号</td>
      </tr>
        <tr v-for="man in contacts">
            <td>{{man.role}}</td>
            <td>{{man.name}}</td>
            <td>{{man.phonenum}}</td>
            <td>{{man.qq}}</td>
            <td>{{man.dorm}}</td>
        </tr>
    </table>
    <h2>成交数据</h2>
    <table>
      <tr>
        <td></td>
        <td>试卷</td>
        <td>驾校</td>
        <td>聚会</td>
        <td>文化衫</td>
      </tr>
      <tr>
        <td>单数</td>
        <td>{{deals[0].vomule}}</td>
        <td>{{deals[1].vomule}}</td>
        <td>{{deals[2].vomule}}</td>
        <td>{{deals[3].vomule}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'classInfo',
  data () {
    let __this = this;

    axios.post("/job/getAllAtten?marketid="+__this.$route.params.id)
      .then(function (res) {
        if(res.data.msg === "SUCCESS")
          __this.contacts = res.data.result;
      })
      .catch(function (e) {
        alert("权限不足")
      })

    axios.get("/job/getAllDeal?marketid="+__this.$route.params.id)
      .then(function (res) {
        if(res.data.msg === "SUCCESS")
          __this.deals = res.data.result;
      })
      .catch(function (e) {
        alert("权限不足")
      })

    return {
      deals:[{vomule:"loading"},{vomule:"loading"},{vomule:"loading"},{vomule:"loading"}],
      contacts:[{role:"loading"}]
    }
  }
}
</script>

<style scoped>
.class-info>h1{
  font-size: 1.2rem;
  font-weight: lighter;
}
.class-info>h2{
  font-size: 0.8rem;
  font-weight: lighter;
}
.class-info>table{
  width: 100%;
}
.class-info>table td{
  border: 1px #ddd solid;
  font-size: 0.8rem;
}
</style>
