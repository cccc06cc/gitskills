<template>
  <ality>
   <div class="my">
     <div class="top_name">
        <span></span>
        <p>我的</p>
      </div>
     <div class="ctbmytop">
       <dl>
         <dt></dt>
         <dd>
           <h2>小程序商城管理员</h2>
           <div>
             <i></i>
             <p>初级砍价师</p>
             <span>提现</span>
           </div>
         </dd>
       </dl>
       <div class="ctbmyright">
         <p>上级微信</p>
         <span>4566656654</span>
       </div>
     </div>
      <div class="ctbteam_fa">
     <div class="ctbteam">
       <ul>
         <li>
           <span>0</span>
           <p>推广积分</p>
         </li>
         <li>
           <span>0</span>
           <p>砍价券</p>
         </li>
         <li>
           <span>0</span>
           <p>我的团队</p>
         </li>
         
       </ul>
     </div>
 </div>
     <div class="ctb_quanbudingdan">
       <div class="ctb_top">
         <h2>
           <span></span>
           <p>全部订单</p>
         </h2>
         <p>查看全部订单</p>
       </div>
       <div class="ctb_bot">
         <ul>
           <li>
             <span></span>
             <p>待付款</p>
           </li>
           <li>
             <span></span>
             <p>待发货</p>
           </li>
           <li>
             <span ></span>
             <p>待收货</p>
           </li>
           <li>
             <span></span>
             <p>评价</p>
           </li>
           <li>
             <span clas></span>
             <p>退款/售后</p>
           </li>
         </ul>
       </div>
     </div>
     <div class="ctb_informationList">
       <ul>
         <li>
           <div>
             <span></span><p>购物车</p>
           </div>
           <i class="icon-fanhui iconfont"></i>
         </li>
         <li>
           <div>
              <span></span><p>收货地址</p>
           </div>
           <i class="icon-fanhui iconfont"></i>
         </li>
         <li>
           <div>
              <span></span><p>个人信息</p>
           </div>
           <i class="icon-fanhui iconfont"></i>
         </li>
         <li>
           <div>
              <span></span> <p>联系客服</p>
           </div>
           <i class="icon-fanhui iconfont"></i>
         </li>
         <li>
           <div>
            <span></span> <p>推广码</p> 
           </div>
           <i class="icon-fanhui iconfont"></i>
         </li>
         <li>
           <router-link to="/login">登录</router-link>
           <span><router-link to="/register">注册</router-link></span>
         </li>
       </ul>
     </div>
   </div>
  </ality>
</template>

<script>
import ality from '../ality.vue'
export default {
components:{
        ality
    },
    methods:{
      
    },
 beforeCreate() {
       document.querySelector('body').setAttribute('style', 'background:#f3f3f3')
  }, //
  
    
}
</script>

<style  scoped>
.ctbmytop{
  width: 100%;
  height: 2.6rem;
  background: url(../../assets/images/yellow.png) no-repeat;
  display: flex;
  align-items: center;
  padding: 0 0.8rem 0 0.95rem;
  justify-content: space-between;
}
 .top_name{
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
}
 .top_name span{
  width: 0.24rem;
  height: 0.22rem;
  background: url(../../assets/images/close.png) no-repeat;
  background-size: contain;
}
.top_name p{
  flex: 1;
  font-size: 0.32rem;
  color: #181818;
  text-align: center;
}
.ctbmytop dl{
  display: flex;
  align-items: center;
}
.ctbmytop dl dt{
  width: 1.08rem;
  height: 1.08rem;
  background: url(../../assets/images/tou.png) no-repeat;
  background-size: contain;
}
.ctbmytop dl dd{
  margin-left: 0.1rem;
  margin-top: 0.2rem;
}
.ctbmytop dl dd h2{
  font-size: 0.28rem;
  margin-bottom: 0.14rem;
  color: #fff;
}
.ctbmytop dl dd div{
  display: flex;
  align-items: center;
}
.ctbmytop dl dd div i{
  width: 0.3rem;
  height: 0.3rem;
  background: url(../../assets/images/v1.png) no-repeat;
  background-size: contain;
}
.ctbmytop dl dd div p{
  font-size: 0.2rem;
  color: #fff;
  margin: 0 0.1rem;
}
.ctbmytop dl dd div span{
  width: 1rem;
  height: 0.4rem;
  background-color: #f30803;
  border-radius: 0.6rem;
  color:#fff;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.4rem;
}
.ctbmyright{
  margin-top: 0.1rem;
    font-size: 0.3rem;
    border-left: 2px solid #ffc483;
    padding-left: 0.3rem;
    color: #fff;
}
.ctbmyright p{
  font-size: 0.3rem;
    margin-bottom: 0.1rem;
}
.ctbmyright span{
  font-size: 0.2rem;
}
/* /////////////////////// */
.ctbteam_fa{
  padding: 0 0.4rem;
}
.ctbteam {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
   border-bottom-left-radius:0.2rem;
  border-bottom-right-radius:0.2rem;
  padding: 0.24rem 0 0.2rem;
}
.ctbteam ul{
  width: 100%;
  display: flex;
padding-bottom: 0.2rem;
 
}
.ctbteam ul li{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #484A59;
  font-weight: 600;
  flex: 1;
}

