<template>
  <div class="police">
    <!-- <Card></Card> -->
    <NavBar
      v-show="navShow"
      :title="title"
      :isleftarrow="isleftarrow"
      id="nav"
    ></NavBar>
    <div id="content-container">
      <div v-if="activePage == 1" class="category" id="cat1">
        <img class="img" src="../assets/police/police_man_index.png" />
        <p>Wenn Sie sich sicher sind, dass Sie eine Anzeige erstatten möchten, dann ist es wichtig, eventuelle Beweise so schnell wie möglich sichern zu lassen.</p>
        <div class="card-container">
          <Card
            xStart="10vw"
            height="60vmax"
            wid="100%"
            roundSize="4vmin"
            roundSizeLeft="4vmin"
          >
            <div class="inject">
              <router-link
                style="text-decoration: none; color: inherit"
                to="/main/police/steps"
              >
                <SvgIcon class="link_active1" name="link_police_active" />
              </router-link>
              <SvgIcon
                @click.native="activePage = 2"
                class="link_inactive1"
                name="link_110_inactive"
              />
            </div>
          </Card>
        </div>
      </div>
      <div v-else class="category" id="cat2">
        <img class="img" src="../assets/police/police_woman_index.png" />
        <p>Wenn alle Beweise vorhanden sind, und Sie noch Anzeige erstatten möchten. Wählen Sie bitte 110!</p>
        <div class="card-container">
          <Card
            xStart="10vw"
            height="60vmax"
            wid="100%"
            roundSize="4vmin"
            roundSizeLeft="4vmin"
          >
            <div class="inject">
              <div class="group" @click="call('110')">
              <SvgIcon class="link_active2" name="link_110_active" @click.native="call('110');"/>
              <SvgIcon
                name="call"
                color="#5fbf44"
                height="3ch"
                width="3ch"
                class="image"
              /></div>
              <SvgIcon
                @click.native="activePage = 1"
                class="link_inactive2"
                name="link_police_inactive"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
    <TabBar v-show="tabShow" :active="0"></TabBar>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import TabBar from "@/components/TabBar.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Lawyer",
  components: {
    Card,
    NavBar,
    TabBar,
  },
  methods: {
    call:function(number){
      window.location.href='tel:'+number;
    },
    sendSMS:function(number){
      window.open('sms:'+number);
    },
  },
  data() {
    return {
      activePage: 1,
      title: "",
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
  display: block;
  ::v-deep .van-nav-bar {
    margin-top: 1vh;
  }
}
#content-container {
  width: 100vw;
  height: 100vh;
  display: block;
  // overflow-y: scroll;
  // font-size: 5rem;
  /*padding:0 1rem*/
}

.card-container {
  filter: drop-shadow(2.4vw -1.11vh 0.99vh rgba(0, 0, 0, 0.1));
  -webkit-filter: drop-shadow(2.4vw -1.11vh 0.99vh rgba(0, 0, 0, 0.1));
  position: fixed;
  bottom: 0;
}

.card {
  background-color: $card-color;
  /*margin-bottom: 1.5rem;*/
  margin-bottom: 2vh;
  /*height:15vh;*/
  clip-path: var(--my-clip-path) !important;

  .inject {
    height: 35vh;
    width: 100vw;
    padding: 0 5vw;
    display: flex;
    flex-direction: column;
    .link_active1 {
      margin-top: 2ch;
      height: 10ch;
      width: fit-content;
    }
    .link_inactive1 {
      margin-top: 3ch;
      height: 2ch;
      width: 20ch;      
    }
    .group{
      .link_active2 {
        margin-top: 2.5ch;
        height: 7.8ch;
        width: 24ch;
      }
      .image{
        margin-left:2vw;
      }
    }
    
    .link_inactive2 {
      margin-top: 4ch;
      height: 2.3ch;
      width: 28ch;      
    }
    
  }
}

.police {
  position: absolute;
  width: 100vw;
  height: 100vh;
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
    p{
      position: fixed;
      bottom: 45vh;
      right:7vw;
      width:69.5vw;
      color:$primary-color;
      font-size:1.05em;
      -webkit-text-stroke: 0.03rem;
      text-align: justify;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      -ms-hyphens: auto;
      hyphens: auto;
    }
  }
}
::v-deep .van-nav-bar {
  background-color: transparent !important;
}

::v-deep .van-tabbar {
  background-color: $card-color;
  .van-tabbar-item {
    background-color: $card-color;
  }
}
</style>