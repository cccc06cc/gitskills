import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/iconfont.css'

// import "./assets/css/base.css"
// import "./assets/js/flexible"
// import 'vueg/animate.min.css'
// import vueg from 'vueg'
// const options = {
//   duration: '0.3',					//转场动画时长,默认为0.3,单位秒
//   firstEntryDisable: false,		//值为true时禁用首次应用的渐现动画,默认为false
//   firstEntryDuration: '.6',		//首次进入应用时的渐现时长,默认为.6
//   forwardAnim: 'fadeInRight',		//前进动画,默认为fadeInRight
//   backAnim: 'fadeInLeft',			//后退动画,默认为fedeInLeft
//   sameDepthDisable: false,			//url深度相同时禁用动画,默认为false
//   tabs: [{
//     name: 'home'
//   }, {
//     name: 'my'
//   }],								//默认为[],name对应路由的name,一实现类似app中的tab页面水平转场效果,如果tab[1]到tab[0],会使用backAnim动画,tab[1]到tab[2],会使用forwardAnim动画
//   tabsDisable: false,				//值为true时,tabs间的转场没有动画,默认为false
//   disable: false,					//禁用转场动画,默认为false,嵌套路由默认为true
// }

// Vue.use(vueg, router,options);



// import MyVant from "./components/vant/index.js";
// use函数会默认去调用install方法
// Vue.use(MyVant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
