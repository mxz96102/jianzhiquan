import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index/index'
import Register from '@/pages/index/register'
import Login from '@/pages/index/login'
import Complete from '@/pages/index/complete'

import Center from '@/pages/user/Center/Center'

import JobInfo from '@/pages/job/jobInfo'
import JobList from '@/pages/job/joblist'

import MyJobInfo from '@/pages/user/Myjob/MyJobInfo'
import MyJobList from '@/pages/user/Myjob/MyJobList'

import Balance from '@/pages/user/Center/Balance/Balance'
import JobManage from '@/pages/user/Center/JobManage'

import ClassManage from '@/pages/user/Center/Class/ClassManage'
import ClassInfo from '@/pages/user/Center/Class/ClassInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/register',
      name: 'register',
      component: Register
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/complete',
      name: 'complete',
      component: Complete
    },{
      path: '/job/info/:id',
      name: 'jobInfo',
      component: JobInfo
    },{
      path: '/my/job/list',
      name: 'myjobList',
      component: MyJobList
    },{
      path: '/my/job/info/:id',
      name: 'myjobInfo',
      component: MyJobInfo
    },{
      path: '/job/list',
      name: 'jobList',
      component: JobList
    },{
      path: '/balance',
      name: 'balance',
      component: Balance
    },{
      path: '/center/job',
      name: 'jobManage',
      component: JobManage
    },{
      path: '/class/manage',
      name: 'classManage',
      component: ClassManage
    },{
      path: '/class/info',
      name: 'classInfo',
      component: ClassInfo
    },{
      path: '/center',
      name: 'center',
      component: Center
    }
  ]
})
