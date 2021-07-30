<template>
  <ality>
      <div class="ctb">
          <!-- <div class="ctbtopshye">
              <span class="icon-cuowu iconfont"></span>
              <p>慧砍商城</p>
          </div> -->
          <div class="ctbbanner">
            <div class="ctblie">
                <img src="../../assets/images/657.png" alt="">
              <ul>
                  <li class="linthon"> <p>首页</p> </li>
                  <li> <p>美妆</p> </li>
                  <li> <p>日常百货</p> </li>
                  <li> <p>食品</p> </li>
                  <li> <p>家电</p> </li>
                  <li> <p>箱包</p> </li>
                  <li> <p>手表</p> </li>
              </ul>
              <div class="ctbipt">
                    <div class="ipt">
                        请输入商品名称
                        <div class="fada"></div>
                    </div>
                    
              </div>
          </div>
          </div>
          
          <div class="ctbbiao">
              <div class="ctbo">
              <ul>
                  <li>
                      <!-- <img src="../../assets/images/l1.png" alt=""> -->
                      <span><img src="../../assets/images/l1.png" alt=""></span>
                      <p>首页</p>
                  </li>
                  <li>
                      <!-- <img src="../../assets/images/l2.png" alt=""> -->
                      <span><img src="../../assets/images/l2.png" alt=""></span>
                      <p>美妆</p>
                  </li>
                  <li>
                      <!-- <img src="../../assets/images/l3.png" alt=""> -->
                      <span><img src="../../assets/images/l3.png" alt=""></span>
                      <p>日用百货</p>
                  </li>
                  <li>
                      <!-- <img src="../../assets/images/l4.png" alt=""> -->
                      <span><img src="../../assets/images/l4.png" alt=""></span>
                      <p>食品</p>
                  </li>
                  <li>
                      <!-- <img src="../../assets/images/l5.png" alt=""> -->
                      <span><img src="../../assets/images/l5.png" alt=""></span>
                      <p>家电</p>
                  </li>
                  <li>
                      <!-- <img src="../../assets/images/l6.png" alt=""> -->
                      <span><img src="../../assets/images/l6.png" alt=""></span>
                      <p>箱包</p>
                  </li>
                  <li>
                      <!-- <img src="../../assets/images/l7.png" alt=""> -->
                      <span><img src="../../assets/images/l7.png" alt=""></span>
                      <p>手表</p>
                  </li>
                  <li>
                      <!-- <img src="../../assets/images/l8.png" alt=""> -->
                      <span><img src="../../assets/images/l8.png" alt=""></span>
                      <p>厨房用品</p>
                  </li>
                  <li>
                      <!-- <img src="../../assets/images/l9.png" alt=""> -->
                      <span><img src="../../assets/images/l9.png" alt=""></span>
                      <p>首饰</p>
                  </li>
                  <li>
                      <!-- <img src="../../assets/images/l10.png" alt=""> -->
                      <span><img src="../../assets/images/l10.png" alt=""></span>
                      <p>母婴系列</p>
                  </li>
              </ul>
              </div>
          </div>
          <div class="ctbmarket">
              <div class="ctbmarketleft">
                  <ul>
                      <li>好物推荐</li>
                      <li>GOOD&nbsp;&nbsp;ENJOY</li>
                      <li>快来0元撸好物</li>
                  </ul>
                  <span>
                  </span>
              </div>
              <div class="ctbmarketright">
                  <div class="ctbmarketright-one">
                      <ul>
                      <li>购买惊喜产品</li>
                      <li>EXCLUSIVE&nbsp;&nbsp;GOODS</li>
                      <li>快来0元撸好物</li>
                  </ul>
                  <span>

                  </span>
                  </div>
                  <div class="ctbmarketright-two">
                      <ul>
                      <li>获得精美礼品</li>
                      <li>POPULARITY&nbsp;LIST</li>
                      <li>潮流新品等你来</li>
                  </ul>
                  <span>

                  </span>
                  </div>
              </div>
          </div>
          
          <div class="cainixihuan">
              <h4>
                  <span>猜你喜欢</span>
                  <i>MORE</i>
              </h4>
              <ul>
                  <li>
                      <span></span>
                      <p>大地色亚光眼影盘</p>
                      <p>
                          <span>￥79.90</span>
                          <span>489人收藏</span>
                      </p>
                  </li>
                  <li>
                      <span></span>
                      <p>大地色亚光眼影盘</p>
                      <p>
                          <span>￥79.90</span>
                          <span>489人收藏</span>
                      </p>
                  </li>
                  <li>
                      <span></span>
                      <p>大地色亚光眼影盘</p>
                      <p>
                          <span>￥79.90</span>
                          <span>489人收藏</span>
                      </p>
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
    beforeCreate() {
       document.querySelector('body').setAttribute('style', 'background:#f3f3f3')
  }, //
   beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  },
}
</script>

