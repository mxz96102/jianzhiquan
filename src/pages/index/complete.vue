<template>
  <div class="complete">

    <div class="step-zero">
      <p>
       欢迎你 <br/>
       你是第 1022 位加入兼职圈的同学<br/>
       完善信息才能做兼职哦
      </p>
      <button @click="toOne" type="button">去完善信息</button>
    </div>

    <div class="step-one hidden">
      <h1>很高兴认识你</h1>
      <div class="complete-form">
        <label >姓名</label> <input type="text" name="name" value=""><br/>
        <label >性别</label> <select name="gender" value=""><option value="1">帅气boy</option><option value="0">漂亮girl</option></select><br/>
        <label>QQ号</label> <input type="text" name="qq" value=""><br/>
      </div>
      <button @click="toTwo" type="button">下一步</button>
    </div>

    <div class="step-two hidden">
      <div class="complete-form">
        <label >学院</label> <select name="college" value=""><option value="1">xx学院</option><option value="0">xxx学院</option></select><br/>
        <label >年级</label> <select name="grade" value=""><option value="1">14</option><option value="0">15</option></select><br/>
        <label >班级</label> <input type="text" name="class" value=""><br/>
        <label >宿舍</label> <select name="dormitory" value=""><option value="1">韵苑1栋</option><option value="0">韵苑2栋</option></select><br/>
      </div>
      <button @click="toThree" type="button">下一步</button>
    </div>

<!--    <div class="step-three hidden">
          <h1>兼职意向调查</h1>
          </div>-->
      <button @click="toEnd" type="button">下一步</button>


  </div>
</template>

<script>
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
    return {}
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
      if(checkValues(getValues('class'),1)){
        document.getElementsByClassName('step-two')[0].className += ' hidden';
        document.getElementsByClassName('step-three')[0].className = 'step-three';
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
