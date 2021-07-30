<template>
  <ality>
    <div class="ctbquanbu">
      <div class="top_name">
        <span></span>
        <p>全部商品</p>
      </div>
      <dl v-for="(value,key,index) in books" :key="index">
        <dt></dt>
        <dd>
          <h2>维吾尔族特酿干红葡萄酒</h2>
          <p>
            <span>ysing正在帮杨沪砍价</span>
            <span>1砍价券</span>
          </p>
          <div class="tou">
            <div class="tou_xiang">
              <i>
                <img src="../../assets/images/gh_2.png" alt="">
              </i>
              <i>
                 <img src="../../assets/images/gh_3.png" alt="">
              </i>
              <i>
                 <img src="../../assets/images/gh_4.png" alt="">
              </i>
            </div>
            <p>...当前有45566人在砍价</p>
          </div>
          <div class="kan">
              <span>订单价</span>
              <i>￥1885.00</i>
              <button>砍一刀</button>
          </div>
        </dd>
      </dl>
    </div>
  </ality>
</template>

<script>
import ality from '../ality.vue';
export default {
 data(){
   return {
     books:[1,2,3,4,5]
   }
 },
components:{
        ality
    },
    
   
}
</script>

<style scoped>
.ctbquanbu{}
.ctbquanbu .top_name{
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.ctbquanbu .top_name span{
  width: 0.1rem;
  height: 0.22rem;
  background: url(../../assets/images/top_fh.png) no-repeat;
  background-size: contain;
}
.ctbquanbu .top_name p{
  flex: 1;
  font-size: 0.32rem;
  color: #181818;
  text-align: center;
}
.ctbquanbu dl{
  display: flex;
  padding: 0.47rem 0.43rem 0.4rem 0.4rem; 
  margin: 0.2rem;
  /* box-shadow:0 0 10px #ccc; */
  background-color: #fff;
  border-radius: 0.2rem;
}
.ctbquanbu dl dt{
  width: 1.65rem;
  height: 1.65rem;
  background: url(../../assets/images/gh_1.png) no-repeat;
  background-size: contain;
  margin-right: 0.5rem;
}

.ctbquanbu dl dd{
  flex: 1;
}
.ctbquanbu dl dd>h2{
  font-size: 0.3rem;
  color: #484A59;
}
.ctbquanbu dl dd>p{
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0 0.24rem;
}
.ctbquanbu dl dd>p span:nth-child(1){
  font-size: 0.24rem;
  color: #38383A;
}
.ctbquanbu dl dd>p span:nth-child(2){
  font-size: 0.24rem;
  color: #FD7406;
}
.ctbquanbu dl dd>.tou{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.25rem;
  color: #38383A;
  margin-bottom: 0.4rem;
}
.ctbquanbu dl dd>.tou .tou_xiang {
  display: flex;
  
}
.ctbquanbu dl dd>.tou .tou_xiang i{
  width: 0.44rem;
  height: 0.44rem;
  border-radius: 50%;
}
.ctbquanbu dl dd>.tou .tou_xiang i img{
  width: 100%;
  height: 100%;
}
.ctbquanbu dl dd>.kan{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ctbquanbu dl dd>.kan span{
  font-size: 0.24rem;
  color: #38383A;
}
.ctbquanbu dl dd>.kan i{
 color: #FD7406;
 font-size: 0.24rem;
 font-weight: 700;
}
.ctbquanbu dl dd>.kan button{
  background-color: #f7230c;
  color: #fff;
  width: 1.55rem;
  height: 0.55rem;
  border-radius: 0.1rem;
  font-size: 0.25rem;
}

</style>>


