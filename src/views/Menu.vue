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
      <Card xStart="8vw" hei="90vh" wid="100%" roundSize="3vmin" roundSizeLeft="3vmin">
        <div class="inject">
          <div v-for="item,id in this.Faq" :key="id">
            <router-link :to="{ name: 'Menu_detail', query: { questionId: id }}">
              <div class="item">
                <div class="text">
                  <span class="title">{{item.question}}</span>
                  <span class="content">{{item.answer.slice(0,40)+'...'}}</span>
                </div>
                <SvgIcon class="icon" name="arrow_right" width="3ch" height="3ch"/>
              </div>
            </router-link>
            <van-divider v-if="id!=Faq.length-1"/>
          </div>
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
  methods: {
    
  },
  computed: {
    Faq: function () {
      return window.PageData.edu;
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
  height: 88vh;
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
  top:10vh;
  left:0;
}

.inject {
  height: 88vh;
  width:100vw;
  padding-bottom: 2vh;
  padding-top: 2vh;
  padding-right: 4vw;
  padding-left: 4vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  .item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
      display: flex;
      flex-direction: column;
      padding-right:4vw;
      .title{
        color:$primary-color;
        font-size:1.1rem;
        -webkit-text-stroke: 0.03rem;
      }
      .content{
        margin-top:0.5ch;
        color:$text-color;
        font-size:0.9rem;
      }
    }
    
  }
}
.menu {
  position: absolute;
  width: 100vw;
  height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // text-align: center;
  background-color: #dedfd8;
  overflow-y: hidden;
}
.van-divider{
  border-color:$text-color;
  padding:2vh 0;
}
</style>