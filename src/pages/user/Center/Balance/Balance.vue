<template>
  <div class="balance">
    <h1>华小科，感谢这么努力的自己</h1>
    <div class="balance-money">
      <div class="balance-all">
        <div class="balance-title">
          <p>已挣金额</p>
        </div>
        <div class="balance-num">
          88888.00元
        </div>
      </div>
      <div class="balance-now">
        <div class="balance-title">
          <p>钱包余额</p>
        </div>
        <div class="balance-num">
          88888.00元
        </div>
      </div>
    </div>
    <div class="balance-button">
      <button>提现到支付宝</button>
      <p>3个工作日报账</p>
    </div>
    <ul class="balance-info">
      <li>
        <div>
          2016年8月19日 19:08 <span class="balance-type">发工资</span> <span class="balance-list-num">356元</span>
        </div>
        <div>
          提现至支付宝 &nbsp; 131****8888<span class="balance-state">处理中</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>

<style scoped>
.balance>h1{
  font-size: 1.2rem;
  text-align: center;
  font-weight: lighter;
}
.balance-money{
  width: 17rem;
  margin: 0 auto;
  display: flex;
  height: 6rem;
}
.balance-all,.balance-now{
  width: 8rem;
  height: 2rem;
  margin-right: 1rem;
}
.balance-title{
  width: 100%;
  font-size: 0.9rem;
  line-height: 1rem;
  text-align: center;
  border-bottom: #ddd 1px solid;
}
.balance>p{
  margin: 0;
}
.balance-all>.balance-title>p::before{
  display: block;
  content: "";
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  background: #ff9900;
  float: left;
  margin-left: 1rem;
}
.balance-now>.balance-title>p::before{
  display: block;
  content: "";
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  background: #00ccff;
  float: left;
  margin-left: 1rem;
}
.balance-num{
  color:#ff9900;
  font-size:1.1rem;
}
.balance-button{
  border-bottom: #ddd 1px solid;
  border-top: #ddd 1px solid;
}
.balance-button>button{
  background: #ff9900;
  width: 11rem;
  height: 2rem;
  line-height: 1.5rem;
  border-radius: 0.25rem;
  border: none;
  padding: 0.25rem;
  color: white;
  margin-top: 1rem;
}
.balance-button>p{
  color: grey;
  font-size: 0.8rem;
  text-align: center;
}
.balance-info{
  list-style: none;
  padding: 0;
  width: 100%;
}
.balance-info>li{
  text-align: left;
  padding-left: 1rem;
  font-size: 0.9rem;
  border-bottom: #ddd 1px solid;
}
.balance-info>li>div{
  height: 2rem;
  line-height: 2rem;
}
.balance-type{
  color: #00ccff;
  margin-left: 0.5rem;
}
.balance-list-num{
  color: #ff9900;
  font-size: 1.5rem;
  margin-left: 2.5rem;
}
.balance-state{
  margin-left: 2rem;
}
</style>
