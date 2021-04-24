<template>
  <div class="news">
    <!-- <Card></Card> -->
    <NavBar
      v-show="navShow"
      :title="title"
      :isleftarrow="isleftarrow"
      id="nav"
    ></NavBar>
    <!-- <div id="place-holder"></div> -->
    <div id="content-container">
      <div class="text">
        <span class="title"
          >Protestveranstaltungen und aktuelle Auskünfte
        </span>
        <p class="content">
          Durch die Teilnahme an den sozialen Aktivitäten, wird die Diskussion zwischen Öffentlichkeit und Opfern mehr häufig.Egal, wo Sie sind, können Sie sofort rangehen, an einem Marsch oder an relevanten Aktivitäten teilzunehmen, damit der sexuelle Übergriff nicht mehr vorkommen. 
        </p>
      </div>
      <div id="card-container">
        <router-link :to="{ name: 'News_list', query: { activityType: 'demo' }}">
        <Card
          xStart="5vw"
          wid="92vw"
          roundSize="1.86vmin"
          roundSizeLeft="3vmin"
          angle="40"
        >
          <div class="inject">
            <SvgIcon
              name="speaker"
              color="#5fbf44"
              height="13vh"
              class="image"
            />
            <div class="content">
              <span class="content-title">Teilnahme an der Demo</span>
            </div>
          </div>
        </Card>
        </router-link>
        <router-link :to="{ name: 'News_list', query: { activityType: 'pre' }}">
        <Card
          xStart="5vw"
          wid="92vw"
          roundSize="1.86vmin"
          roundSizeLeft="3vmin"
          angle="40"
        >
          <div class="inject">
            <SvgIcon
              name="lecture"
              color="#5fbf44"
              width="13vh"
              class="image"
            />
            <div class="content">
              <span class="content-title">Erfahren anderer News</span>
            </div>
          </div>
        </Card>
        </router-link>
      </div>
    </div>
    <TabBar v-show="tabShow" :active="4"></TabBar>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import NavBar from "@/components/NavBar.vue";
import TabBar from "@/components/TabBar.vue";
export default {
  name: "News",
  components: {
    Card,
    NavBar,
    TabBar,
  },
  methods: {},
  computed: {
    PageData: function () {
      return window.PageData;
    },
  },
  data() {
    return {
      title: "Auskünfte",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true,
      tabShow: true,
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
/*
#place-holder {
  width: 100vw;
  height: 8vh;
  display: block;
}*/
#content-container {
  width: 100%;
  height: 80vh;
  display: block;
  overflow-y: hidden;
  font-size: 5rem;
  /*padding:0 1rem*/

  .text {
    padding: 0 4vw;
    height: 20vh;
    display: flex;
    align-self: center;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 2vh;
    padding-left: 4vw;
    span {
      font-size: 1.5rem;
      padding: 0 4vw;
      width: 90%;
      text-align: left;
      -webkit-text-stroke-width: 0.5px;
      color: $text-color;
    }
    p {
      padding: 0 4vw;
      margin-top: 2vh;
      text-align: left;
      color: $primary-color;
      -webkit-text-stroke-width: 0.3px;
      // text-align: justify;
      // -webkit-hyphens: auto;
      // -moz-hyphens: auto;
      // -ms-hyphens: auto;
      // hyphens: auto;
    }
  }
}

.news {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*justify-content: flex-start;*/
  text-align: center;
  background-color: #dedfd8;
}
.card {
  background-color: $card-color;
  /*margin-bottom: 1.5rem;*/
  
  /*height:15vh;*/
}
#card-container {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 4vw;
  width: 100%;
  // height: auto;
  // min-height: 100% !important;
  filter: drop-shadow(2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)) !important;
  -webkit-filter: drop-shadow(
    2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)
  ) !important;
}
.inject {
  height: 20vh;
  padding-right: 3vw;
  padding-bottom: 2vh;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 0px 0px;
  grid-template-areas:
    "image cont";
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
  .image{
    grid-area: image;
  }
  .content{
    justify-self: flex-start;
    grid-area: cont;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    span{
      color: $text-color;
    }
    .content-title{
      font-size: 1.5rem;
      -webkit-text-stroke-width: 0.5px;
      text-align: left;
    }
  }
}
.card {
  clip-path: var(--my-clip-path) !important;
}
</style>