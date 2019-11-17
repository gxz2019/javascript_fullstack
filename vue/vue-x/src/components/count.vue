<template>
  <div class="conut">
    {{count}}
    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
    <!-- {{myCount}} -->
    <!-- {{getCount}} -->
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data () {
    return {
      // myCount:null
    }
  },
  // mounted(){
  //   this.myCount = this.$store.state.count
  // },
  // computed:{
  //   // myCount () {
  //   //   return this.$store.state.count
  //   // }

  // },
  computed:{
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'getCount'
    ])
  },
  methods:{
  //   test(){
  //   this.myCount++
  // }
  ...mapMutations([
    'add',
    'reduce'
  ]),
  ...mapActions([
    'addAction',
    'reduceAction'
  ])
  }
}
</script>

<style>

</style>