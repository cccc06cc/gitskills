<template>
  <ality>
    <div class="top_name">
        <span></span>
        <p>我的</p>
    </div>
    <div class="ctbkanjiashouyi">
      
      <div class="ctbkanjiashouyi_top">
        <div class="_top_img">
           <img src="../../assets/images/kanjiashouyi.png" alt="">
        </div>
        <div class="_top_content">
             <h2>
          <p>累计收益</p>
          <p>￥145623</p>
        </h2>
        <div class="ctbkanjiashouyi_bot">
          <p>
            <span style="color:#fbdecb;font-size: 0.26rem;">累计收益</span>
            <span style="color: #fff;font-size: 0.32rem;">&yen;145623</span>
          </p>
          <p>
            <span style="color:#fbdecb;font-size: 0.26rem;">累计收益</span>
            <span style="color: #fff;font-size: 0.32rem;">&yen;145623</span>
          </p>
          <p>
            <span style="color:#fbdecb;font-size: 0.26rem;">累计收益</span>
            <span style="color: #fff;font-size: 0.32rem;">&yen;145623</span>
          </p>
        </div>
        </div>
       
      </div>
      <div class="shouyimingxi">
        <span></span>
        <p>收益明细</p>
      </div>


      <div class="kanjiaquan">
        <p>2020-08-08</p>
        <h2>
          <p>&yen;2456400</p>
          <span></span>
        </h2>
        <ul>
          <li>
            <span>任务收益</span>
            <p>6463.4</p>
          </li>
          <li>
            <span>分享收益</span>
            <p>6463.4</p>
          </li>
          <li>
            <span>平级收益</span>
            <p>6463.4</p>
          </li>
          <li>
            <span>团队奖励</span>
            <p>6463.4</p>
          </li>
        </ul>
      </div>
      <div class="kanjiaquan">
        <p>2020-08-08</p>
        <h2>
          <p>￥2456400</p>
          <span></span>
        </h2>
        <ul>
          <li>
            <span>任务收益</span>
            <p>6463.4</p>
          </li>
          <li>
            <span>分享收益</span>
            <p>6463.4</p>
          </li>
          <li>
            <span>平级收益</span>
            <p>6463.4</p>
          </li>
          <li>
            <span>团队奖励</span>
            <p>6463.4</p>
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
    
  //  beforeDestroy() {
  //   document.querySelector('body').removeAttribute('style')
  // },
    
}
</script>

<style scoped>
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
.ctbkanjiashouyi{
  padding: 0 0.1rem 0 0.1rem;
}

.ctbkanjiashouyi .ctbkanjiashouyi_top{
   width: 100%;
  /* height: 5.6rem; */
  position: relative;
}
.ctbkanjiashouyi .ctbkanjiashouyi_top ._top_content{
  position: absolute;
  top: 0;
  left: 0;
}
.ctbkanjiashouyi .ctbkanjiashouyi_top ._top_img{
  width: 100%;
  height: 3.9rem;
}
.ctbkanjiashouyi .ctbkanjiashouyi_top  img{
  width: 100%;
  height: 100%;
}
.ctbkanjiashouyi .ctbkanjiashouyi_top h2{
  margin: 0 0 0 0.4rem;
  padding: 0.6rem 0 0 0;
}
.ctbkanjiashouyi .ctbkanjiashouyi_top h2 p:nth-child(1){
  color: #fbdecb;
  font-size: 0.42rem;
}
.ctbkanjiashouyi .ctbkanjiashouyi_top h2 p:nth-child(2){
  color: #ffffff;
  font-size: 0.58rem;
  font-weight: 700;
  transform: translateX(-0.1rem);
}
.ctbkanjiashouyi_bot{
  display: flex;
  padding-left: 0.5rem;
  margin-top: 0.6rem;
}
.ctbkanjiashouyi_bot p{
    display: flex;
    flex-direction: column;
}
.ctbkanjiashouyi .ctbkanjiashouyi_top .ctbkanjiashouyi_bot p span:nth-child(1){
  margin-bottom: 0.23rem;
  /* font-size: 0.26rem; */
}
.ctbkanjiashouyi .ctbkanjiashouyi_top .ctbkanjiashouyi_bot p span:nth-child(2){
  font-family: 'SourceHanSansCN-Bold';
}
.ctbkanjiashouyi .ctbkanjiashouyi_top .ctbkanjiashouyi_bot p:nth-child(2){
  margin: 0 0.3rem;
  padding: 0 0.3rem;
  border-left: 1px solid #f09a7c;
  border-right: 1px solid #f09a7c;
}


 .ctbkanjiashouyi .shouyimingxi{
  height: 0.74rem;
  line-height: 0.74rem;
  display: flex;
  /* box-shadow:0 0 10px #ccc; */
  background-color: #fff;
  margin-top: 0.2rem;
  align-items: center;
}
.ctbkanjiashouyi .shouyimingxi span{
  width: 0.06rem;
  height: 0.3rem;
  background-color: #f04c4a;
  display: block;
  border-radius: 0.2rem;
  margin: 0 0.2rem;
}
.ctbkanjiashouyi .shouyimingxi p{
  font-size: 0.3rem;
  color: #484A59;
  font-family: 'SourceHanSansCN-Regular';
}
/* /////////////////////// */
.ctbkanjiashouyi .kanjiaquan{
  margin-top: 0.2rem;
  /* box-shadow:0 0 10px #ccc; */
  background-color: #fff;
  padding: 0.24rem 0.4rem 0.4rem 0.4rem;
}
.ctbkanjiashouyi .kanjiaquan>p{
  font-size: 0.2rem;
  color: #484A59;
  font-family: 'SourceHanSansCN-Regular';
}
.ctbkanjiashouyi .kanjiaquan>h2{
  display: flex;
  align-items: center;
}
.ctbkanjiashouyi .kanjiaquan>h2 p{
  font-size: 0.35rem;
  /* transform: translateX(-0.1rem); */
  color: #484A59;
  font-family: 'SourceHanSansCN-Regular';
  margin-right: 0.32rem;
  font-weight:Regular;
}
.ctbkanjiashouyi .kanjiaquan>h2 span{
  width: 1.1rem;
  height: 0.75rem;
  background: url(../../assets/images/kanjiaquan.png) no-repeat;
  background-size: contain;
}
.ctbkanjiashouyi .kanjiaquan>ul{
  display: flex;
}
.ctbkanjiashouyi .kanjiaquan>ul li{
  font-family: 'SourceHanSansCN-Regular';
  margin-right: 0.66rem;
}
.ctbkanjiashouyi .kanjiaquan>ul li span{
  font-size: 0.24rem;
  color: #89898a;
  margin-bottom: 0.2rem;
}
.ctbkanjiashouyi .kanjiaquan>ul li p{
  font-size: 0.28rem;
  color: #484A59;
  font-weight: 600;
  font-family: 'SourceHanSansCN-Regular';
}
.ctbkanjiashouyi .kanjiaquan>ul li:last-child{
  margin-right: 0;
}


</style>