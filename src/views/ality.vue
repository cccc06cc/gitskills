 <template>
  <div class="ctbgong">
      <div class="ctbtop" v-if="this.title">
          <span>
              
          </span>
          <p>慧砍商城</p>
      </div>
      <div class="content">
          <slot></slot>
      </div>
      
      <div class="ctbbot">
          <ul>
              <li>
                  <router-link to="/" tag="div">
                       <span class="icon-shouye iconfont" :style="(this.bot[0].url==$route.path) ? 'color:#ff7312' : '' "></span>
                       <p :style="(this.bot[0].url==$route.path) ? 'color:#ff7312' : '' ">首页</p>
                  </router-link>
              </li>
              <li>
                  <router-link to="/quanbu" tag="div">
                        <span class="icon-quanbu1 iconfont" :style="(this.bot[1].url==$route.path) ? 'color:#ff7312' : '' "></span>
                        <p :style="(this.bot[1].url==$route.path) ? 'color:#ff7312' : '' ">全部</p>
                  </router-link>
              </li>
              <li >
                  <router-link to="/bargain" tag="div">
                        <img src="../assets/images/kan.png" alt="">
                  </router-link>
              </li>
              <li>
                    <router-link to="/shop" tag="div">
                            <span class="icon-tianchongxing- iconfont" :style="(this.bot[2].url==$route.path) ? 'color:#ff7312' : '' "></span>
                            <p :style="(this.bot[2].url==$route.path) ? 'color:#ff7312' : '' ">购物车</p>
                    </router-link>
              </li>
              <li>
                  <router-link to="/my" tag="div">
                        <span class="icon-wodedangxuan iconfont" :style="(this.bot[3].url==$route.path) ? 'color:#ff7312' : '' "></span>
                        <p :style="(this.bot[3].url==$route.path) ? 'color:#ff7312' : '' ">我的</p>
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            title:false,
            bot:[
                {
                    name:"首页",
                    url:"/",
                },
                {
                    name:"全部",
                    url:"/quanbu"
                },
                {
                    name:"购物车",
                    url:"/shop"
                },
                {
                    name:"我的",
                    url:"/my"
                }
            ]
        }
    },
    
    methods:{
        
    },
    mounted(){
        
        // var dianji_span=document.querySelectorAll(".ctbbot>ul>li>div>span");
        // var dianji_p=document.querySelectorAll(".ctbbot>ul>li>div>p");
        // var url;
        // url = window.location.href;
        // var url_length = url.length;
        // if(url.indexOf("q") !=-1){
        //     dianji_p[1].style.color="#ff7312";
        //     dianji_span[1].style.color="#ff7312";
        // };
        // if(url_length<=25){
        //     dianji_p[0].style.color="#ff7312";
        //     dianji_span[0].style.color="#ff7312";
        // }

        // if(url.indexOf("o")!=-1){
        //     dianji_p[2].style.color="#ff7312";
        //     dianji_span[2].style.color="#ff7312";
        //     // alert(url.length);
        // };
        // if(url.indexOf("m")!=-1){
        //     dianji_p[3].style.color="#ff7312";
        //     dianji_span[3].style.color="#ff7312";
        // }

        (function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 7.5
	// if(rem>100){
	// 	rem=100;
	// }
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))




    }
    
}
</script>

<style>

.ctbbot{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0 0.3rem 0.3rem;
    height: 1.14rem;
    background-color: #fff;
}
.ctbbot ul{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}
.ctbbot ul li{
    transform: translateY(-0.3rem);
    /* font-size: 0.3rem; */
    /* color: #b7b7b7; */
    margin-top: 0.2rem;
}

