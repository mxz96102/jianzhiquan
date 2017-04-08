<template>
    <div class="class-add">
        <label >学院</label>
        <select class="form-input" name="colleage">
            <option v-for="colleage in colleageList" :value="colleage.id+'-'+colleage.colleagename">{{colleage.colleagename}}</option>
        </select>
        <br/>
        <label >年级</label>
        <select class="form-input" name="grade">
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
        </select>
        <br/>
        <label >班级名</label> <input type="text" name="class" value=""/><br/>
        <button @click="submit">提交</button>
    </div>
</template>

<script>
  import axios from '@/axios'

  export default {
    name: 'balanceCheck',
    data () {
      let __this = this;

      axios.post("user/userInfo")
        .then((res)=>{
          console.log(res);
          if(res.data.code === '401'){
            alert('请登录')
            location.hash = '/'
          }else
            axios.get("/uni/getAvailableColleage")
              .then(function (res) {
                if(res.data.msg === "SUCCESS"){
                  __this.colleageList = res.data.result
                }
              });
        })
      return {colleageList:[]}

      },
    methods:{
      submit(){
        let colleage = document.getElementsByName("colleage")[0].value,
          clazz = document.getElementsByName("class")[0].value,
        grade = document.getElementsByName("grade")[0].value;
        axios.get("/createMarket?colleageid="+colleage.split('-')[0]+"&marketname="+clazz+"&grade="+grade+"&colleage="+colleage.split('-')[1])
          .then(function (res) {
            if(res.data.code === '401'){
              alert('请登录')
              location.hash = '/'
            } else if(res.data.msg === 'SUCCESS'){
              alert('添加成功');
              history.back();
            } else{
              alert('请检查表单后重试');
            }

            history.back();
          })
          .catch(function (error) {
            alert("请求错误")
          })
      }
    }
  }
</script>

<style scoped>
    .class-add{
        height: 14rem;
        margin-top: 5rem;
        width: 80vw;
        border: solid black 1px;
    }
    .class-add input{
        margin: 0.5rem auto;
        width: 11rem;
        height: 1.25rem;
        border: 1px grey solid;
        border-radius: 0.25rem;
        padding: 0.25rem;
    }

    .class-add button{
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
    .class-add label{
        width: 6rem;
    }
</style>
