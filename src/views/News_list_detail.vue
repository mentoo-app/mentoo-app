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
      <div class="head">
        <span class="title">{{Activity.title}}</span>
        <span class="subtitle" v-if="ActivityType=='pre'">{{Activity.subtitle}}</span>
        <span class="post_time green">{{Activity.post_time}}</span>
        <img class="image" :src="require('../assets/' +Activity.img)" alt="">
        <span class="subtitle" v-if="ActivityType=='demo'">{{Activity.subtitle}}</span>
        <p class="intro">{{Activity.intro}}</p>
      </div>
      <van-divider />
      <div class="middle" v-if="ActivityType=='demo'">
        <span class="explain_title subtitle">{{Activity.explain.title}}</span>
        <span class="explain_founder green">{{Activity.explain.founder}}</span>
        <span class="explain_text">{{Activity.explain.text}}</span>
      </div>
      <div class="middle" v-else>
        <span class="explain_title subtitle">{{Activity.explain.title}}</span>
        <ul class="explain_text">
          <li class="explain_text_item" v-for="item,id in this.Activity.explain.text" :key="id">
            {{item}}
          </li>
        </ul>
      </div>
      <van-divider />
      <div class="bottom">
        <div class="route" v-if="ActivityType=='demo'">
          <span class="route_title subtitle">{{Activity.route.title}}</span>
          <p class="route_text">{{Activity.route.text}}</p>
          <div class="route_contact"><span>Bei Interesse bitte Mail an </span><span class="green">{{Activity.route.contact}}</span></div>
        </div>
        <div class="detail">
          <span class="detail_title subtitle">Details:</span>
          <table class="detail_info" v-if="ActivityType=='demo'">
            <tr>
              <td>Datum:</td>
              <td>Veranstalter/in:</td>
            </tr>
            <tr class="green">
              <td>{{Activity.date}}</td>
              <td>{{Activity.person}}</td>
            </tr>
            <tr>
              <td>Zeit:</td>
              <td>Kontakt:</td>
            </tr>
            <tr class="green">
              <td>{{Activity.time}}</td>
              <td>{{Activity.tel}}</td>
            </tr>
            <tr>
              <td>Veranstaltungskategorien:</td>
              <td>Veranstaltung-Tags:</td>
            </tr>
            <tr class="green">
              <td>{{Activity.category}}</td>
              <td>{{Activity.tags}}</td>
            </tr>
          </table>
          <table class="detail_info" v-else>
            <tr>
              <td>Datum:</td>
              <td>Ort:</td>
            </tr>
            <tr class="green">
              <td>{{Activity.date}}</td>
              <td>{{Activity.place}}</td>
            </tr>
            <tr>
              <td>Zeit:</td>
              <td>Kontakt:</td>
            </tr>
            <tr class="green">
              <td>{{Activity.time}}</td>
              <td>{{Activity.tel}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "News_list",
  components: {
    NavBar,
  },
  methods: {},
  computed: {
    Activity: function () {
      let type = this.$route.query.activityType;
      let id = this.$route.query.activityId;
      return window.PageData.news[type][id];
    },
    ActivityType: function () {
      // let id = this.$route.query.activityId;
      return this.$route.query.activityType;
    },
    title: function () {
      if (this.ActivityType == "demo") {
        return "Demonstration teilnehmen";
      } else {
        return "Andere News wissen";
      }
    },
  },
  data() {
    return {
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
/*
#place-holder {
  width: 100vw;
  height: 8vh;
  display: block;
}*/
#content-container {
  width: 100%;
  padding: 0 4vw;
  height: 100vh;
  display: block;
  overflow-y: scroll;
  font-size: 5rem;
  /*padding:0 1rem*/
  .head,.middle,.bottom{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
}
.route,.detail{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.route_contact{
  width: 100%;
  display: flex;
  justify-content: space-between;
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


.green{
  color: $primary-color !important;
}
p,span{
  color:$text-color;
  text-align: left;
  font-size: 0.9rem;
  margin:1vh 0;
}

.title,.subtitle{
  -webkit-text-stroke-width: 0.5px;
}
.subtitle{
  font-size: 1.2rem;
}
.title{
  font-size: 1.5rem;
  width:90%
}
img,ul{
  width:100%;
  margin: 0 0 1vh 0;
}
.van-divider{
  border-color:$text-color;
  padding:1vh 0;
}
table{
  color: $text-color;
  text-align: left;
  margin-bottom: 3vh;
}
li{
  color: $text-color;
  text-align: left;
  font-size: 0.9rem;
}
ul li::before {
  content: "-";
}
td{
  min-width: 30vw;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  vertical-align: top;
  font-size:0.9rem;
}
</style>