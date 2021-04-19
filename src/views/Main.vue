<template>
  <div class="menu">
    <!-- <Card></Card> -->
    <NavBar
      v-show="navShow"
      :title="title"
      :isleftarrow="isleftarrow"
      fixed
      hasmenu="true"
      id='nav'
    ></NavBar>
    <!-- <div id="place-holder"></div> -->
    <div id="content-container">
      <SvgIcon
        name="menu_headline"
        color="#5fbf44"
        height="10vh"
        width="60vw"
        id="headline"
      />
      <div id="card-container">
        <Card
          v-for="item in items"
          :key="item.id"
          @click.native="$router.push('/main/'+item.name)"
          xStart="6vw"
          wid="88vw"
          roundSize="3vmin"
          roundSizeLeft="4vmin"
          angle="50"
        >
        
          <div class="inject">
            
            <SvgIcon
              :name="'0' + item.id + '_' + item.name"
              color="#5fbf44"
              height="30vw"
              width="40vw"
              class="number"
            />
            <div class="title">
            <SvgIcon name="arrow_in" color="#5fbf44" height="1.5ch" width="2ch" class="arrow" />
            <div class="title_name">
              <span>{{ item.title1 }}</span><br />
              <span>{{ item.title2 }}</span>
            </div>
            </div>
            <SvgIcon
              :name="item.name + '_icon'"
              color="#5fbf44"
              height="15vh"
              width="50vw"
              class="icon"
            />
          </div>
        </Card>
      </div>
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
  data() {
    return {
      active: 0,
      title: "",
      isleftarrow: false,
      transitionName: "fade",
      navShow: true,
      items: [
        { id: 1, title1: "Strafanzeige", title2: "an die Polizei", name: "police" },
        { id: 2, title1: "Strafanzeige", title2: "an die Kanzlei", name: "lawyer" },
        { id: 3, title1: "Care Management", title2: "im Krankenhaus", name: "hospital" },
        { id: 4, title1: "Psychologische", title2: "Beratung", name: "psy" },
      ],
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
#headline {
  margin-left: 6vw;
}
#place-holder {
  width: 100vw;
  height: 8vh;
  display: block;
}
#content-container {
  width: 100vw;
  height: 100vh;
  display: block;
  overflow-y: scroll;
  font-size: 5rem;
  /*padding:0 1rem*/
}
.card {
  background-color: $card-color;
  /*margin-bottom: 1.5rem;*/
  margin-bottom: 6vw;
  /*height:15vh;*/
}
#card-container {
  padding: 0 6vw;
  width: 100%;
  height: auto;
  min-height: 100% !important;
  overflow-y: visible;
  filter: drop-shadow(2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)) !important;
  -webkit-filter: drop-shadow(
    2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)
  ) !important;
}
.van-cell::after,
[class*="van-hairline"]::after {
  display: none;
}
.menu {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*justify-content: flex-start;*/
  background-color: #e0e0dc;
  ::v-deep .van-tabbar {
    height: 12vh;
    padding: 0 0.5rem;
    /*
    background-color: #dedfd8;
    .van-tabbar-item--active {
      background-color: #dedfd8;
    }*/
    .van-tabbar-item {
      i {
        height: 8vh;
        padding: 0.3rem;
      }
    }
  }
}
.inject {
  height: 45vh;
  padding-bottom: 2vh;
  padding-top: 1vh;
  padding-right: 4vw;
  padding-left:2vw;
  display: grid;
  grid-template-areas: 
  "number"
  "title"
  "icon";
  .number{
    padding-left:4vw;
    grid-area: number;
    justify-self: start;
  }
  .title{
    padding-left:4vw;
    grid-area: title;
    display: flex;
  }
  .icon{
    grid-area: icon;
    justify-self: end;
  }
}
</style>