<template>
  <div class="logo">
    <div class="img">
    <img src="@/assets/images/logo2.png" alt="">
    </div>
    <slot name="search"></slot>
    <slot name="icon"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo{
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  display: flex;
  line-height: 4rem;
}
.img{
  margin: 0.5rem;
  flex: 0.8;
}
</style>