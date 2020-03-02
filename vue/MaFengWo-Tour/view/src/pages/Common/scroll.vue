<template>
  <div ref="wrapper" >
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {},
    pullup: {},
    refreshDelay: {
      type: Number,
      default: 20
    },
    swipeBounceTime: {
      type: Number,
      default: 800
    },
    momentumLimitTime: {
      type: Number,
      default: 200
    },
    bounceTime: {
      type: Number,
      default: 600
    },
    startY: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
    // console.log(this.scroll)
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        console.log('error!!!!!!')
      }
      // console.log(this.scroll)
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
      });
      this.$emit("setScroll", this.scroll);
      if (this.listenScroll) {
        let that = this;
        this.scroll.on("scroll", pos => {
          that.$emit("scroll", pos);
        });
      }
      if (this.pullup) {
        this.scroll.on("pullingUp", () => {
          this.$emit("scrollToEnd", this.scroll);
        });
      }
      if (this.beforeScroll) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      //滚动到指定位置
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement(el) {
      //滚动到指定的目标元素。
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  watch:{
    data() {
      setTimeout(() => {
        this.refresh()
      },this.refreshDelay)
    }
  }
};
</script>

<style>
</style>