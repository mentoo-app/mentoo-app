<template>
  <div class="hospital">
    <NavBar
      v-show="navShow"
      :isleftarrow="isleftarrow"
      id="nav"
    ></NavBar>
    <div id="content-container">
      <p class="name text title">
        {{ this.Hospital.name }}
      </p>
      <img
        :src="require('../assets/' + this.Hospital.img)"
        width="100%"
        class="place_img"
      />
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
      <div class="label">
      <span class="title text">Was wir Ihnen anbieten:</span>
      </div>
      <div class="card-container">
      <Card
        xStart="5vw"
        wid="92vw"
        roundSize="1.86vmin"
        roundSizeLeft="3vmin"
        angle="40"
        id="services"
      >
      <div id="service_list">
        <div class="service_item" v-for="item,id in serviceItems" :key="id">
          <SvgIcon class="icon" :name="item.icon" />
          <span class="text">{{item.text}}</span>
        </div>
      </div>
      </Card>
      </div>
      <div class="info">
        <div class="info_title">
          <span class="title text">Wichtig</span>
          <van-divider />
        </div>
        <p class="info_content text">
          DNA-Spuren können nur innerhalb der ersten 72 Stunden[3 Tage] nach der Tat gesichert werden. Termine können Sie jederzeit telefonisch vereinbaren.
        </p>
      </div>
      <div class="card-container" v-if="this.Hospital.doctors.length">
      <Card
        xStart="5vw"
        wid="92vw"
        roundSize="1.86vmin"
        roundSizeLeft="3vmin"
        angle="40"
      >
      <div class="doctor_list">
        <span class="title text">Team/Ärzte</span>
        <div v-for="item,id in this.Hospital.doctors" :key="id">
          <div class="intro">
            <img
              :src="require('../assets/' + item.img)"
              width="100%"
              class="avatar"
            />
            <div class="intro_detail">
              <span class="doctor_name text">{{item.name}}</span>
              <p class="doctor_type text">{{item.type}}</p>
            </div>
          </div>
          <van-divider v-if="id!=Hospital.doctors.length-1"/>
        </div>
      </div>
      </Card>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Hospital_list_detail",
  components: {
    NavBar,
    Card
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
    Hospital: function () {
      // return window.PageData.lawyer[this.$route.query.personId];
      let id = this.$route.query.placeId;
      return window.PageData.hospital.find((item) => item.id == id);
    },
    getMapSrc: function () {
      return (
        "https://maps.google.com/maps?q=" +
        encodeURI(this.Hospital.address) +
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
      serviceItems:[
        {"icon":"Telescope","text":"Spurensicherung"},
        {"icon":"HIV","text":"HIV-Infektion"},
        {"icon":"Virus","text":"STI"},
        {"icon":"Liver","text":"Virushepatitiden"},
        {"icon":"Injection","text":"Suchtmedizen"},
        {"icon":"Stethoscope","text":"Hausärztliche Versorgung"},
        {"icon":"Mask","text":"Infektiology"},
        {"icon":"Pill","text":"PrEP"},
      ]
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
  padding: 0 4vw;
  height: 90vh;
  display: block;
  overflow-y: scroll;
  font-size: 5rem;
//   display: grid;
//   grid-template-rows: 3fr 2fr 2fr;
  // row-gap: 4vw;
  .name{
    
    font-size:1.6rem;
    width:60%;
    margin-bottom: 2ch;
  }
  .place_img{
    height:40vh;
  }
  .map {
    width: 100%;
    height: 25vh;
    margin-bottom: 4vw;
  }
  .label{
    display: flex;   
    align-items: flex-start;
    margin-bottom: 2vh;
  }
  .info{
    margin-bottom:2vh;
    .info_title{
      width:10ch;
      display:flex;
      flex-direction: column;
    }
    .info_content{
      margin-top: 1vh;
    }
  }
  .doctor_list{
    ::v-deep .van-divider{
      border-color:#cecece;
    }
    padding:1vh 4vw 3vh 4vw;
    display:flex;
    flex-direction: column;
    span{
      align-self: flex-start;
    }
    .intro{
      margin-top:2ch;
      display: grid;
      grid-template-areas: "img detail";
      grid-column: auto 80%;
      .avatar{
        grid-area: img;
        width:8vh;
        height:8vh;
        border-radius: 8vh;
      }
      .intro_detail{
        grid-area: detail;
        padding:0 2ch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        // justify-content: space-between;
        .doctor_name{
          margin-bottom:1ch;
          font-size:1.1rem;
          -webkit-text-stroke: 0.03rem;
        }
        .doctor_type{
          width:28ch;
        }
      }
    }
  }
}
.title{
  font-size:1.3rem;
  -webkit-text-stroke: 0.03rem;
}
.card {
  background-color: $card-color;
  /*margin-bottom: 1.5rem;*/
  margin-bottom: 2vh;
  /*height:15vh;*/
  clip-path: var(--my-clip-path) !important;
}
.card-container {
  filter: drop-shadow(2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)) !important;
  -webkit-filter: drop-shadow(
    2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)
  ) !important;
}
#service_list{
  display:flex;
  flex-direction: column;
  align-items: flex-end;
  width:85%;
  height:30vh;
  .service_item{
    display: flex;
    width:100%;
    padding-left:12vw;
    margin-bottom: 1ch;
    .icon{
      width: 2ch;
      height: 2ch;
    }
    span{
      font-size:1.2rem;
      margin-left:1ch;
    }
  }
}
.hospital {
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
.van-divider{
  border-color:$text-color;
  padding:2vh 0 0 0;
}
.text{
  color:$text-color;
  text-align:left;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}


</style>