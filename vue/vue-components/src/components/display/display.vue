<template>
  <div ref="display">

  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props:{
    code:{
      type:String,
      default:'',
      component:null
    },
  },
  methods:{
    getSource (source,type) {
      const regex = new RegExp(`<${type}[^>]*>`)
      let openingTap = source.match(regex)
      if(openingTap) {
        return ''
      }else{
        openingTap = openingTap[0]
      }
      return source.slice(source.indexOf(openingTap) + openingTap.length,source.lastIndexOf(`</${type}>`))

    },
    spiltCode() {
      const script = this.getSource(this.code,'script').replace(/export default/,'return ')
      const style = this.getSource(this.code,'style')
      const template = '<div id="app">'+ this.getSource(this.code,'template')+'</div>'
      this.js = script;
      this.html = template;
      this.style = style
    },
    renderCode() {
      this.spiltCode()
      if(this.html !== '' && this.js !== '') {
        const parseStrToFunc = new Function(this.js)();
        parseStrToFunc.template = this.html
        const Component = Vue.extend(parseStrToFunc)
        this.component = new Component().$mount()

        this.$refs.display.appendChild(this.component.$el)
      }
    },
    a() {
      
    }
  },
  mounted(){
    this.renderCode()
  },
  data() {
    return {
      html:'',
      js:'',
      css:''
    }
  }
}
</script>
<style>

</style>