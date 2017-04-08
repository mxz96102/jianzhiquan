<template>
  <div class="class-info">
    <h1>{{$route.params.name}}</h1>
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
        <tr>
            <td>增加</td>
            <td @click="()=>location.hash = '#/class/bargin/'+this.$route.params.id+'/PAPER'">+</td>
            <td @click="()=>location.hash = '#/class/bargin/'+this.$route.params.id+'/D_SCHOOL'">+</td>
            <td @click="()=>location.hash = '#/class/bargin/'+this.$route.params.id+'/MEETING'">+</td>
            <td @click="()=>location.hash = '#/class/bargin/'+this.$route.params.id+'/T-SHIRT'">+</td>
        </tr>
    </table>
      <h2>拜访记录</h2>
      <ul>
          <li v-for="msg in msgList">
              <p><i class="fa fa-angle-right"></i>{{(new Date(msg.createtime).toLocaleString()) }}&nbsp;&nbsp;{{ msg.ownername }}</p>
              <p style="padding-left: 2rem">{{ msg.content }}</p>
          </li>
          <li >
              <input type="text" name="message" placeholder="新增记录">
              <button @click="send">提交</button>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'classInfo',
  data () {
    let __this = this,i;

    axios.get("/market/getAllAtten?marketid="+__this.$route.params.id)
      .then(function (res) {
        if(res.data.msg === "SUCCESS")
          __this.contacts = res.data.result;
      })
      .catch(function (e) {
        //alert("权限不足")
      })

    axios.get("/market/getAllNoteMessage?marketid="+__this.$route.params.id)
      .then(function (res) {
        if(res.data.msg === "SUCCESS")
          __this.msgList = res.data.result;
      })
      .catch(function (e) {
      })

    axios.get("/market/getAllDeal?marketid="+__this.$route.params.id)
      .then(function (res) {
        if(res.data.msg === "SUCCESS"){
          for(i=0;i<res.data.result.length;i++){
            switch (res.data.result[i].dealtype){
              case "PAPER":
                __this.deals[0] = res.data.result[i]
                break;
              case "D_SCHOOL":
                __this.deals[1] = res.data.result[i]
                break;
              case "T-SHIRT":
                __this.deals[2] = res.data.result[i]
                break;
              case "MEETING":
                __this.deals[3] = res.data.result[i]
                break;
              default:
                break;
            }
          }
        }
          __this.deals = res.data.result;
      })
      .catch(function (e) {
      })

    return {
      deals:[{vomule:"loading"},{vomule:"loading"},{vomule:"loading"},{vomule:"loading"}],
      contacts:[{role:"loading"}],
      location:location,
      msgList: [{createtime:0,ownername:"loading",content:"loading..."}]
    }
  },
  methods:{
    send(){
      let text = document.getElementsByName("message")[0].value;
      axios.get("/market/createNoteMessage?content="+text+"&marketid="+this.$route.params.id)
        .then(function (res) {
          if(res.data.msg === "SUCCESS"){
            location.reload();
          }
        })
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
  border-collapse:collapse;
}
.class-info>table td{
  border: 1px #ddd solid;
  font-size: 0.8rem;
}
.class-info>ul{
     text-align: left;
     font-size: 0.8rem;
     list-style: none;
    padding: 0;
 }
.class-info>ul>li{
  padding-left: 1rem;
}
.class-info input{
    width: 80%;
    border: none;
    border-bottom: solid black 1px;
    padding-left: 1rem;
}
.class-info button{
    background: #3399cc;
    color: white;
    border-radius: 0.25rem;
    border: none;
}
</style>
