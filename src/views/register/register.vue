<template>
    <div class="register">
        <!--  -->
        <div class="register_top"  @click="fh">
                <span></span>
                <p>用户注册</p>
        </div>
        <!--  -->
         <div class="logo_back">
                <span></span>
         </div>
         <!--  -->
         <div class="register_form">
            <div class="shuru">
                <div class="ipt">
                    <input type="text" placeholder="请输入输入手机号码">
                </div>
                <div class="ipt">
                    <input type="password" placeholder="请输入密码">
                </div>
                 <div class="ipt">
                    <input type="password" placeholder="验证码">
                    <span>发送验证码</span>
                </div>
                 <div class="ipt">
                    <input type="password" placeholder="邀请码">
                </div>
            </div>
            <div class="register">
                <p>已有账号?</p>
                <p>立即注册录</p>
            </div>
            <div class="but">
                <button>确认提交</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     beforeCreate() {
       document.querySelector('body').setAttribute('style', 'background:#fff');
  }, 
   beforeDestroy() {
    document.querySelector('body').removeAttribute('style');
  }, 
    mounted(){
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


    },
    methods:{
        fh(){
            window.history.go(-1)
        }
    }
}
</script>

<style scoped>
     .register .register_top{
        height: 0.6rem;
        display: flex;
        align-items: center;
        padding-left: 0.2rem;
    }
    .register .register_top span{
        width: 0.22rem;
        height: 0.22rem;
        background: url(../../assets/images/close.png) no-repeat;
        background-size: contain;
        
    }
    .register .register_top p{
        font-size: 0.32rem;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #000000;
        line-height: 0.6rem;
        flex: 1;
        text-align: center;
        transform: translateX(-0.2rem);
    }
    .logo_back{
        height: 1.63rem;
        display: flex;
        justify-content: center;
        margin-top: 0.5rem;
    }
    .logo_back  span{
        width: 1.63rem;
        height: 1.63rem;
        background: url(../../assets/images/huikan.png) no-repeat;
        background-size: contain;
    }
     .register .register_form{
        margin-top: 1.4rem;
    }
    .register .register_form .shuru{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .register .register_form .ipt{
        width: 6rem;
        height: 0.98rem;
        background-color: #f4f4f4;
        border-radius: 0.4rem;
        font-size: 0.3rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
        margin-bottom: 0.3rem;
    }
    .register .register_form .ipt:last-child{
        margin-bottom: 0;
    }
    .register .register_form .shuru .ipt input{
        width: 100%;
        height: 100%;
        padding-left : 0.5rem;
    }
    .register .register_form .ipt:nth-child(3){
        position: relative;
    }
    .register .register_form .ipt:nth-child(3) span{
        font-size: 0.26rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FF804C;
        position: absolute;
        right: 0.4rem;
        top: 0.38rem;
    }
     .register_form .register{
        margin-top: 0.85rem;
        display: flex;
        justify-content: center;
    }
    .register_form .register p{
        font-size: 0.33rem;
    }
    .register_form .register p:first-child{
        color:#AEAEAE;
        margin-right: 0.1rem;
    }
    .register_form .register p:last-child{
        color: #FF804C;
    }
    .register_form .but{
        display: flex;
        justify-content: center;
        margin-top: 0.6rem;
    }
    .register_form .but button{
        width: 6.6rem;
        height: 0.86rem;
        background-color: #F15F2B;
        border-radius: 0.43rem;
        font-size: 0.33rem;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #FEFEFE;
    }
</style>