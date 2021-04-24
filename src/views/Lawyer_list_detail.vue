<template>
  <div class="lawyer">
    <NavBar
      v-show="navShow"
      :title="getTitle"
      :isleftarrow="isleftarrow"
      id="nav"
    ></NavBar>
    <div id="content-container">
      <div class="intro">
        <div class="name">
          <span>{{this.Lawyer.name}}</span>
          <van-divider />
        </div>
        <div class="person">
          <p>{{this.Lawyer.personal_introduction}}</p>
        </div>
        <div class="termin">
          <p>{{this.Lawyer.termin_introduction}}</p>
        </div>
        <div class="office">
          <p>{{this.Lawyer.office_introduction}}</p>
        </div>
        <img
        :src="require('../assets/' + this.Lawyer.img)"
        width="100%"
        alt=""
      />
      </div>
      <div class="map">
        <iframe
          width="100%"
          height="100%"
          :src="getMapSrc"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
      <img
        :src="require('../assets/' + this.Lawyer.office_img)"
        width="100%"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Lawyer_list_detail",
  components: {
    NavBar,
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
      // return window.PageData.lawyer[this.$route.query.personId];
      let id=this.$route.query.personId;
      return window.PageData.lawyer.find(item=>item.id==id);
    },
    getTitle: function () {
      return this.Lawyer.sex == "m" ? "Rechtsanwalt" : "Rechtsanwältin";
    },
    getMapSrc: function () {
      return (
        "https://maps.google.com/maps?q=" +
        encodeURI(this.Lawyer.address) +
        "&t=&z=16&ie=UTF8&iwloc=&output=embed"
      );
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
  display: grid;
  grid-template-rows: 3fr 2fr 2fr;
  // row-gap: 4vw;
  .intro {
    display: grid;
    grid-template-columns: 6ch 12ch auto;
    grid-template-rows: 0.9fr 1.3fr 0.8fr;
    gap: 0px 6vw;
    grid-template-areas:
      "Name Name Avatar"
      "Personal Personal Avatar"
      ". Termin Office";
    align-items: center;
    justify-items: center;
    img{
      grid-area: Avatar;
    }
    .name{
      grid-area: Name;
      display: flex;
      flex-direction: column;
      span{
        font-size: 1.7rem;
        color:$text-color;
        -webkit-text-stroke-width: 0.8px;
        width:80%;
        float:left;
        text-align: left;
      }
      .van-divider{
        border-color:#000;
        padding:2vh 0 0 0;
      }
    }
    .person{
      grid-area: Personal;
      align-self: start;
      p{
        text-align: left;
        font-size: 0.83rem;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        line-height: 2.8ch;
        -webkit-text-stroke-width: 0.2px;
      }
    }
    .termin{
      grid-area: Termin;
      p{
        text-align: left;
        font-size: 0.7rem;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        line-height: 2.5ch;
        -webkit-text-stroke-width: 0.2px;
      }
    }
    .office{
      grid-area: Office;
      p{
        text-align: left;
        font-size: 0.7rem;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        line-height: 2.5ch;
        -webkit-text-stroke-width: 0.2px;
      }
    }
  }
  .map{
    margin-bottom: 4vw;
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
</style>