<template>
  <div class="class-manage">
    <table>
      <tr>
        <td>学院</td>
        <td>年级</td>
        <td>专业班级</td>
        <td>联系人</td>
        <td>业务</td>
      </tr>
    </table>
    <button>新增班级</button>
  </div>
</template>

<script>
export default {
  name: 'classManage',
  data () {
    return {}
  }
}
</script>

<style scoped>
.class-manage>table{
  width: 100%;
}
.class-manage>table td{
  border: 1px #ddd solid;
  font-size: 0.8rem;
}
.class-manage>button{
  width: 6rem;
  height: 1.5rem;
  background: #00ccff;
  border-radius: 0.3rem;
  border: none;
  color:white;
  margin-top: 2rem;
}
</style>
