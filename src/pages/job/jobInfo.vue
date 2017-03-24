<template>
  <div class="job-info">
    <ul class="job-info-list">
      <li>
        <div class="job-info-title"><div class="job-label">种类</div></div><div class="job-title job-info-content">工作名称</div>
      </li>
      <li>
        <div class="job-info-title">工作日期</div><div class="job-info-content">从2018-01-01到2018-02-01</div>
      </li>
      <li>
        <div class="job-info-title">兼职时段</div><div class="job-info-content">不限时间</div>
      </li>
      <li>
        <div class="job-info-title">工作地点</div><div class="job-info-content">校内</div>
      </li>
      <li>
        <div class="job-info-title">招聘人数</div><div class="job-info-content">78/100人</div>
      </li>
      <li>
        <div class="job-info-title">工作任务</div><div class="job-info-content">这里<br/>xxxx<br/>xxx</div>
      </li>
      <li>
        <div class="job-info-title">工作要求</div><div class="job-info-content">这里<br/>xxxx<br/>xxx<br/>sss<br/></div>
      </li>
    </ul>
    <button @click="applyJob()" name="button">马上申请兼职</button>
  </div>
</template>

<script>
export default {
  name: 'jobInfo',
  data () {
    return {}
  },
  methods: {
    applyJob(){

    },
  }
}
</script>

<style scoped>
.job-info{
  width: 90vw;
  margin-top: 2rem;
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
