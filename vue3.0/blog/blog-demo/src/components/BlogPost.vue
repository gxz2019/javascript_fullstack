<template>
  <div class="blogPost" :class="{highlighted:post.highlighted}">
    <h2>{{post.title}}</h2>
    <p v-if="post.highlighted">This post is highlighted</p>
    <p>{{post.body}}</p>
    <p class="meta">Written by  {{post.author}} on {{date}}</p>
  </div>
</template>

<script lang='ts'>
  import { Vue,Prop,Component } from "vue-property-decorator";
  
  export interface Post{
    title:string,
    body:string,
    author:string,
    datePosted:Date;
    highlighted?:boolean
  }
  @Component
  export default class BlogPost extends Vue{
    @Prop() post!:Post
    get date() {
      return `${this.post.datePosted.getFullYear()}/${this.post.datePosted.getMonth()}/${this.post.datePosted.getDate()}`
    }
    
  }
</script>

<style lang="stylus">
.blogPost
  width 400px
  margin 0 auto
  h2
    text-decoration underline
  .meta
    font-style italic 
.highlighted
  border 1px solid #f4d942
  background-color #fff3b2
</style>