.ctbbot ul li div{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #b7b7b7;
}
.ctbbot ul li div p{
    font-size: 0.24rem;
    margin-top: 0.1rem;
}
.ctbbot ul li div span{
    font-size: 0.38rem;
    /* color: red; */
}
.ctbbot ul li:nth-child(1) div{
    transform: translateY(-0.2rem);
}
.ctbbot ul li:nth-child(2) div{
    transform: translateY(-0.2rem);
}
.ctbbot ul li:nth-child(4) div{
    transform: translateY(-0.2rem);
}
.ctbbot ul li:nth-child(5) div{
    transform: translateY(-0.2rem);
}
/* .ctbbot ul li  div.router-link-active{
    text-align: center;
} */
/* .ctbbot ul li a p{
    font-size: 0.3rem;
} */
/* .ctbbot ul li:nth-child(1) div{
    width: 0.66rem;
    height: 1.02rem;
}
.ctbbot ul li:nth-child(2) div{
    width: 1.35rem;
    height: 1.02rem;
} */
.ctbbot ul li:nth-child(3) div{
    width: 1rem;
    height: 1.3rem;
    transform: translateY(-0.3rem);
}
/* .ctbbot ul li:nth-child(4) div{
    width: 1.02rem;
    height: 1.02rem;
}
.ctbbot ul li:nth-child(5) div{
   
    width: 0.66rem;
    height: 1.02rem;
} */
.ctbbot ul li  div img{
    width: 100%;
    height: 100%;
}
.content{
    padding: 0 0 1.2rem 0;
}

/* ***** */
/****************************************************/


/********************** 外边距 **********************/


/****************************************************/

article,
aside,
blockquote,
body,
button,
code,
dd,
div,
dl,
dt,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
input,
legend,
li,
menu,
nav,
ol,
p,
pre,
section,
td,
textarea,
th,
ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/****************************************************/


/******************** html和body ********************/


/****************************************************/

html {
    height: 100%;
    line-height: 1.15;
    /*在IOS中阻止文本大小根据设备方向进行大小的调整（需设置meta viewport），仅iOS Safari支持*/
    -webkit-text-size-adjust: 100%;
}

body {
    min-height: 100%;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #333;
    -webkit-font-smoothing: antialiased;
    /*禁止用户选择文本：IE6-9使用私有标签属性onselectstart="return false",Opera12.5使用私有标签属性 unselectable="on"*/
    -webkit-user-select: none;
    /*当用户点击iOS的Safari浏览器中的链接或JavaScript的可点击的元素时，覆盖显示的高亮颜色。*/
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}


/****************************************************/


/*********************** 表单 ***********************/


/****************************************************/

button,
input,
select,
optgroup,
option,
textarea {
    border: 0;
    outline: 0;
    background: none;
    /*去掉默认的UI来渲染按钮，仅支持Safari、Chrome和Firefox*/
    -webkit-appearance: none;
    -moz-appearance: none;
    /* 去掉对text-transform的继承（in Edge, Firefox, and IE） */
    text-transform: none;
    /*表单输入文本默认不能继承body的字体，按如下设置可以使用父级字体*/
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
}

::-moz-focus-inner {
    /*解决outline:0时，火狐下仍有边框的问题*/
    border: 0;
    padding: 0;
}

:focus {
    outline: 0;
    -webkit-tap-highlight-color: transparent;
}

::-webkit-input-placeholder {
    color: #bbb;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

input:focus,
textarea:focus,
keygen:focus,
select:focus {
    outline-offset: 0;
}

select,
input {
    vertical-align: middle;
}

input[type="search"],
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none !important;
}


/****************************************************/


/******************** 表格和列表**********************/


/****************************************************/

table {
    border-collapse: collapse;
    border-spacing: 0;
}

caption,
th {
    text-align: left;
}

li {
    list-style: none;
}


/****************************************************/


/******************* 文本和超链接 ********************/


/****************************************************/

a,
img {
    /*禁用a链接系统默认菜单，iOS 2.0及更高版本的Safari浏览器可用*/
    -webkit-touch-callout: none;
}

a,
ins {
    text-decoration: none;
}

fieldset,
img {
    border: 0;
}

img {
    vertical-align: middle;
}

del {
    text-decoration: line-through;
}

b,
strong {
    font-weight: normal;
}

em,
i {
    font-style: normal;
}

a {
    color: #333;
}

a:focus,
a:hover {
    color: #66b1ff;
}

a:active {
    color: #3a8ee6;
}


/****************************************************/


/******************* 公共样式和类 ********************/


/****************************************************/

.clearfix:after {
    content: "";
    display: block;
    line-height: 0;
    visibility: hidden;
    height: 0;
    clear: both;
}
</style>