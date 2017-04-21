<template>
  <div class="job-info">
    <ul class="job-info-list">
      <li>
        <div class="job-info-title"><div class="job-label">兼职</div></div><div class="job-title job-info-content">{{job.jobname}}</div>
      </li>
      <li>
          <div class="job-info-title">工作日期</div><div class="job-info-content">从{{(new Date(job.fromtime)).toLocaleDateString()}}到{{(new Date(job.untiltime)).toLocaleDateString()}}</div>
      </li>
      <li>
          <div class="job-info-title">工资待遇</div><div class="job-info-content">{{job.description}}</div>
      </li>
      <li>
        <div class="job-info-title">兼职时段</div><div class="job-info-content">{{job.time}}</div>
      </li>
      <li>
        <div class="job-info-title">工作地点</div><div class="job-info-content">{{job.place}}</div>
      </li>
      <li>
          <div class="job-info-title">招聘人数</div><div class="job-info-content">{{job.workernumnow}}/{{job.workernummax}}人</div>
      </li>
      <li>
        <div class="job-info-title">工作任务</div><div class="job-info-content">{{job.request}}</div>
      </li>
    </ul>
    <button @click="applyJob()" name="button">马上申请兼职</button>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'myjobInfo',
  data () {
    let __this = this;

    axios.get("/job/getInfo?id="+this.$route.params.id)
      .then(function (res) {

        if(res.data.code === '401'){
          //alert('请登录')
          //location.hash = '/'
        } else
          __this.job = res.data.result;
      })
      .catch(function (error) {
        alert("请求错误")
      })

    return {
      job:{},
      location : location,
      history : history
    }
  },
  methods: {
    applyJob(){
      let __this = this;

      axios.get("job/apply?id="+this.$route.params.id)
        .then(function (res) {
          if(res.data.code === '401'){
            alert('请注册或登录')
            location.assign('/?job='+__this.$route.params.id);
          } else if(res.data.msg === 'SUCCESS'){
            alert('申请成功');
            location.assign('/#/center')
          } else{
            alert('人数已满或者你已经申请,或许你的学校和此兼职不符。');
            location.reload()
          }

        })
        .catch(function (error) {
          alert("请求错误")
        })
    },
  }
}
</script>

<style scoped>
.job-info{
  width: 90vw;
}

.job-title{
  font-size: 1.2rem;
  color: #ff3300;
}

.job-label{
  border-radius: 0.2rem;
  color: white;
  background: #ff3300;
  width: 3rem;
  height: 1.5rem;
  margin: 0 auto;
}

ul.job-info-list{
  padding: 0;
  list-style: none;
  width: 100%;
}

ul.job-info-list>li{
  width: 100%;
  border-bottom: 1px #ccc solid;
  display: flex;
  padding: 0.25rem 0;
}

.job-info-title{
  width: 25%;
  padding: 0.25rem 0;
}

.job-info-content{
  width: 75%;
  border-left: 1px #ccc solid;
  padding: 0.5rem 0;
}

.job-info>button{
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
