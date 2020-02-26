<template>
  <div class="search-bar">
    <div class="search">
      <form action="">
        <input type="search" placeholder="搜索目的地/攻略/游记">
        <img src="@/assets/images/searc.png" alt="">
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search-bar{
text-align: center;
/* align-self: center; */
position: relative;
top: 5px;
}
.search{
  height: 2rem;text-align: center;
}
form{
  box-sizing: border-box;
  height: 2rem;text-align: center;
  display: flex;
  background-color: #f3f3f3;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 0.7rem;
  position: relative;
}
input{
  height: 2rem;
  border: none;
  background-color: #f3f3f3;
  align-self: center;
}
img{
  height: 1.5rem;
  width: 1.5rem;
  align-self: center;
  /* float: right; */
  position: absolute;
  right: 0;
}
</style>