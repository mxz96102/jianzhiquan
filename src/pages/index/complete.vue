<template>
  <div class="complete">

    <div class="step-zero">
      <p>
       欢迎你 <br/>
       你是第 {{userid}} 位加入兼职圈的同学<br/>
       完善信息才能做兼职哦
      </p>
      <button @click="toOne" type="button">去完善信息</button>
    </div>

    <div class="step-one hidden">
      <h1>很高兴认识你</h1>
      <div class="complete-form">
        <label>姓名</label> <input type="text" name="name" value=""><br/>
        <label>性别</label> <select name="gender" value="男"><option value="男">帅气boy</option><option value="女">漂亮girl</option></select><br/>
        <label>QQ号</label> <input type="text" name="qq" value=""><br/>
      </div>
      <button @click="toTwo" type="button">下一步</button>
    </div>

    <div class="step-two hidden">
      <div class="complete-form">
        <label >学院</label>
          <select class="form-input" name="colleage">
              <option v-for="colleage in colleageList" :value="colleage.colleagename">{{colleage.colleagename}}</option>
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
        <label >班级</label> <input type="text" name="class" value=""/><br/>
        <label >校区</label>
          <select class="form-input" name="dorm">
              <option v-for="dorm in dormList" :value="dorm.dormname">{{dorm.dormname}}</option>
          </select>
          <br/>
          <label >宿舍</label> <input type="text" name="area" placeholder="宿舍栋-房间号" value=""/><br/>
      </div>
      <button @click="toThree" type="button">提交</button>
    </div>

<!--    <div class="step-three hidden">
          <h1>兼职意向调查</h1>
          <button @click="toEnd" type="button">提交</button>
        </div>-->
  </div>
</template>

<script>
import axios from '@/axios'

function getValues(...names){
   for(let i = 0;i < names.length; i++){
     names[i] = document.getElementsByName(names[i])[0].value;
   }
   return names;
}

function checkValues(values, ...length){
  for(let i = 0;i < values.length; i++){
    if(values[i].length <length[i]){
      alert('请正确填写信息');
      return false;
    }
  }
  return true;
}

export default {
  name: '',
  data () {
    let __this = this;

    axios.post("user/userInfo")
      .then((res)=>{
        console.log(res);
        if(res.data.code === '401'){
          alert('请登录')
          location.hash = '/'
        }else{
          __this.userid = res.data.id;
          axios.get("/uni/allColleage?uniid="+res.data.result.uniid)
            .then(function (res) {
              if(res.data.msg === "SUCCESS"){
                __this.colleageList = res.data.result
              }
            });
          axios.get("/uni/allDorm?uniid="+res.data.result.uniid)
            .then(function (res) {
              if(res.data.msg === "SUCCESS"){
                __this.dormList = res.data.result
              }
            });
        }

      })



    return {colleageList:[],dormList:[]}
  },
  methods: {
    toOne(){
      document.getElementsByClassName('step-zero')[0].className += ' hidden';
      document.getElementsByClassName('step-one')[0].className = 'step-one';
    },
    toTwo(){
      if(checkValues(getValues('name','qq'),2,5)){
        document.getElementsByClassName('step-one')[0].className += ' hidden';
        document.getElementsByClassName('step-two')[0].className = 'step-two';
      }
    },
    toThree(){
      let data = [];

      if(checkValues(getValues('class','area'),1,4,2)){
        //document.getElementsByClassName('step-two')[0].className += ' hidden';
        //document.getElementsByClassName('step-three')[0].className = 'step-three';
        data = getValues('name','qq','gender','class','dorm','grade',"colleage","area");
        axios.get('/user/insertInfo?username='+data[0]+'&qq='+data[1]+'&sex='+data[2]+'&clazz='+data[3]+'&dorm='+data[4]+'&grade='+data[5]+"&colleage="+data[6]+"&area="+data[7])
          .then((res)=>{
            if(res.data.msg === "SUCCESS"){
              location.hash = '/center'
            }else {
              alert('信息错误，请重试');
              location.reload()
            }
          })
          .catch((error)=>{alert('请求错误')})
      }
    },
    toEnd(){

    }
  }
}
</script>

<style scoped>
.complete{
  width: 80vw;
  margin-top: 7rem;
  overflow: hidden;

}
.complete button{
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
.step-one h1{
  font-size: 1rem;
  font-weight: lighter;
}
.complete-form input,.complete-form select{
  width: 9rem;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  height: 1.5rem;
  border: 1px grey solid;
  border-radius: 0.25rem;
  padding-left: 0.25rem;
}
</style>
