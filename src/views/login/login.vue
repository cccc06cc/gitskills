<template>
    <div class="login">
        <div class="login_top" @click="fh">
            <span></span>
            <p>用户注册</p>
        </div>
        <div class="logo">
            <div class="logo_back">
                <span></span>
            </div>
            <div class="logo_cut">
                <p class="on">账号登录</p>
                <p>快速登录</p>
            </div>
        </div>
        <div class="login_form">
            <div class="shuru">
                <div class="ipt">
                    <input type="text" placeholder="输入手机号码">
                </div>
                <div class="ipt">
                    <input type="password" placeholder="填写登录密码">
                </div>
            </div>
            <div class="forget">
                    <span></span>
                    <p>忘记密码</p>
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

<style>
    .login{}
    .login .login_top{
        height: 0.6rem;
        display: flex;
        align-items: center;
        padding-left: 0.2rem;
    }
    .login .login_top span{
        width: 0.22rem;
        height: 0.22rem;
        background: url(../../assets/images/close.png) no-repeat;
        background-size: contain;
        
    }
    .login .login_top p{
        font-size: 0.32rem;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #000000;
        line-height: 0.6rem;
        flex: 1;
        text-align: center;
        transform: translateX(-0.2rem);
    }
    .login .logo{
        margin-top: 0.5rem;
        display: flex;
        flex-direction: column;
    }
    .logo .logo_back{
        height: 1.63rem;
        display: flex;
        justify-content: center;
    }
    .login .logo_back  span{
        width: 1.63rem;
        height: 1.63rem;
        background: url(../../assets/images/huikan.png) no-repeat;
        background-size: contain;
    }
    .login .logo .logo_cut{
        display: flex;
        margin-top: 0.9rem;
    }
    .login .logo .logo_cut p{
        flex: 1;
        text-align: center;
        font-size: 0.33rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #746F75; 
        line-height: 0.41rem;
    }
    .login .logo .logo_cut .on{
        font-size: 0.42rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #000000;
        position: relative;
    }
    .login .logo .logo_cut .on::before{
        display: block;
        content: "";
        width: 1.5rem;
        height: 0.04rem;
        background-color: #e2371b;
        position: absolute;
        left: 1.1rem;
        bottom: -0.2rem;
    }

    .login .login_form{
        margin-top: 1.4rem;
    }
    .login .login_form .shuru{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login .login_form .ipt{
        width: 6rem;
        height: 0.98rem;
        background-color: #f4f4f4;
        border-radius: 0.4rem;
        font-size: 0.3rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #999999;
    }
    .login .login_form .shuru .ipt input{
        width: 100%;
        height: 100%;
        padding-left : 0.5rem;
    }
    .login .login_form .ipt:nth-child(1){
        margin-bottom: 0.47rem;
    }
    .login_form .forget{
        display: flex;
        justify-content: flex-end;
        padding-right: 0.75rem;
        margin-top: 0.3rem;
    }
    .login_form .forget span{
        width: 0.3rem;
        height: 0.3rem;
        background: url(../../assets/images/wangji.png) no-repeat;
        background-size: contain;
    }
    .login_form .forget p{
        font-size: 0.28rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #FF804C;
    }
    .login_form .register{
        margin-top: 0.85rem;
        display: flex;
        justify-content: center;
    }
    .login_form .register p{
        font-size: 0.33rem;
    }
    .login_form .register p:first-child{
        color:#AEAEAE;
        margin-right: 0.1rem;
    }
    .login_form .register p:last-child{
        color: #FF804C;
    }
    .login_form .but{
        display: flex;
        justify-content: center;
        margin-top: 0.6rem;
    }
    .login_form .but button{
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