<template>
  <div class="list">
    <div ref="listView">
      <div class="hot">
        <div class="hot-city">
          <span>热门城市</span>
        </div>
        <div class="hot-city-item">
          <div
            class="hot-item"
            v-for="(item,index) in hotCities"
            :key="index"
            @click="handleCityChange(item.name)"
          >
            <span>{{item.name}}</span>
          </div>
        </div>
        <div>
          <div class="city-contont" v-for="(item,index)  in cities" :key="index" :ref="index">
            <div class="hot-city">
              <span>{{index}}</span>
            </div>
            <div class="hot-city-item">
              <div
                class="hot-item"
                v-for="(city) in item"
                :key="city.id"
                @click="handleCityChange(city.name)"
              >
                <span>{{city.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="list-shortcut">
        <ul>
          <li
            v-for="(item, index) in shortcutList"
            class="item"
            :data-index="index"
            :key="item.id"
            
            :class="{'current': currentIndex === index}"
          >{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
// import BScroll from "better-scroll";
export default {
  props: {
    hotCities: Array,
    cities: Object
  },
  data() {
    return {
      scrollY:0,
      currentIndex: 0
    }
  },
  computed: {
    shortcutList() {
      var res = [];
      for (let i = 0; i <= 25; i++) {
        switch (i) {
          case 8:
          case 14:
          case 20:
          case 21:
            break;
          default:
            res.push(String.fromCharCode(i + 65));
            break;
        }
      }
      return res;
    }
  },
  methods: {
    ...mapMutations(["changCity"]),
    handleCityChange(name) {
      this.changCity(name);
      this.$router.push({ path: "/Hotel" });
    },
    initScroll() {
      this.scroll = new BScroll(this.$refs.listView, {
        probeType: 3,
        click: true
      })
      this.scroll.on('scroll', (pos) => {
        this.scrollY = pos.y
      })
      console.log('111')
    }
  },
  // mounted() {  
  //   setTimeout(() => {
  //     this.initScroll()
  //   },20)
  // }
};
</script>

<style lang="less" scoped>
.list {
  .hot {
    width: 100%;
    .hot-city {
      // width: 100%;
      height: 2.1rem;
      color: #333333;
      background-color: #f0f0f0;
      font-size: 0.8rem;
      padding-left: 0.4rem;
      line-height: 2.1rem;
    }
    .hot-city-item {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      // justify-content: space-between;
      .hot-item {
        width: calc(100% / 3 - 0.01rem);
        height: 2.8rem;
        background-color: #fff;
        text-align: center;
        line-height: 2.8rem;
        position: relative;
        // margin-bottom:0.02rem;
        color: #333333;
        font-size: 0.9rem;
        font-weight: 500;
        border-right: 0.1px solid #f0f0f0;
      }
      .item {
        width: 20%;
        height: 2.8rem;
        background-color: #fff;
        text-align: center;
        line-height: 2.8rem;
        color: #333333;
        font-size: 0.9rem;
        font-weight: 500;
      }
      .hot-item:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        transform: scaleY(0.5);
        background-color: #c8c7cc;
      }
    }
  }
  .list-shortcut{
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: rgba(167, 167, 167, 0.5);
    font-family:Helvetica;
    .item{
      padding: 3px;
      line-height: 1;
      color: black;
      font-size: 11px;
      &.current {
        color: #C20C0C;
    }
    }
  }
}
</style>