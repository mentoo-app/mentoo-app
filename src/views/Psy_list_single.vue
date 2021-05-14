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
    <div id="content-container">
      <div class="head"></div>
      <Card
        xStart="8vw"
        hei="90vh"
        wid="100%"
        roundSize="2vmin"
        roundSizeLeft="3vmin"
        id="back"
      >
        <div class="inject">
          
        </div>
      </Card>
      <div class="messages" >
      <div :class="{message_item:true, right:item.type=='send'}" v-for="item,id in Data.messages" :key="id">
        <span class="sender" v-if="item.type=='receive'">{{Data.sender}}</span>
        <span class="sender" v-else>{{Data.me}}</span>
          <Card
            xStart="4vw"
            wid="92vw"
            roundSize="1vmin"
            roundSizeLeft="1vmin"
            :class="{chat_card:true, reverse:item.type=='send'}"
          >
          <div :class="{chat_card_inject:true, reverse:item.type=='send',left:item.type=='send'}">
            {{item.message}}
          </div>
          </Card>
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
    sendMessage: function(){
      let msg=this.inputText;
      this.inputText="";
      this.Data.messages.push({"type":"send","message":msg});
    }
  },
  computed: {
    Data: function () {
      return window.PageData.psy.single;
    },
  },
  data() {
    return {
      title: "Einzel-Chat",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true,
      helper: "Lavender Rain",
      me: "KranichZSR",
      top: "calc(90vh)",
      inputText:""
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
  background-color: #d4d5d0;
  width: 100%;
  height: 90vh;
  display: block;
  overflow-y: scroll;
  font-size: 5rem;
  /*padding:0 1rem*/
  position:absolute;
  z-index:-3;
  top:10vh;
  .messages{
    position:relative;
    top:5vh;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4vw;
    .message_item{
      margin:0 0 4vh 0;
    }
    .place_holder{
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
  .chat_card_inject{
    padding: 0 5vw 5vw 5vw;
    width: 92vw;
    color: $primary-color;
  }
}
.right{
  text-align: right;
}
.left{
  text-align: left;
}

.reverse{
  -moz-transform:scaleX(-1);
  -webkit-transform:scaleX(-1);
  -o-transform:scaleX(-1);
  transform:scaleX(-1);
  /*IE*/
  filter:FlipH;
}

.inject {
  height: 88vh;
  width: 100vw;
  padding-bottom: 2vh;
  padding-top: 2vh;
  padding-right: 5vw;
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.psy {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #dedfd8;
  overflow-y: scroll;
  z-index: 0;
}
.van-divider {
  border-color: $text-color;
  padding: 2vh 0;
}
.head{
  background-color: #dedfd8;
  height:20vh;
  width: 100%;
  position: absolute;
  top:0;
  z-index: -2;

}
#back {
  background-color: #d4d5d0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
.input {
  background-color: $card-color;
  position: absolute;
  z-index: 3;
  top: var(--my-top) !important;
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
    .btn{
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
span{
  color:$text-color
}
</style>