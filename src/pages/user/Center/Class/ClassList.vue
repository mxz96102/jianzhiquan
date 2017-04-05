<template>
    <div class="class-list">
        <ul>
            <li><h1>学院选择</h1></li>
            <li v-for="item in list" @click="()=> location.hash = '/class/manage/'+item.id"><h1>{{item.name}}</h1><i class="fa fa-angle-right"></i></li>
        </ul>
    </div>
</template>

<script>
  import axios from '@/axios'

  export default {
    name: '',
    data () {
      axios.get('/market/getAvailableColleage')
        .then(function (res) {
            if(res.data.msg === "SUCCESS"){

            }
          }
        )

      return {
        list:[{name:"Loading ..."}]
      }
    }
  }
</script>

<style scoped>
.class-list{
    width: 100%;
}
.class-list>ul{
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0 auto;
    list-style: none;
}
.class-list>ul>li{
    height: 3rem;
    line-height: 3rem;
    width: 100%;
    display: flex;
    border-bottom: solid #cccccc 1px;
}
.class-list>ul>li>h1{
    height: 3rem;
    line-height: 3rem;
    width: 95%;
    margin: 0;
    font-size: 1rem;
    font-weight: lighter;
}
.class-list>ul>li:first-of-type>h1{
    height: 3rem;
    line-height: 3rem;
    width: 100%;
    margin: 0;
    font-weight: normal;
}
.class-list>ul>li>.fa-angle-right{
    height: 3rem;
    line-height: 3rem;
    color: #cccccc;
}

</style>
