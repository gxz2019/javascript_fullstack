<template>
  <div class="star">
    <span class="star-item" v-for="num in numList" :key="num">
      <!-- <img src="./star.png" alt="" v-else> -->
      <img src="./zu.png" alt="" v-if="show">
      <img src="./star.png" alt="" v-else>

    </span>
  </div>
</template>

<script>
export default {
  props:{
    score:{
      type:Number
    }
  },
  data(){
    return {
      numList:[0,1,2,3,4],
      imgUrl:'./star.png',
      // show:'true'
    }
  },
  methods:{
    // handle() {
    //   if(Math.floor(score) > ) {

    //   }
    // }
  },
  computed:{
    show() {
      // let a = Math.floor(score)

      return true
    }

  }
}
</script>

<style scoped>
  .star{
    /* width: 18px; */
    height: 18px;
  }
  .star-item img{
    width: 16px;
    height: 16px;
  }
</style>