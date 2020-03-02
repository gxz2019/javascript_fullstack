<template>
  <div class="list-shortcut">
        <ul>
          <li
            v-for="(item, index) in shortcutList"
            class="item"
            :key="item.id"
            :class="{'current': currentIndex === index}" @click="handLetterClick(index)"
          >{{ item }}</li>
        </ul>
      </div>
</template>

<script>
// import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  props:{
    cities:Object
  },
  data() {
    return {
     currentIndex: 0,
    }
  },
  methods:{
    ...mapMutations(['transmitIndex']),
    handLetterClick(i) {
      this.currentIndex = i
    this.transmitIndex(i)
  }
  },
  computed: {
    shortcutList() {
      var res = [];
      for (let k in this.cities) {
        res.push(k);
      }
      return res;
    },
  },
  
};
</script>

<style lang="less" scoped>
.list-shortcut {
    position: fixed;
    z-index: 30;
    right: 0;
    top: 60%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: rgba(167, 167, 167, 0.5);
    font-family: Helvetica;
    .item {
      padding: 3px;
      line-height: 1;
      color: black;
      font-size: 11px;
      &.current {
        color: #c20c0c;
      }
    }
  }
</style>