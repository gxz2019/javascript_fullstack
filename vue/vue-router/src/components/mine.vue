<template>
  <div class="mine">这事我的页面
      <!-- <router-link :to="{name:'Detail',params:{id:123}}" ><button class="go-detail">查看详情</button></router-link>
       -->
       <button class="go-detail" @click="a">查看详情</button>
      <router-view></router-view>   
  </div>
  
</template>

<script>
export default {
    methods:{
        a(){
            this.$router.push({name:'Detail',params:{id:234}})
        }
    }
}
</script>

<style>

</style>