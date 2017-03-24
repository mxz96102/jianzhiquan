<template>
  <div class="job-manage">
    <h1>华小科</h1>
    <h2>华科兼职圈3圈主</h2>
    <p>新注册：9人</p>
    <p>新兼职次数：30次 &nbsp; 兼职新收益:1000元</p>
    <table>
      <tr>
        <td>序号</td>
        <td>姓名</td>
        <td>班级</td>
        <td>QQ号</td>
        <td>已报名</td>
        <td>已赚取</td>
      </tr>
      <tr>
        <td>01</td>
        <td>xxxx</td>
        <td>xxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>10000</td>
        <td>10000</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'jobManage',
  data () {
    return {}
  }
}
</script>

<style scoped>
.job-manage>h1{
  font-size: 1.2rem;
  font-weight: lighter;
}
.job-manage>h2{
  font-size: 0.8rem;
  font-weight: lighter;
}
.job-manage>p{
  font-size: 0.8rem;
  font-weight: lighter;
  text-align: left;
  padding-left: 1rem;
}
.job-manage>table{
  width: 100%;
}
.job-manage>table td{
  border: 1px #ddd solid;
  font-size: 0.8rem;
}

</style>
