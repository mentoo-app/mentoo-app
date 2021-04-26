<template>
  <div class="psy">
    <!-- <Card></Card> -->
    <NavBar
      v-show="navShow"
      :title="title"
      :isleftarrow="isleftarrow"
      id="nav"
    ></NavBar>
    <!-- <div id="place-holder"></div> -->
    <div class="btn_bar" @click="showSideBar">
      <SvgIcon
        name="team"
        color="#5fbf44"
        height="3ch"
        width="3ch"
        class="image"
      />
      <span>Men Too Hilfsraum</span>
    </div>
    <div class="side_bar" :style="{ width: sideWidth }">
      <div class="btn_place">
      <SvgIcon
        name="shut"
        color="#5fbf44"
        height="3ch"
        width="3ch"
        class="shut"
        @click.native="hideSideBar"        
      />
      </div>
      <div class="worker_list">
        <span class="sender">Mitarbeiter*in</span>
        <ul >
          <li v-for="item, id in Data.messages.filter(x=>x.sender_type==0)" :key="id">{{item.sender}}</li>
        </ul>
      </div>
      <div class="worker_list">
        <span class="sender">Teilnehmer*in</span>
        <ul >
          <li>{{Data.me}} (du)</li>
          <li v-for="item, id in Data.messages.filter(x=>x.sender_type==1)" :key="id">{{item.sender}}</li>
        </ul>
      </div>
    </div>
    <div id="content-container">
      <div class="info">
        <div class="info_item" v-for="(item, id) in Data.records" :key="id">
          <div class="info_text">{{ item.name }} ist eingetreten</div>
          <div class="info_time">{{ item.time }}</div>
        </div>
      </div>
      <div class="messages">
        <div
          :class="{ message_item: true, right: item.type == 'send' }"
          v-for="(item, id) in Data.messages"
          
          :key="id"
        >
        <div v-if="item.message.length">
          <span class="sender" v-if="item.type == 'receive'">{{
            item.sender
          }}</span>
          <span class="sender" v-else>{{ Data.me }}</span>
          <Card
            xStart="4vw"
            wid="92vw"
            roundSize="1vmin"
            roundSizeLeft="1vmin"
            :class="{ chat_card: true, reverse: item.type == 'send' }"
          >
            <div
              :class="{
                chat_card_inject: true,
                reverse: item.type == 'send',
                left: item.type == 'send',
              }"
            >
              {{ item.message }}
            </div>
          </Card>
          </div>
        </div>
        <div class="place_holder"></div>
      </div>
    </div>

    <div
      class="input"
      :style="{ '--my-top': top }"
    >
      <div class="input-inject">
        <input
          @focus="changeTop"
          @blur="changeBack"
          v-model="inputText"
          type="text"
          name=""
          id="chat_input"
          placeholder="Beginnen Sie hier zu tippen…"
        />
        <button class="btn" @click="sendMessage">
          <SvgIcon name="send_icon" height="3ch" width="3ch" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Psy_list_single",
  components: {
    Card,
    NavBar,
  },
  methods: {
    changeTop: function () {
      this.top = "calc(" + window.innerHeight + "px - 10vh)";
    },
    changeBack: function () {
      this.top = "calc(90vh)";
    },
    sendMessage: function () {
      let msg = this.inputText;
      this.inputText = "";
      this.Data.messages.push({ type: "send", message: msg });
    },
    showSideBar: function () {
      this.sideWidth = "70vw";
    },
    hideSideBar: function () {
      this.sideWidth = "0";
    },
  },
  computed: {
    Data: function () {
      return window.PageData.psy.group;
    },
  },
  data() {
    return {
      title: "Gruppenchat",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true,
      helper: "Lavender Rain",
      me: "KranichZSR",
      top: "calc(90vh)",
      inputText: "",
      sideWidth: "0",
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
.btn_bar {
  display: flex;
  position: relative;
  width: 100%;
  text-align: center;
  height: 5vh;
  align-items: center;
  justify-content: center;
  background-color: #d4d5d0;
  z-index: 0;
  .image {
    position: absolute;
    top: 1vh;
    left: 2ch;
  }
  span {
    color: $primary-color;
  }
}
.side_bar {
  position: fixed;
  overflow-x: hidden;
  top: 8vh;
  left: 0;
  z-index: 1;
  background-color: $card-color;
  box-shadow: 5px 5px 10px -2px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: 0.5s;
  .btn_place{
    width: 100%;
    height: 6ch;
    .shut{
      float:right;
      margin-top: 1.5ch;
      margin-right: 1.5ch;
    }
  }
}
#content-container {
  width: 100%;
  height: 90vh;
  display: block;
  overflow-y: scroll;
  font-size: 5rem;
  /*padding:0 1rem*/
  padding-top: 5vh;
  position: absolute;
  z-index: -3;
  top: 10vh;
  .info{
    padding:0 10vw;
    .info_item{
      display:flex;
      justify-content: space-between;
      margin-top: 3ch;
    }
  }
  .messages {
    position: relative;
    top: 5vh;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4vw;
    .message_item {
      margin: 0 0 4vh 0;
    }
    .place_holder {
      display: block;
      height: 10vh;
      width: 2px;
    }
  }
}

.card {
  background-color: $card-color;
  /*margin-bottom: 1.5rem;*/
  /*height:15vh;*/
}

.chat_card {
  margin-top: 1vh;
  background-color: $card-color !important;
  .chat_card_inject {
    padding: 0 5vw 5vw 5vw;
    width: 92vw;
    color: $primary-color;
  }
}
.right {
  text-align: right;
}
.left {
  text-align: left;
}

.reverse {
  -moz-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
  /*IE*/
  filter: FlipH;
}

.psy {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #dedfd8;
  overflow-y: scroll;
  z-index: 0;
}

.input {
  background-color: $card-color;
  position: absolute;
  z-index: 3;
  top: var(--my-top) !important;
  left:0;
  width: 100%;
  height: 10vh;
  background-color: $card-color;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  .input-inject {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10vw;
    width: 100%;
    height: 10vh;
    .btn {
      border: none;
      background-color: transparent !important;
    }
    #chat_input {
      background-color: #d4d5d0;
      border: none;
      height: 3ch;
      border-radius: 3ch;
      padding-left: 1ch;
      width: 70vw;
    }
  }
}
.sender{
  -webkit-text-stroke: 0.5px;
}
span,li{
  color:$text-color
}
.worker_list{
  width: 60vw;
  padding-left:20%;
  margin-bottom: 5vh;
}
ul{
  margin-top: 3vh;
}
li{
  width:100%;
  margin-bottom: 2vh;
  padding-left:1.5ch;
}
ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: $primary-color; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
</style>