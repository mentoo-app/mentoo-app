<template>
  <div class="lawyer">
    <!-- <Card></Card> -->
    <NavBar v-show="navShow" :title="title" :isleftarrow="isleftarrow" id="nav"></NavBar>
    <!-- <div id="place-holder"></div> -->
    <div id="content-container">
      <div id="card-container">
        <Card
          v-for="item in items"
          :key="item.id"
          xStart="5vw"
          wid="92vw"
          roundSize="1.86vmin"
          roundSizeLeft="3vmin"
          angle="40"
        >
          <div class="inject">
            <SvgIcon
              v-if="item.sex == 'm'"
              name="male_lawyer"
              color="#5fbf44"
              height="11.5vh"
              class="image"
            />
            <SvgIcon
              v-else
              name="female_lawyer"
              color="#5fbf44"
              height="11.5vh"
              class="image"
            />
            <div class="content">
              <p class="name">
                <span v-if="item.sex == 'm'">Rechtsanwalter</span>
                <span v-else>Rechtsanwältin</span>
                <br />
                <span>{{ item.title }}</span>
              </p>

              <div class="information">
                <div class="detail">
                  <span>450m | {{ value.toString().replace(".", ",") }}</span>
                  <Rate :value="value" :disabled="true" buttonSize="1.1rem" starSize="0.95rem"></Rate>
                  <!--<van-rate v-model="value" size="0.8rem" gutter="0.15rem" allow-half icon="my-icon-star_full" void-icon="my-icon-star_gray"/>-->
                </div>
                <p class="open-status">geöffnet</p>
              </div>
            </div>
            <div class="icons">
              <!--
          <SvgIcon name="sms" color="#5fbf44"  height="5.5vw" width="5.5vw" class="image"/>
          <SvgIcon name="call" color="#5fbf44" height="5.5vw" width="5.5vw" class="image"/>-->
              <SvgIcon
                name="sms"
                color="#5fbf44"
                height="2.5ch"
                width="2.5ch"
                class="image"
                @click.native="sendSMS('88888888');"
              />
              <SvgIcon
                name="call"
                color="#5fbf44"
                height="2.5ch"
                width="2.5ch"
                class="image"
                @click.native="call('88888888');"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
    <TabBar v-show="tabShow"></TabBar>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import Rate from "@/components/Rate.vue";
import NavBar from "@/components/NavBar.vue";
import TabBar from "@/components/TabBar.vue";
export default {
  name: "Lawyer_list",
  components: {
    Card,
    Rate,
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
      active: 0,
      title: "Strafanzeige an die Kanzlei",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true,
      tabShow: true,
      value: 2.5,
      items: [
        { id: 1, title: "1", sex: "m" },
        { id: 2, title: "2", sex: "f" },
        { id: 3, title: "3", sex: "m" },
        { id: 4, title: "4", sex: "f" },
        { id: 5, title: "5", sex: "m" },
        { id: 6, title: "6", sex: "f" },
        { id: 7, title: "7", sex: "m" },
        { id: 8, title: "8", sex: "f" },
        { id: 9, title: "9", sex: "m" },
        { id: 10, title: "10", sex: "f" },
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
  overflow-y: scroll;
  font-size: 5rem;
  /*padding:0 1rem*/
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
.card {
  background-color: $card-color;
  /*margin-bottom: 1.5rem;*/
  margin-bottom: 2vh;
  /*height:15vh;*/
}
#card-container {
  padding: 0 4vw;
  width: 100%;
  height: auto;
  min-height: 100% !important;
  overflow-y: visible;
  filter: drop-shadow(2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)) !important;
  -webkit-filter: drop-shadow(
    2.13vw 0.73vh 0.61vh rgba(0, 0, 0, 0.15)
  ) !important;
}
.inject {
  height: 17vh;
  padding-bottom: 2vh;
  padding-top: 1vh;
  padding-right: 2vw;
  .image {
    grid-area: image;
    /*margin-right: 0.5rem;*/
    margin-right: 2vw;
  }
  .icons {
    grid-area: icons;
    width: 100%;

    i {
      float: right;
      /*margin-left: 0.6rem;*/
      /*margin-left: 2vw;*/
      margin-left: 1ch;
      // margin-left: 2.5ch;
    }
  }
  .content {
    grid-area: content;
    display: grid;
    grid-template-rows: 3fr 2fr;
    /*gap:0.1rem;*/
    // gap: 0.5vh;
    grid-template-areas:
      "name"
      "info";
    .name {
      grid-area: name;
      span {
        float: left;
        display: block;
        font-size: 1.5rem;
        font-weight: 500;
        color: $text-color;
        -webkit-text-stroke-width: 0.5px;
      }
    }
    .information {
      grid-area: info;
      /*position: relative;*/
      .detail {
        display: grid;
        /*grid-template-columns: 1.1fr 2fr;*/
        grid-template-columns: 8.5ch auto;
        gap: 0px;
        grid-template-areas: "detail rate";
        align-items: center;
        justify-items:start;
        span {
          text-align: left;
          font-size: 1rem;
          display: block;
          width: 100%;
          color: $text-color;
          grid-area: detail;
        }
        .Rate {
          grid-area: rate;
          /*margin-left: 0.3rem;*/
          /*margin-left: 1.5vw;*/
          margin-left: 0.5ch;
          
        }
      }
      .open-status {
        /*margin-top: 0.2rem;*/
        margin-top: 0.5vh;
        color: $primary-color;
        text-align: left;
        display: block;
        width: 100%;
      }
    }
  }
  display: grid;
  grid-template-columns: 1.1fr 2fr;
  grid-template-rows: 5fr 1.5fr;
  gap: 0px 0px;
  grid-template-areas:
    "image content"
    "icons icons";
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
}
.card {
  clip-path: var(--my-clip-path) !important;
}
</style>