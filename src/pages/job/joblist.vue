<template>
  <div class="job-list">
    <ul>
      <li v-for="job in jobs">
       <div class="job-list-title">
        {{job.jobname}}
      </div>
       <div class="job-list-state">
        时间：{{job.time}} &nbsp; &nbsp; <span>{{job.salary}}</span>
       </div>
      </li>
    </ul>
  <navbar />
  </div>
</template>

<script>
import Navbar from '../../components/navbar'
import axios from '@/axios'

export default {
  name: 'jobList',
  data () {
    axios.get("/job/getAvailableJob")
      .then(function (response) {

        if(res.data.code === '401'){
          alert('请登录')
          //location.hash = '/'
        } else
          __this.jobs = res.data.result;
      })
      .catch(function (error) {
        alert("通信错误")
      })
    return {
      jobs : []
    }
  },
  components: {
    'navbar': Navbar
  }
}
</script>

<style scoped>
.job-list>ul{
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
}

.job-list>ul>li{
  height: 4rem;
  width: 100%;
}

.job-list-title{
  height: 2rem;
  width: 100%;
  font-weight: lighter;
  text-align: center;
  color: #ff3300;
  font-size: 1.2rem;
  line-height: 2rem;
  border-bottom: 1px solid #ddd;
}

.job-list-state{
  height: 2rem;
  width: 100%;
  text-align: center;
  color: black;
  font-size: 0.9rem;
  line-height: 2rem;
  border-bottom: 1px solid #ddd;
}
.job-list-state span{
  font-size: 0.8rem;
}

.job-list-state::after{
  display: block;
  position: relative;
  width: 5%;
  height: 2rem;
  line-height: 2rem;
  content: ">";
  float:right;
  color: grey;

}
</style>
