<template>
  <div id="index-page" class="full">
    <div class="index-head">
      <img id="logo" src="../assets/logo.png" />
    </div>
    <router-link style="text-decoration: none; color: inherit;" to="/main">
    <div class="card-shadow">
      <div id="title-container" class="index-card">
        <Card xStart="10vw" height="60vmax" wid="100%" roundSize="1.33vmin" roundSizeLeft="3vmin">
        <SvgIcon name="headline_mentoo_page"/>
        <p>
          „#Men Too“ ist eine Hilfsplattform, die männlichen Opfern von sexuellem Missbrauch Soforthilfe leisten soll. 
        </p>
        </Card>
      </div>
    </div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
export default {
  name: 'Index',
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
#index-page{
  position:absolute;
}


.full{
    display: grid;
    width: 100vw;
    height: 100vh;
    background: $primary-color;
    color: $text-color;
    font-weight: weight(bold);
    grid-template-rows: 54vh 46vh;
    overflow: hidden;
}

.hide{
    visibility: hidden;
}


.card-shadow{
    filter: drop-shadow(2.4vw -1.11vh 0.99vh rgba(0, 0, 0, 0.1));
    -webkit-filter: drop-shadow(2.4vw -1.11vh 0.99vh rgba(0, 0, 0, 0.1));
}


.index-card>div{
    background: $card-color;
    width: 100%;
    height: 60vh;
    grid-row-start: 2;
    grid-row-end: 3;
    border-radius: 0.8rem;
    animation: bottomEaseIn 1s ease 1s 1 alternate forwards;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    i{
      width: 85%;
      margin-top: 5vh;
      // margin-top: 10vw;
    }
    p{
        //margin-top: 1.9vh;
        margin-top: max(1.9vh,3.73vw);
        color: $text-color;
        font-size: 1rem;
        font-weight: weight(lightest);
        line-height: 1.36rem;
        width: 87%;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
    }
}

.index-head{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    img{
        animation: appearCenter 2s ease 0s 1 alternate forwards;
    }
    margin-bottom: 11vh;
}
@keyframes bottomEaseIn {
    0.0%{
        transform-origin: bottom;
        transform: rotate(0) translate(0, 50vh);
        opacity: 0;
    }
    100%{
        transform-origin: bottom;
        transform: rotate(0) translate(0, 0);
        opacity: 1;
    }
}

@keyframes appearCenter {
    0.0%{
        transform-origin: bottom;
        transform: rotate(0) translate(0, 0vh) scale(0);
        opacity: 0;
    }
    100%{
        transform-origin: bottom;
        transform: rotate(0) translate(0, 0) scale(1);
        opacity: 1;
    }
}

#logo{
    width:40vmin;
}
.card {
  clip-path: var(--my-clip-path) !important;
}
</style>