<template>
  <div>
    <h2>{{msg}}</h2>
    <h2>{{count}}</h2>
    <h2>{{counts}}</h2>
    <button @click="add(10)">+</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState , mapMutations ,mapGetters } from 'vuex'
export default {
  data() {
    return{
      msg:'hello vuex'
    }
  },
  store,
  methods:mapMutations(['add']),
  computed:{
    ...mapState(["count"]),
    ...mapGetters(["counts"])
  }
}
</script>

<style>

</style>