<template>
  <div class="balance">
    <h1>感谢这么努力的自己</h1>
    <div class="balance-money">
      <div class="balance-all">
        <div class="balance-title">
          <p>已挣金额</p>
        </div>
        <div class="balance-num">
          {{balance.earn}}元
        </div>
      </div>
      <div class="balance-now">
        <div class="balance-title">
          <p>钱包余额</p>
        </div>
        <div class="balance-num">
          {{balance.balance}}元
        </div>
      </div>
    </div>
    <div class="balance-button">
      <button @click="()=>location.hash='#/balance/check'">提现到支付宝</button>
      <p>3个工作日报账</p>
    </div>
    <ul class="balance-info">
      <li v-for="item in infos">
        <div>
          2016年8月19日 19:08 <span class="balance-type"></span> <span class="balance-list-num">{{item.volume}}元</span>
        </div>
        <div>
          {{item.discription}}<span class="balance-state">{{allstate[item.tradestate]}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: '',
  data () {
    let __this = this;

    axios.get("account/accountInfo")
      .then(function (res) {
        if(res.data.msg === "SUCCESS"){
          __this.balance = res.data.result;
        }
      })

    axios.get("account/accountInfo")
      .then(function (res) {
        if(res.data.msg === "SUCCESS"){
          __this.infos = res.data.result.trade;
        }
      })

    return {
      infos : [],
      balance : {},
      location : location,
      allstate : {
        HANDLING:"处理中",
        DONE:"已处理",
        REFUSED:"已拒绝"
      }
    }
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
