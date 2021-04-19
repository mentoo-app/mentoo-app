<template>
  <div id="TabBar">
    <van-tabbar route>
      <van-tabbar-item to="/main/police"
        ><SvgIcon name="police_icon"></SvgIcon>Polizei</van-tabbar-item
      >
      <van-tabbar-item to="/main/lawyer"
        ><SvgIcon name="lawyer_icon"></SvgIcon>Anwaltsbüro</van-tabbar-item
      >
      <van-tabbar-item
        ><SvgIcon name="hospital_icon"></SvgIcon>Krankenhaus</van-tabbar-item
      >
      <van-tabbar-item
        ><SvgIcon name="psy_icon"></SvgIcon>Traumahilfe</van-tabbar-item
      >
      <van-tabbar-item
        ><SvgIcon name="news_icon"></SvgIcon>Auskünfte</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#TabBar {
  position: fixed;
  //position:relative;
  bottom: 0;
  left: 0;
  height: 10vh;
  line-height: 12vh;
  width: 100%;
  z-index: 100;
}
.van-cell::after,
[class*="van-hairline"]::after {
  display: none;
}
.van-tabbar {
  height: 12vh;
  padding: 0.5rem 0.5rem 0 0.5rem;

  .van-tabbar-item {
    ::v-deep .van-tabbar-item__text {
      font-size: 0.7rem;
      -webkit-text-stroke: 0.03rem;
      margin-bottom: 0.5rem;
    }

    i {
      height: 6vh;
      padding: 0.3rem;
      margin-bottom: 0.3rem;
    }
  }
}
</style>