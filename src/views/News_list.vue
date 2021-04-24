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
      <div id="card-container">
        <router-link v-for="item,id in this.Activities" :key="id" :to="{ name: 'News_list_detail', query: { activityType: ActivityType, activityId: id}}">
          <Card 
            xStart="5vw"
            wid="92vw"
            roundSize="1.86vmin"
            roundSizeLeft="3vmin"
            angle="40"
          >
            <div class="inject">
              <span class="title">{{item.title}}</span>
              <div class="image">
                <img :src="require('../assets/' +item.img.slice(0,-4)+'_Card.png')" >
                <div class="label">{{item.label}}</div>
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
  name: "News_list",
  components: {
    Card,
    NavBar,
    TabBar,
  },
  methods: {},
  computed: {
    Activities: function () {
      let type=this.$route.query.activityType;
      return window.PageData.news[type];
    },
    ActivityType:function(){
        // let id = this.$route.query.activityId;
        return this.$route.query.activityType;
    },
    title:function(){
      if(this.ActivityType=="demo"){
        return "Demonstration teilnehmen"
      }else{
        return "Andere News wissen"
      }
    }
  },
  data() {
    return {
    //   title: "Auskünfte",
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
  height: 80vh;
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
  height: 30vh;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 0px 0px;
  grid-template-areas:
    "title"
    "img";
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
  .title{
    grid-area: title;
    text-align: left;
    width: 90%;
    font-size: 1.5rem;
    color: $text-color;
    -webkit-text-stroke-width: 0.5px;
    margin-bottom: 2vh;
  }
  .image{
    grid-area: img;
    width: 100%;
    position: relative ;
    img{
      width: 100%;
      height: 23vh;
    }
    .label{
    display: block;
    position:absolute;
    bottom: 3.5vh;
    right: 4vw;
    color: $primary-color;
    width:20ch;
    font-size: 0.8rem;
    text-align: right;
    -webkit-text-stroke-width: 0.5px;
  }
  }
  
  
}
.card {
  clip-path: var(--my-clip-path) !important;
}
</style>