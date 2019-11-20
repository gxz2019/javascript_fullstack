<template>
    <div class="star" :class="starType">
      <span v-for="(itemClass,index) in itemClasses" :key="index" 
      :class="itemClass" class="star-item"></span>
    </div>
</template>

<script>
const Length = 5;
const ON = 'on';
const OFF = 'off';
export default {
  props:{
    size:{
      type:Number
    },
    score:{
      type:Number
    }
  },
  computed:{
    starType() {
      return 'star-'+this.size
    },
    itemClasses() {
    let result = [];
    let score = Math.floor(this.score);
    for (let i =0; i < score; i++) {
      result.push(ON);
    }
    while (result.length < Length) {
      result.push(OFF);
    }
    return result;
  }
  },
  
}
</script>
  
<style lang="stylus" scoped>
.star
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-36
    text-align center
    .star-item
      width 20px
      height 20px
      margin-right 15px
      background-size 20px 20px
      // line-height 20px
      &.on
        background-image url('star36_on.png')
      &.off
        background-image url('star36_on.png')
  &.star-24
    .star-item
      width 15px
      height 15px
      margin-right 8px
      background-size 15px 15px
      &.on
        background-image url('star24_on.png')
      &.off
        background-image url('star24_off.png')
  &.star-16
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &.on
        background-image url('star16_on.png')
      &.off
        background-image url('star16_off.png')
</style>