<template>
  <div class="menu">
    <Card></Card>
  </div>
</template>
<script>
import Card from "@/components/Card.vue"
export default {
  components:{
    Card
  }
}
</script>
<style lang="scss" scoped>
.menu{
  position: absolute;
  width:100vw;
  height:100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>