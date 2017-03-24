<template>
  <div class="class-info">
    <h1>光电学院 &nbsp; 2012级 &nbsp;电子1201班</h1>
    <h2>联系人</h2>
    <table>
      <tr>
        <td>身份</td>
        <td>姓名</td>
        <td>电话</td>
        <td>QQ号</td>
        <td>宿舍号</td>
      </tr>
    </table>
    <h2>成交数据</h2>
    <table>
      <tr>
        <td></td>
        <td>学院</td>
        <td>试卷</td>
        <td>驾校</td>
        <td>聚会</td>
        <td>文化衫</td>
      </tr>
      <tr>
        <td>单数</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'classInfo',
  data () {
    return {}
  }
}
</script>

<style scoped>
.class-info>h1{
  font-size: 1.2rem;
  font-weight: lighter;
}
.class-info>h2{
  font-size: 0.8rem;
  font-weight: lighter;
}
.class-info>table{
  width: 100%;
}
.class-info>table td{
  border: 1px #ddd solid;
  font-size: 0.8rem;
}
</style>
