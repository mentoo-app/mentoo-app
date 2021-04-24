<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "none",
    };
  },
  // vue监听路由对象$route的方法
  watch: {
    // watch $route 决定使用哪种过渡
    $route(to, from) {
      console.log(from); // '/'
      console.log(to); // '/next1'
      //to、from是最基本的路由对象，分别表示从(from)某个页面跳转到(to)另一个页面,to.path（表示要跳转到的路由地址），from.path同理。
      //const routerDeep = ["/", "/next1"];
      //找到to.path和from.path在routerDeep数组中的下标
      //const toDepth = routerDeep.indexOf(to.path);
      //const fromDepth = routerDeep.indexOf(from.path);
      const toPathArr=[...new Set(to.path.split('/'))];
      const fromPathArr=[...new Set(from.path.split('/'))];
      const toDepth = toPathArr.length;
      const fromDepth = fromPathArr.length;
      //this.transitionName = toDepth <= fromDepth ? "fold-left" : "fold-right";
      if (toDepth == fromDepth) {
        this.transitionName = "none";
      } else if (toDepth > fromDepth) {
        this.transitionName = "fold-left";
      } else {
        this.transitionName = "fold-right";
      }
    },
  },
};
</script>
<style lang="scss">
.fold-left-enter-active {
  animation-name: fold-left-in;
  animation-duration: 0.3s;
}
.fold-left-leave-active {
  animation-name: fold-left-out;
  animation-duration: 0.3s;
}
@keyframes fold-left-in {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    /* visibility: visible; */
  }
  /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-left-out {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    /* visibility: hidden; */
  }
}
.fold-right-enter-active {
  animation-name: fold-right-in;
  animation-duration: 0.3s;
}
.fold-right-leave-active {
  animation-name: fold-right-out;
  animation-duration: 0.3s;
}
@keyframes fold-right-in {
  0% {
    width: 100%;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    /* visibility: visible; */
  }
  /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
  100% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-right-out {
  0% {
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
  100% {
    width: 100%;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    /* visibility: hidden; */
  }
}
#app {
  /*
  width: 100vw;
  height: 100vh;
  */
  //overflow: hidden !important;
  overflow: scroll;
}

body {
  margin: 0 !important;
  //overflow: hidden;
  //min-height: 600px;
}
html,body{
  height: 100%;
}

@media screen and (orientation: landscape) and (min-aspect-ratio: 3/2) {
  #app {
    visibility: hidden;
  }
  body {
    background-color: #5fbf44;
    background-image: url("assets/landscape.png");
    background-size: 80vw auto;
    background-repeat: no-repeat;
    background-position: center;
    background-origin: content-box;
    height: 100vh;
  }
}

@media only screen and (max-device-width: 480px) and (orientation: landscape) and (min-aspect-ratio: 3/2) {
  /* iPhone landscape */
  #app {
    visibility: hidden;
  }
  body {
    background-color: #5fbf44;
    background-image: url("assets/landscape.png");
    background-size: 80vw auto;
    background-repeat: no-repeat;
    background-position: center;
    background-origin: content-box;
    height: 100vh;
  }
}
</style>