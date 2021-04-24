<template>
  <div class="psy">
    <!-- <Card></Card> -->
    <NavBar
      v-show="navShow"
      :title="title"
      :isleftarrow="isleftarrow"
      id="nav"
    ></NavBar>
    <div id="content-container">
      <div class="category" >
        <img class="img" src="../assets/psy/psy_index.png" />
        <p>Wenn Sie nach einer sexuellen Entblößung nicht mit Ihren Familie darüber sprechen wollen. Schweigen Sie bitte nicht. Hier gibt es erfahrene Psychologen.</p>
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
                to="/main/psy/list"
              >
                <SvgIcon class="link_active1" name="link_psy" />
              </router-link>
            </div>
          </Card>
        </div>
      </div>
      
    </div>
    <TabBar v-show="tabShow" :active="3"></TabBar>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import TabBar from "@/components/TabBar.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Psy",
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
      margin-top: 3ch;
      height: 8ch;
      width: 32ch;
    }
  }
}

.psy {
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