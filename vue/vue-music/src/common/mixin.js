import {mapActions, mapGetters} from 'vuex'


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
      // this.$refs.searchBox.setQuery(song)
      this.saveSearchHistory(this.query)
      this.selectPlaySong(song)
      this.addPlayList(song) //为了看效果
    },
    ...mapActions(['addPlayList','saveSearchHistory','deleteSearchHistory','clearSearchHistory','selectPlaySong'])
  }
}

export const playerMixin = {
  computed:{
    ...mapGetters(['currentSong','playList'])
    
  },
  methods:{

  }
}