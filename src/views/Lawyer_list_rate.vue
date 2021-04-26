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
          hei="90vh"
          wid="92vw"
          roundSize="2vmin"
          roundSizeLeft="3vmin"
          angle="40"
        >
          <div :class="{'inject':true, 'card_strech':isStreched}">
            <img :src="require('../assets/' + this.Lawyer.img.slice(0, -4)+'_Avatar.png')" />
            <span class="name">{{this.Lawyer.name}}</span>
            <span class="type">{{getTitle}}</span>
            <Rate
              :value="myRate"
              :disabled="submitted"
              buttonSize="2.8rem"
              starSize="1.8rem"
              @after-rate="callBackRate"
              @click.native="switchRate"
            ></Rate>
            <div :class="{'input_box':true, 'hide':!isStreched}">
              <!-- <div class="input_box hide"> -->
              <span class="comment_title">Feedback von</span>
              <textarea name="comment" id="comment_text" class="comment_show" placeholder="Berichte anderen von deinen Eindrücken" v-model="myComment"></textarea>
              <div class="buttons">
                <button @click="setMyRate">Posten</button>
                <button @click="hideRate">Abbrechen</button>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div id="reviews" :class="{'hide':isStreched}">
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
            <span class="review_time">{{getTime(item.time)}}</span>
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
import { Toast } from 'vant';
export default {
  name: "Lawyer_list_rate",
  components: {
    NavBar,
    Card,
    Rate,
  },
  methods: {
    callBackRate:function(value){
      this.myRate=value;
    },
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
    getTime:function(time){
      if(time==="=0"){
        return "gerade eben"
      }
      let t=parseInt(time.slice(1));
      if(t==6){
        return "vor halbem Jahr"
      }else if(t==12){
        return "vor 1 Jahr"
      }else if(t==18){
        return "vor 1 einhalben Jahren"
      }
      else{
        return `vor ${t} Monaten`
      }
      // return time;
    },
    getMyRate: function () {
      if(this.submitted){
        return this.Lawyer.reviews.filter(x=>x.name=="KranichZSR")[0].rate;
      }else{
        return 0;
      }
    },
    setMyRate:function(){
      this.isStreched=false;
      if(!this.submitted){
        this.Lawyer.reviews.unshift({
            "name": "KranichZSR",
            "rate": this.myRate,
            "time": "=0",
            "message": this.myComment
        });
        this.submitted=true;
        Toast.success('Vielen Dank');
      }
    },
    hideRate:function(){
      this.isStreched=false;
    },
    getDistance: function (item) {
      return item;
    },
    switchRate:function(){
      if(this.submitted){
        return;
      }
      if(!this.isStreched){
        this.isStreched=true;
      }
    },
  },
  created:function(){
    this.submitted=!(this.Lawyer.reviews.filter(x=>x.name=="KranichZSR").length===0);
  },
  mounted:function(){
    this.myRate=this.getMyRate();
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
      myRate:0,
      myComment:"",
      rateDisabled:false,
      isStreched:false,
      submitted:false
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
            margin-left:1ch;
            color:$text-color;
          }
        }
      }
    }
  }
}

.card {
  background-color: $card-color;
  transition: 0.5s;
  border-radius: 2vmin;
  /*margin-bottom: 1.5rem;*/
  margin-bottom: 2vh;
  /*height:15vh;*/
  clip-path: var(--my-clip-path) !important;
  border-radius: 2vmin;

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
    .Rate{
      margin-bottom:5vh;
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
.input_box{
  width:100%;
  height:70%;
  .comment_title{
    float: left;
    margin-left: 8vw;
    color:$text-color;
    margin-bottom: 1vh;
    -webkit-text-stroke-width: 0.5px;
  }
  #comment_text{
    width: 80%;
    margin-bottom: 2vh;
    border:none;
    height:0px;
    background-color: $card_color;
  }
  .comment_show{
    height:80% !important;
  }
  .buttons{
    position:absolute;
    height: 13vh;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    bottom:15vh;
    left:0;
    filter: drop-shadow(2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)) !important;
    -webkit-filter: drop-shadow(
      2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)
    ) !important;
    button{
      height:6vh;
      width:70vw;
      border-radius: 1.5vh;
      border:none;
      color:$primary-color;
      -webkit-text-stroke-width: 0.5px;
      background-color: #fff;
    }
  }
}
textarea::placeholder {
  color: #ababab;
  font-size: 0.75rem;
}

.card_strech{
  height:90vh !important;
}
.hide{
  display:none !important;
}
</style>