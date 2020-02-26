<template>
  <div class="Cover">
    <div class="num">
      {{num}}
    </div>
    <div class="logo">
      <!-- <img src="../../assets/images/logo.jpg" alt=""> -->
    </div>
    <div class="icon" @click="goIndex">
      <img src="../../assets/images/right.png" alt="">
    </div>
    <div class="title">
      <span>点击进入</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      num:5
    }
  },
  methods:{
    goIndex() {
      this.$router.push({ path:'../Index'})
    }
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({ path:'../Index'})
    },5000),
    setInterval(() => {
      this.num = this.num - 1
    }, 1000);
  }
}
</script>

<style scoped>
.Cover{
  width: 100%;
  height: 100vh;
  position: fixed;
  background-image: url(../../assets/images/bg.jpeg);
  background-size:100%100%;
  box-sizing: border-box;
}
.logo{
  width: 10rem;
  height: 10rem;
  position: absolute;
  margin: auto;
  bottom: 0;top: 0;left: 0;right: 0;
}
img{
  width: 100%;
  height: 100%;
}
.icon{
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  /* border: 1px solid #000; */
  color: black;
  position: absolute;
  margin: auto;
  bottom: 0;top: 20rem;left: 0;right: 0;
  /* margin: 2rem; */
}
.title{
  width: 100%;
  position: absolute;
  margin: auto;
  bottom: 0;top: 35rem;left: 0;right: 0;
  text-align: center;
  font-size: 1.5rem;
  color: #ffffff
}
.num{
  position: absolute;
  right: 0;
  font-size: 1.5rem;
  color: #008c8c
}

</style>