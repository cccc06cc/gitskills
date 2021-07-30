<template>
	<div id="app">
		<!-- 根路由的出口 -->
		<transition :name="transitionName">
			<keep-alive>
				<router-view class="child-view"></router-view>
			</keep-alive>
    	</transition>
	</div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      const prevStamps = from.query.stamps || 0;
      const nextStamps = to.query.stamps || 0;
      this.transitionName = prevStamps > nextStamps ? "slide-right" : "slide-left";
		console.log(from.query.stamps);
		console.log(to.query.stamps);
    }
	// if()
  }
};
</script>
<style>
.child-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition-property: transform,opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
.slide-left-enter {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-enter-active {
  z-index: 10;
}
.slide-left-leave-active {
  z-index: 0;
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
  /* z-index: 11; */
}
.slide-right-enter-active {
  z-index: 10;
}
.slide-right-leave-active {
  z-index: 0;
}
</style>