.ctbteam ul li span{
  font-size: 0.26rem;
  margin-bottom: 0.2rem;
}
.ctbteam ul li p{
  font-size: 0.24rem;
  /* margin-bottom: 1rem; */
}
/* ///////////////////////// */
.ctb_quanbudingdan{
  padding: 0.4rem;
 /* box-shadow:0 0 10px #ccc; */
 background-color: #fff;
  margin: 0.22rem 0.2rem 0;
  border-radius: 0.2rem;
}
.ctb_quanbudingdan .ctb_top{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ctb_quanbudingdan .ctb_top>p{
  font-size: 0.2rem;
  color: #89898a;
}
.ctb_quanbudingdan .ctb_top h2{
  display: flex;
  align-items: center;
}
.ctb_quanbudingdan .ctb_top h2 span{
  width: 0.42rem;
  height: 0.42rem;
  background: url(../../assets/images/quanbudingdan.png) no-repeat;
  background-size: contain;
}
.ctb_quanbudingdan .ctb_top h2 p{
  font-size: 0.32rem;
  margin-left: 0.2rem;
}
/* //////////////////////////////// */
.ctb_quanbudingdan .ctb_bot{
  margin-top: 0.25rem;
  border-top: 1px solid rgb(233, 231, 231);
  padding-top: 0.3rem;
}
.ctb_quanbudingdan .ctb_bot ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ctb_quanbudingdan .ctb_bot ul li{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ctb_quanbudingdan .ctb_bot ul li p{
  font-size: 0.26rem;
  color: #454545;
  margin-top: 0.18rem;
}
.ctb_quanbudingdan .ctb_bot ul li:nth-child(1) span{
  width: 0.45rem;
  height: 0.4rem;
  background: url(../../assets/images/icon_1.png) no-repeat;
  background-size: contain;
}
.ctb_quanbudingdan .ctb_bot ul li:nth-child(2) span{
  width:0.48rem;
  height: 0.4rem;
  background: url(../../assets/images/icon_2.png) no-repeat;
  background-size: contain;
}
.ctb_quanbudingdan .ctb_bot ul li:nth-child(3) span{
  width: 0.45rem;
  height: 0.4rem;
  background: url(../../assets/images/icon_3.png) no-repeat;
  background-size: contain;
}
.ctb_quanbudingdan .ctb_bot ul li:nth-child(4) span{
  width: 0.44rem;
  height: 0.42rem;
  background: url(../../assets/images/icon_4.png) no-repeat;
  background-size: contain;
}
.ctb_quanbudingdan .ctb_bot ul li:nth-child(5) span{
  width:0.54rem;
  height: 0.44rem;
  background: url(../../assets/images/icon_5.png) no-repeat;
  background-size: contain;
}

/* /////////////////////////////// */
.ctb_informationList{
  padding:0 0.4rem 0.3rem;
  margin-top: 0.2rem;
  background-color: #fff;
  margin: 0.2rem 0.2rem;
  border-radius: 0.2rem;
  
}
.ctb_informationList ul{
  padding: 0.2rem;
  border-radius: 0.2rem;
}
.ctb_informationList ul li{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ctb_informationList ul li div{
  display: flex;
  
  padding: 0 0 0.2rem 0;
  margin-top: 0.4rem;
  align-items: center;
}
.ctb_informationList ul li {
  border-bottom: 1px solid #eee;
}
.ctb_informationList ul li div p{
  margin-left: 0.1rem;
  font-size: 0.24rem;
  color: #2c2e3f;
  font-weight: 600;
}
.ctb_informationList ul li:nth-child(1) div span{
  width: 0.5rem;
  height: 0.5rem;
  background: url(../../assets/images/tubiao_1.png) no-repeat;
  background-size: contain;
}
.ctb_informationList ul li:nth-child(2) div span{
  width:0.5rem ;
  height: 0.5rem;
  background: url(../../assets/images/tubiao_2.png) no-repeat;
  background-size: contain;
}
.ctb_informationList ul li:nth-child(3) div span{
  width: 0.5rem;
  height: 0.5rem;
  background: url(../../assets/images/tubiao_3.png) no-repeat;
  background-size: contain;
}
.ctb_informationList ul li:nth-child(4) div span{
  width:0.5rem ;
  height: 0.5rem;
  background: url(../../assets/images/tubiao_4.png) no-repeat;
  background-size: contain;
}
.ctb_informationList ul li:nth-child(5) div span{
  width: 0.5rem;
  height: 0.5rem;
  background: url(../../assets/images/tubiao_5.png) no-repeat;
  background-size: contain;
}
.ctb_informationList ul li i{
  font-size: 0.22rem;
  font-weight: 700;
}


</style>>

