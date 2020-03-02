<template>
  <div>
    <Scroll ref="wrapper" :data="cities" class="list" > 
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
      <div class="city-contont" v-for="(item,index)  in cities" :key="index" ref="index">
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
    </Scroll>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Scroll from "@/pages/Common/scroll.vue";
import { mapState } from 'vuex'
export default {
  components: {
    Scroll
  },
  props: {
    hotCities: Array,
    cities: Object
  },
  data() {
    return {
      scrollY: 0,
      currentIndex: 0,
    };
  },
  computed: {
    ...mapState(['letter']),
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
    handLetterClick(i) {
      this.letter = i;
    }
  },
  watch:{
    letter() {
      // console.log(this.letter)
      // console.log(this.$refs.wrapper.scroll)
      console.log(this.$refs.index[this.letter])
      this.$refs.wrapper.scroll.scrollToElement(this.$refs.index[this.letter],300)
    }
  }
};
</script>

<style lang="less" scoped>

.list {
  width: 100%;
  height: calc(100vh - 1rem);
  //  overflow: hidden;
  .hot {
    width: 100%;
    
    // height: calc(100vh -0.1rem);
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
}
</style>