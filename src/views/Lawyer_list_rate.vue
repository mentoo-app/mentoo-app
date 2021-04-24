<template>
  <div class="lawyer">
    <NavBar
      v-show="navShow"
      title="Rezension"
      :isleftarrow="isleftarrow"
      id="nav"
    ></NavBar>
    <div id="content-container">
      <div id="card-container">
        <Card
          xStart="8vw"
          wid="92vw"
          roundSize="2vmin"
          roundSizeLeft="3vmin"
          angle="40"
        >
          <div class="inject">
            <img :src="require('../assets/' + this.Lawyer.img.slice(0, -4)+'_Avatar.png')" />
            <span class="name">{{this.Lawyer.name}}</span>
            <span class="type">{{getTitle}}</span>
            <Rate
              :value="value"
              :disabled="false"
              buttonSize="2.8rem"
              starSize="1.8rem"
            ></Rate>
          </div>
        </Card>
      </div>
      <div id="reviews">
        <span class="counter">{{this.Lawyer.reviews.length}} Reviews</span>
        <div id="review-container">
          <div class="review" v-for="item,id in this.Lawyer.reviews" :key="id">
            <span class="reviewer_name">{{item.name}}</span>
            <div class=rate>
            <Rate
                  :value="item.rate"
                  :disabled="true"
                  buttonSize="1.1rem"
                  starSize="0.95rem"
                ></Rate>
            <span class="review_time">{{item.time}}</span>
            </div>
            <p class="comment">{{item.message}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Card from "../components/Card.vue";
import Rate from "@/components/Rate.vue";
export default {
  name: "Lawyer_list_detail",
  components: {
    NavBar,
    Card,
    Rate,
  },
  methods: {
    call: function (number) {
      window.location.href = "tel:" + number;
    },
    sendSMS: function (number) {
      window.open("sms:" + number);
    },
    getRate: function (item) {
      let sum = 0.0;
      for (let i of item.reviews) {
        sum = sum + i.rate;
      }
      let result = Math.round((sum / item.reviews.length) * 10) / 10.0;
      return result;
    },
    getDistance: function (item) {
      return item;
    },
  },
  computed: {
    Lawyer: function () {
      //return window.PageData.lawyer[this.$route.query.personId];
      let id=this.$route.query.personId;
      return window.PageData.lawyer.find(item=>item.id==id);
    },
    getTitle: function () {
      return this.Lawyer.sex == "m" ? "Fachanwalt" : "Fachanwältin";
    },
  },
  data() {
    return {
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
  padding: 0 4vw;
  height: 90vh;
  display: block;
  overflow-y: scroll;
  font-size: 5rem;
  // row-gap: 4vw;
  #reviews{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .counter{
      font-size:1.5rem;
      color:$text-color;
      -webkit-text-stroke-width: 0.5px;
    }
    #review-container{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      .review{
        margin:1.5vh 0;
        p{
          text-align: left;
          display: block;
          color:$text-color;
          font-size: 0.9rem;
        }
        .reviewer_name{
          float:left;
          color:$text-color;
          -webkit-text-stroke-width: 0.5px;
          font-size:1.2rem;
          margin-bottom: 1vh;
        }
        .rate{
          width:100%;
          display:inline-block;
          margin-bottom: 1vh;
          .Rate{
            width:5.5rem;
            height:1.1rem;
            display: inline;
            float:left;
          }
          span{
            float:left;
            color:$text-color;
          }
        }
      }
    }
  }
}

.card {
  background-color: $card-color;
  /*margin-bottom: 1.5rem;*/
  margin-bottom: 2vh;
  /*height:15vh;*/
  clip-path: var(--my-clip-path) !important;

  .inject {
    height: 30vh;
    width: 100%;
    padding: 0 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:2vh;
    img{
        width:12vh;
        height:12vh;
        border-radius: 12vh;
    }
    .name{
      font-size: 1.5rem;
      margin-top:2vh;
      -webkit-text-stroke-width: 0.2px;
      color: $text-color;
    }
    .type{
      font-size: 1.1rem;
      margin-top:1vh;
      -webkit-text-stroke-width: 0.2px;
      color: $text-color;
    }
  }
}

.lawyer {
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
#card-container{
  filter: drop-shadow(2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)) !important;
  -webkit-filter: drop-shadow(
    2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)
  ) !important;
}
</style>