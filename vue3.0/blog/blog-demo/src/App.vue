<template>
  <div id="app">
    <h1>gxz's blog</h1>
    <button @click="showHide">show/hide highlighted post</button>
    <BlogPost :post="blogPost" v-for="blogPost in visibileBlogPosts" :key="blogPost.title"></BlogPost>
    <!-- <router-view/> -->
  </div>
</template>
<script lang="ts">
import BlogPost,{Post} from "./components/BlogPost.vue"
import { Component,Vue} from 'vue-property-decorator';

@Component({
  components:{
    BlogPost
  }
})
export default class App extends Vue{
  private blogPosts:Post[] = [
    {
      title:'My First BlogPost Ever !',
      body:'welcome to blog',
      author:'Gxz',
      datePosted:new Date(2020,0,7)
    },
       {
      title:'My Second BlogPost Ever !',
      body:'welcome to blog',
      author:'Gxz',
      datePosted:new Date(2020,0,8),
      highlighted:true
    },
       {
      title:'My Third BlogPost Ever !',
      body:'welcome to blog',
      author:'Gxz',
      datePosted:new Date(2020,0,9)
    }
  ]

  public showHighlighted : boolean = true

  get visibileBlogPosts() {
    return this.blogPosts.filter((post: Post) => 
      post.highlighted === undefined || post.highlighted === this.showHighlighted 
    )
  }
  public showHide() {
    this.showHighlighted = !this.showHighlighted
    console.log(this.visibileBlogPosts)
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
