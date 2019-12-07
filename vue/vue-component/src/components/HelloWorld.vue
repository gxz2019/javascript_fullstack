<template>
  <div>
    <i-button size="large" @on-Click="onClick">按钮
      <i slot="icon">*</i>
    </i-button>
    <i-button size="small" @on-Click="offClick">提交</i-button>
    <!-- <div @click="oSure">
    <i-button size="defualt" ref="sure" >确认</i-button>
    </div> -->
    <i-button size="defualt" ref="sure" @click.native="oSure" @sendmsg="aaa">{{mssg}}</i-button>

  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  props:{
    
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mssg:''
    }
  },
  components:{
    'i-button':button
  },
  methods:{
    onClick() {
      console.log('你好')
    },
    offClick() {
      console.log('提交')
    },
    oSure() {
      this.$refs.sure.sureClick()
    },
    aaa(e) {
      this.mssg = e
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
