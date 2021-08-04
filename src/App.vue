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
      transitionName: "slide-left",
      // include: isKeepAlive(this.$route) ? [this.$route.name] : [],
      history: []
    };
  },
  watch: {
    $route(to, from) {
       const lastPath = this.history[this.history.length - 1] || {},
        { isReplace, isBack } = this.$router;
     if (lastPath.path === to.path) {
        this.transitionName = "slide-right";
        this.history.pop();
      } else {
        this.transitionName = "slide-left";
        if (!isReplace) this.history.push({ path: from.path, name: from.name });
      }
    }
	// if()
  }
  //   watch: {
  //   $route(to, from) {
  //     const lastPath = this.history[this.history.length - 1] || {},
  //       { isReplace, isBack } = this.$router;
  //       // console.log(isReplace,isBack);
  //       console.log( this.history);

  //     if (lastPath.path === to.path) {
  //       this.transitionName = "fold-right";
  //       this.history.pop();
  //     } else {
  //       this.transitionName = "fold-left";
  //       if (!isReplace) this.history.push({ path: from.path, name: from.name });
  //     }

  //     if (isKeepAlive(to) && to.name !== "Login") {
  //       !this.include.includes(to.name) && this.include.push(to.name);
  //     }

  //     if (isKeepAlive(from) && isBack) {
  //       var index = this.include.indexOf(from.name);
  //       index !== -1 && this.include.splice(index, 1);
  //     }

  //     this.$router.isBack = false;
  //     this.$router.isReplace = false;

  //     console.log(this.transitionName, "change");
  //   }
  // },
};
</script>
<style>
.child-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  transition-property: transform,opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
}
.slide-left-enter {
  opacity: 1;
  transform: translate(100%, 0);
}

.slide-left-leave-active {
  z-index: 0;
   opacity: 0;
}
.slide-right-enter {
  opacity: 1;
  transform: translate(-100%, 0);
  /* z-index: 11; */
}

.slide-right-leave-active {
  z-index: 0;
   opacity: 0;
}
</style>

