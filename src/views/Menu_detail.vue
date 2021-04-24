<template>
  <div class="menu">
    <!-- <Card></Card> -->
    <NavBar
      v-show="navShow"
      :title="title"
      :isleftarrow="isleftarrow"
      id="nav"
    ></NavBar>
    <!-- <div id="place-holder"></div> -->
    <div id="content-container">
      <Card
        xStart="8vw"
        hei="90vh"
        wid="100%"
        roundSize="3vmin"
        roundSizeLeft="3vmin"
      >
        <div class="inject">
          <span class="title">{{ this.Faq.question }}</span>
          <p class="content">{{ this.Faq.answer }}</p>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Menu",
  components: {
    Card,
    NavBar,
  },
  methods: {},
  computed: {
    Faq: function () {
      let id = this.$route.query.questionId;
      return window.PageData.edu[id];
    },
  },
  data() {
    return {
      title: "Erkenntnis",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true,
    };
  },
};
</script>
<style lang="scss" scoped>
#nav {
  width: 100%;
  height: 8vh;
  display: block;
  ::v-deep .van-nav-bar {
    margin-top: 1vh;
  }
}

#content-container {
  width: 100%;
  height: 80vh;
  display: block;
  overflow-y: scroll;
  font-size: 5rem;
  /*padding:0 1rem*/
}

.card {
  background-color: $card-color;
  /*margin-bottom: 1.5rem;*/
  /*height:15vh;*/
  position: absolute;
  top: 10vh;
  left: 0;
}

.inject {
  height: 88vh;
  width: 100vw;
  padding-bottom: 2vh;
  padding-top: 2vh;
  padding-right: 5vw;
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .title {
    margin-top: 1ch;
    color: $primary-color;
    font-size: 1.3rem;
    -webkit-text-stroke: 0.03rem;
  }
  .content {
    margin-top: 5vh;
    color: $text-color;
    font-size: 1rem;
    line-height: 2ch;
    text-align: justify;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }
}
.menu {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #dedfd8;
  overflow-y: hidden;
}
.van-divider {
  border-color: $text-color;
  padding: 2vh 0;
}
</style>