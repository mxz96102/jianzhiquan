<template>
  <div class="class-manage">
    <table>
      <tr>
        <td>学院</td>
        <td>年级</td>
        <td>专业班级</td>
        <td>联系人</td>
        <td>业务</td>
      </tr>
        <tr v-for="clazz in allclazz">
            <td class="class-manage-title" @click="()=> location.hash='#/class/info/'+clazz.id+'/'+clazz.marketname">{{clazz.colleage}}</td>
            <td>{{clazz.grade}}</td>
            <td>{{clazz.marketname}}</td>
            <td>{{clazz.attennum}}</td>
            <td>{{clazz.notemessagenum}}</td>
        </tr>
    </table>
    <button @click="()=>location.hash = '#/class/add'">新增班级</button>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'classManage',
  data () {
    let __this = this;

    axios.get("/market/getAvailableMarket")
      .then(function (res) {
        if(res.data.msg === "SUCCESS")
          __this.allclazz = res.data.result
      });

    return {
      allclazz:[{colleage:"loading..."}],
      location : location
    }
  }
}
</script>

<style scoped>
.class-manage>table{
  width: 100%;
    border-collapse:collapse;
}

.class-manage>table td{
  border: 1px #ddd solid;
  font-size: 0.8rem;
}

.class-manage>button{
  width: 6rem;
  height: 1.5rem;
  background: #00ccff;
  border-radius: 0.3rem;
  border: none;
  color:white;
  margin-top: 2rem;
}

.class-manage-title{
    text-decoration: underline;
    color: #00ccff;
}
</style>
