import {mapActions} from 'vuex'

export const searchMixin = {
  data () {
    return{
      query:''
    }
  },
  methods:{
    onQueryChange(query){
      this.query = query //除去空格
      // // 看效果用的
      // setTimeout(() => {
      //   this.saveSearch()
      // },1000)
      // this.saveSearch()
    },
    blurInput () {
      this.$refs.searchBox.blur()
    },
    saveSearch(song) {
      this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
    },
    ...mapActions(['saveSearchHistory','deleteSearchHistory','clearSearchHistory'])
  }
}