<style scoped>

.ctbbanner .ctblie{
    width: 100%;
    height: 4.5rem;
    position: relative;
    
}
.ctbbanner .ctblie img{
    width: 100%;
}
.ctblie{
    /* position: fixed;
    top: 0.2rem;
    width: 100%; */
    /* padding-top:0.2rem ; */
}
.ctblie ul{
    position: absolute;
    left: 0;
    top: 0.28rem;
    padding: 0 0.5rem 0 0.5rem;
    display: flex;
   
    
}
.ctblie ul li{
    font-size: 0.28rem;
    margin-right: 0.2rem;
    padding-bottom: 0.17rem;
    color: #fff;
}
.linthon{
    color: #E65038 !important;
    border-bottom: 2px solid #e65038;
}
.ctbipt{
    padding: 0 0.4rem;
    width: 100%;
    position: absolute;
    display: flex;
    margin-top: 0.4rem;
    top: 0.6rem;
    /* position: relative; */
    
}
.ctbipt .ipt{
    width: 100%;
    height: 0.54rem;
    background-color: #d58025;
    color: #fff;
    font-size: 0.2rem;
    border-radius: 0.4rem;
    line-height: 0.54rem;
    padding-left: 0.96rem;
    position: relative;
}
.ctbipt .ipt::before{
    display: block;
    content: "";
    width: 0.68rem;
    height: 0.54rem;
    border-radius: 0.6rem;
    background-color: #b4631c;
    position: absolute;
    right: 0;
    top: 0;
}
.ctbipt .fada{
    width: 0.3rem;
    height: 0.3rem;
    background: url(../../assets/images/fada.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: 0.39rem;
    top: 0.1rem;
} 
.ctbbiao{
    padding: 0 0.3rem;
    transform: translateY(-0.9rem);
    /* margin-top: -2rem; */
}
.ctbbiao .ctbo{
    width: 100%;
    padding: 0.3rem;
    background-color: #fff;
    box-shadow:0 0 10px #ccc;
    border-radius: 0.2rem;
}
.ctbbiao ul{
    display: flex;
    /* justify-content: space-between; */
     flex-wrap: wrap;
}
.ctbbiao ul li{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.1rem 0.2rem 0;
}
.ctbbiao ul li span{
    width: 0.8rem;
    height: 0.8rem;
}
.ctbbiao ul li p{
    font-size: 0.22rem;
    color: #3f3f3f;
    font-weight: 600;
    margin-top: 0.04rem;
}
.ctbbiao ul li img{
    width: 100%;
    height: 100%;
}
.ctbbiao ul:nth-child(1){
    margin-bottom: 0.3rem;
}

.ctbmarket{
    padding: 0 0.3rem;
    transform: translateY(-0.8rem);
    margin-top: 0.2rem;
    display: flex;
}
.ctbmarketleft{
    /* flex: 1; */
    width: 3.5rem;
    height: 3.7rem;
    background-color: #ffedcb;
    border-radius: 0.2rem;
    /* margin-right: 0.2rem; */
    display: flex;
    padding-top: 0.5rem;
}
.ctbmarketleft ul{
    color: #f3b642;
    margin-left: 0.2rem;
}
.ctbmarketleft ul li:nth-child(1){
    font-size: 0.3rem;
    font-weight: 700;
}
.ctbmarketleft ul li:nth-child(2){
    margin: 0.1rem 0;
    font-size: 0.12rem;
}
.ctbmarketleft ul li:nth-child(3){
    font-size: 0.17rem;
}
.ctbmarketleft>span{
    margin-top: 1rem;
    width: 2.8rem;
    height: 2.96rem;
    background: url(../../assets/images/shiwu1.png) no-repeat;
    background-size: contain;
}
.ctbmarketright{
    /* flex: 1; */
    width: 3.3rem;
    height: 3.7rem;
    background-color: #f3f3f3;
    border-radius: 0.2rem;
    margin-left: 0.1rem;
}
.ctbmarketright .ctbmarketright-one{
    width: 100%;
    height: 2.5rem;
    background-color: #ffe1f5;
    margin-bottom: 0.1rem;
    border-radius: 0.2rem;
    position: relative;
    padding: 0.2rem 0 0 0.2rem;
}
.ctbmarketright .ctbmarketright-one ul{
     color: #ff89a2;
}
.ctbmarketright .ctbmarketright-one ul li:nth-child(1){
   
    font-size: 0.32rem;
}
.ctbmarketright .ctbmarketright-one ul li:nth-child(2){
    margin:0.1rem 0;
    font-size: 0.16rem;
}
.ctbmarketright .ctbmarketright-one ul li:nth-child(3){
    font-size: 0.2rem;
}
.ctbmarketright .ctbmarketright-one>span{
    display: block;
    width: 1.4rem;
    height: 1.2rem;
    background: url(../../assets/images/shiwu2.png) no-repeat;
    background-size: contain;
    position: absolute;
    right: 0;
    bottom: 0;
}
.ctbmarketright .ctbmarketright-two{
     width: 100%;
    height: 1.1rem;
    background-color: #ecffcf;
     border-radius: 0.2rem;
     position: relative;
}
.ctbmarketright .ctbmarketright-two ul{
    color: #9cd540;
    padding-top: 0.1rem;
     margin-left:0.1rem;
}
.ctbmarketright .ctbmarketright-two ul li:nth-child(1){
   
    font-size: 0.26rem;
}
.ctbmarketright .ctbmarketright-two ul li:nth-child(2){
    font-size: 0.12rem;
}
.ctbmarketright .ctbmarketright-two ul li:nth-child(3){
    font-size: 0.18rem;
    
}
.ctbmarketright .ctbmarketright-two>span{
    position: absolute;
    width: 0.95rem;
    height: 0.95rem;
    background: url(../../assets/images/shiwu3.png) no-repeat;
    background-size: contain;
    display: block;
    right: 0;
    bottom: 0.1rem;
}
.cainixihuan{
    margin: 0.3rem 0.3rem 0rem;
    transform: translateY(-0.7rem);
    background-color: #fff;
    padding:0.2rem  0 0.2rem 0.2rem;
    /* box-shadow:0 0 10px #ccc; */
    border-radius: 0.2rem;
}
.cainixihuan h4{
    display: flex;
    align-items: center;
    justify-content: space-between;

}
.cainixihuan h4 span{
    width: 1.1rem;
    height: 0.42rem;
    background-color: #ff6b24;
    color: #fff;
    text-align: center;
    line-height: 0.42rem;
    font-size: 0.2rem;
    font-weight: 500;
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    transform: translateX(-0.2rem);
}
.cainixihuan h4 i{
    font-size: 0.2rem;
    color: #ff6b24;
}
.cainixihuan ul{
    display: flex;
    margin-top: 0.2rem;
}
.cainixihuan ul li{
    display: flex;
    flex-direction: column;
}
.cainixihuan ul li:nth-child(1){
    margin: 0 0.52rem 0 0.43rem;
}
.cainixihuan ul li:nth-child(2){
    margin-right: 0.52rem;
}
.cainixihuan ul li:nth-child(1)>span{
    width: 1.8rem;
    height: 1.8rem;
    background: url(../../assets/images/caini1.png) no-repeat;
    background-size: contain;
}
.cainixihuan ul li:nth-child(2)>span{
     width: 1.8rem;
    height: 1.8rem;
     background: url(../../assets/images/caini2.png) no-repeat;
     background-size: contain;
}
.cainixihuan ul li:nth-child(3)>span{
     width: 1.8rem;
    height: 1.8rem;
     background: url(../../assets/images/caini3.png) no-repeat;
     background-size: contain;
}
.cainixihuan ul li>p{
    font-size: 0.2rem;
    color: #363636;
}
.cainixihuan ul li>p:nth-child(2){
    display: flex;
    align-items: center;
}
.cainixihuan ul li>p>span:nth-child(1){
    font-size: 0.2rem;
    color: #ff6535;
}
.cainixihuan ul li>p>span:nth-child(2){
    font-size: 0.16rem;
    color: #cfcfcf;
    -webkit-transform:scale(0.6);
}




</style>