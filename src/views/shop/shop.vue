<template>
  <ality><div class="top_name">
        <span></span>
        <p>我的</p>
      </div>
    <div class="ctbkanjia">
      
    <div class="ctbkanjia_top">
      <h2>总共累计 <p>砍价师</p> </h2>
      <div class="yuanjiao">
        详情
      </div>
      <div class="xueyuan">
        <p>学员：1200</p>
        <p>学级：12</p>
      </div>
    </div>
    
    </div>
    <div class="jinritongji">
      <span></span>
      <h3>今日统计</h3>
      <p>2021-11-30</p>
    </div>
    <div class="xueyuankanjiashi">
      <div class="kanjia_1">
        <div class="kanjia_img">
          <img src="../../assets/images/lv.png" alt="">
        </div>
        <p>今日人数：12001</p>
      </div>
      <div class="kanjia_1">
        <div class="kanjia_img">
          <img src="../../assets/images/lan.png" alt="">
        </div>
        <p>今日人数：12001</p>
      </div>
      <div class="kanjia_1">
        <div class="kanjia_img">
          <img src="../../assets/images/cheng.png" alt="">
        </div>
        <p>今日人数：12001</p>
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
.ctbkanjia{
  padding: 0 0.2rem;
  /* transform: translateX(0.05rem); */
  margin-left: 0.05rem;
}
.ctbkanjia .ctbkanjia_top{
  width: 100%;
  height: 4rem;
  background: url(../../assets/images/kanjia.png) no-repeat;
  background-size: contain;
  position: relative;
}
.ctbkanjia .ctbkanjia_top h2{
  font-size: 0.56rem;
  color: aliceblue;
  font-weight: Medium;
  padding: 1.1rem 0 0 0.3rem;
}
.ctbkanjia .ctbkanjia_top h2 p{
  font-size: 0.45rem;
  color: #fff;
  font-weight: Medium;
}
.ctbkanjia .ctbkanjia_top .yuanjiao{
  margin: 0.88rem 0 0 0.3rem;
  background: url(../../assets/images/yuanjiao.png) no-repeat;
  width: 1.52rem;
  height: 0.41rem;
  background-size: contain;
  line-height: 0.41rem;
  font-size: 0.26rem;
  color: aliceblue;
  padding-left: 0.3rem;
}
.ctbkanjia .ctbkanjia_top .xueyuan{
  position: absolute;
  right: 1.35rem;
  top: 1.05rem;
  font-size: 0.31rem;
  color: #8f5310;
}
.ctbkanjia .ctbkanjia_top .xueyuan p:nth-child(1){
  margin-bottom: 0.24rem;
}
/* ////////// */
.jinritongji{
  padding: 0.2rem 0;
  margin: 0.2rem 0.2rem;
  display: flex;
  background-color: #fff;
  font-size: 0.4rem;
  align-items: center;
}
.jinritongji span{
  width: 0.06rem;
  height: 0.3rem;
  background-color: #f04c4a;
  border-radius: 0.2rem;
  margin:0 0.3rem 0 0.2rem;
}
.jinritongji h3{
  color: #484A59;
  margin-right: 0.68rem;
  font-size: 0.3rem;
}
.jinritongji p{
  font-size: 0.2rem;
  color: #8e8f96;
}
/* /////////////////// */
.xueyuankanjiashi{
  font-size: 0.34rem;
  margin: 0 0.2rem;
}
.xueyuankanjiashi .kanjia_1 {
  /* height: 1.68rem; */
  display: flex;
  padding: 0.2rem 0.5rem 0.2rem 0.2rem;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
}
.xueyuankanjiashi .kanjia_img{
  width: 2.36rem;
  height: 0.77rem;
  position: relative;
 }
 .xueyuankanjiashi .kanjia_img::before{
   content: "学院砍价师";
   font-size: 0.28rem;
   line-height: 0.77rem;
   text-align: center;
   position: absolute;
   left: 0.6rem;
   color: #fff;
 }
.xueyuankanjiashi .kanjia_1 img{
  width: 100%;
  height:100%
 }
.xueyuankanjiashi .kanjia_1 p{
  font-size: 0.3rem;
  color: #484a59;
}
.xueyuankanjiashi .kanjia_1:nth-child(2){
  margin: 0.2rem 0;
}
/* .xueyuankanjiashi .kanjia_1:nth-child(3){} */
</style>