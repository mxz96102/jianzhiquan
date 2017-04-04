<template>
    <div class="job-list">
        <ul>
            <li v-for="job in jobs" @click="()=>location.hash = '#/job/'+ job.id">
                <div class="job-list-title">
                    {{job.jobname}}
      </div>
                <div class="job-list-state">
                    时间：{{(new Date(job.fromtime)).toLocaleString()}} &nbsp; &nbsp; <span>{{state[job.salary]}}</span>
                </div>
            </li>
        </ul>
        <navbar />
    </div>
</template>

<script>
  import Navbar from '@/components/navbar'
  import axios from '@/axios'

  export default {
    name: 'myjobList',
    data () {
      let __this = this

      axios.get("/user/userJob")
        .then(function (res) {

          if(res.data.code === '401'){
            alert('请登录')
            location.hash = '/'
          } else if(res.data.msg === 'SUCCESS')
            __this.jobs = res.data.result;
        })
        .catch(function (error) {
          alert("通信错误")
          console.log(error)
        })
      return {
        jobs : [],
        state : {WANTING:"招募中",WORKING:"兼职中",ENDED:"已结束"}
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
