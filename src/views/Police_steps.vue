<template>
  <div class="police_step">
    <!-- <Card></Card> -->
    <NavBar
      v-show="navShow"
      :title="title"
      :isleftarrow="isleftarrow"
      id="nav"
      :fixed="false"
    ></NavBar>
    <div id="content-container">
      <van-swipe >
        <van-swipe-item v-for="item in items" :key="item.id">
          <p>{{ item.tip }}</p>
          <SvgIcon :name="'police_step_' + item.id" height="40vh" width="80vw"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- <TabBar v-show="tabShow"></TabBar> -->
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
// import TabBar from "@/components/TabBar.vue";
// import Card from "@/components/Card.vue";
export default {
  name: "Lawyer",
  components: {
    // Card,
    NavBar,
    // TabBar,
  },
  data() {
    return {
      title: "Mögliche Beweissicherung",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true,
      items: [
        { id: 1, tip: "01 sich nicht waschen" },
        { id: 2, tip: "02 Chatverlauf speichern" },
        { id: 3, tip: "03 Fotos speichern" },
        { id: 4, tip: "04 Tatort navigieren" },
        { id: 5, tip: "05 Tonaufnahme machen" },
        { id: 6, tip: "06 DNA Test im Krankenhaus" },
        { id: 7, tip: "07 Haare sammeln" },
        { id: 8, tip: "08 Kleidungen bewahren" },
        { id: 9, tip: "09 Gedächtnisprotokoll schreiben" },
        {
          id: 10,
          tip:
            "10 K.O.-Tropfen sind nur kurzzeitig im Blut und im Urin nachweisbar!",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#nav {
  width: 100%;
  display: block;
  height: 8vh;
  ::v-deep .van-nav-bar {
    margin-top: 1vh;
  }
}
#content-container {
  width: 100vw;
  height: 100vh;
  display: block;
  padding:0 5vw;
  // overflow-y: scroll;
  // font-size: 5rem;
  /*padding:0 1rem*/
  ::v-deep .van-swipe-item {
    height: 85vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    p{
        font-size: 1.3em;
        top:5vh;
        position: fixed;
    }
    i{
        text-align: center;
    }
  }
}

.police_step {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // text-align: center;
  background-color: #dedfd8;
  // flex-direction: column;
  .category {
    width: 100vw;
    height: 100vh;
    .img {
      width: 100%;
      z-index: -1;
      display: inline;
    }
  }
}

// ::v-deep .van-nav-bar {
//   background-color: transparent !important;
// }

// ::v-deep .van-tabbar {
//   background-color: $card-color;
//   .van-tabbar-item {
//     background-color: $card-color;
//   }
// }
</style>