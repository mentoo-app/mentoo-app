<template>
  <div class="police">
    <!-- <Card></Card> -->
    <NavBar v-show="navShow" :title="title" :isleftarrow="isleftarrow" id="nav"></NavBar>
    <div id="content-container">Police Content</div>  
    <TabBar v-show="tabShow"></TabBar>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import TabBar from "@/components/TabBar.vue"
export default {
  name: "Lawyer",
  components: {
    NavBar,
    TabBar
  },
  data() {
    return {
      active: 0,
      title:'Rezension',
      isleftarrow:'',
      transitionName: "fade",
      navShow: true,
      tabShow: true,
    };
  },
};
</script>
<style lang="scss" scoped>
#nav{
  width:100%;
  height:8vh;
  display:block;
  ::v-deep .van-nav-bar{
    margin-top:1vh;
  }
}
#content-container {
  width: 100%;
  height: 80vh;
  display: block;
  overflow-y: scroll;
  // font-size: 5rem;
  /*padding:0 1rem*/
}
.police {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #dedfd8;
  flex-direction: column;
}
</style>