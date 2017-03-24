<template>
  <div class="job-list">
    <ul>
      <li>
       <div class="job-list-title">
        这是一个标题
      </div>
       <div class="job-list-state">
        抢单时间：2016.09.09 22:23 &nbsp; &nbsp; <span>正在兼职</span>
       </div>
      </li>
      <li>
       <div class="job-list-title">
        这是一个标题
      </div>
       <div class="job-list-state">
        抢单时间：2016.09.09 22:23 &nbsp; &nbsp; <span>正在兼职</span>
       </div>
      </li>
      <li>
       <div class="job-list-title">
        这是一个标题
      </div>
       <div class="job-list-state">
        抢单时间：2016.09.09 22:23 &nbsp; &nbsp; <span>正在兼职</span>
       </div>
      </li>
    </ul>
  <navbar />
  </div>
</template>

<script>
import Navbar from '../../components/navbar'
export default {
  name: 'jobList',
  data () {
    return {}
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
