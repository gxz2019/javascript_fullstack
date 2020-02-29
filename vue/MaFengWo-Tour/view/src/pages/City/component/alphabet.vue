

<script>
export default {
  props: { cities: Object },
  computed: {
    alphabet() {
      var res = [];
      for (let k in this.cities) {
        res.push(k);
      }
      return res;
    }
  },
  created() {
    // //初始化better-scroll等dom加载完毕
    // setTimeout(() => {
    //   this.initScroll();
    // }, 20);
  },
  methods:{
    initScroll() {
      console.log('1111')
    }
  }
};
</script>

<style lang="less" scoped>
.alphabet {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 2.5rem;
  width: 1.2rem;
  right: 0;
  bottom: 0;
  background-color: aqua;
  .item {
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.8rem;
  }
}
</style>