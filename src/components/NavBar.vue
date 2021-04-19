<template>
  <div id="NavBar">
    <van-nav-bar
      fixed
      :title="title"
      :left-arrow="isleftarrow"
      :menu="hasmenu"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
    <template #left>
        <SvgIcon name="back_icon" width="1.5rem" height="1.5rem"></SvgIcon>
    </template>
    <template #right>
        <SvgIcon v-if="hasmenu" name="menu_icon" width="1.7rem" height="1.7rem"></SvgIcon>
        <SvgIcon v-else name="home_icon" width="1.7rem" height="1.7rem"></SvgIcon>
    </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  // title：用来显示导航栏的title，isleftarrow用来显示导航栏的左侧返回箭头
  props: ["title", "isleftarrow","hasmenu"],
  methods: {
    onClickLeft() {
      // 点击回退的时候当做地址回退
      //this.$router.go(-1);
      let backPath=this.$router.currentRoute.path.split("/").slice(0,-1).join('/');
      if(backPath==''){
        backPath='/';
      }
      this.$router.push(backPath);
    },
    onClickRight() {
      // 点击回退的时候当做地址回退
      if(this.hasmenu){
        this.$router.push('/main/menu');
      }else{
        this.$router.push('/main');
      }
      
    },
  },
};
</script>

<style lang="scss" scoped>
#NavBar {
  position: fixed;
  //position:relative;
  padding-top: 1vh;
  top: 0;
  left: 0;
  height: 8vh;
  line-height: 8vh;
  width: 100%;
  z-index: 100;
}

.van-nav-bar {
  position: absolute;
  display:inline-block;
  //bottom: 2vh;
  width: 100vw;

  //font-size: 0.8rem !important;
  color: $primary-color;
  /* 设置导航栏的渐变色 */
  // background-color: transparent !important;
  background-color: $bg-color; 
  border: 0;
  ::v-deep .van-nav-bar__title {
    //font-weight: 600 !important;
    -webkit-text-stroke: 0.05rem;
    font-size: 1.1rem;
  }
}
.van-hairline--bottom::after {
  /* 去除导航栏底部的白色横线 */
  border-bottom-width: 0px !important;
}
</style>