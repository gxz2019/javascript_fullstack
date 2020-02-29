<template>
  <div class="hotel-container">
      <div class="hotel-find">
        <div class="hotel-find-label">
          <div class="hotel-find-title">
            <span>目的地</span>
          </div>
          <div class="hotel-address">          
              <div class="hotel-address-city" @click="chooseCity">
              <span>{{city}}</span>
            </div>   
            <div class="hotel-address-position">
              <div class="hotel-address-position-img">
                <img src="@/assets/images/dingwei.png" alt="">
              </div>
              <div class="hotel-address-position-title">
                <span>我的位置</span>
              </div>
            </div>
          </div>
        </div>
        <div class="hotel-date-label hotel-find-label">
          <div class="hote-time">
            <div class="hotel-date">
              <div class="hotel-find-title">
                <span>入住</span>
              </div>
              <div class="hotel-date-input">
                <span>4月8日</span>
              </div>
            </div>
            <div class="hotel-time-info">
              <span>1晚</span>
            </div>
            <div class="hotel-date">
              <div class="hotel-find-title">
                <span>离店</span>
              </div>
              <div class="hotel-date-input">
                <span>4月9日</span>
              </div>
            </div>
          </div>
          <div class="hotel-guest">
            <div class="hotel-find-title">
              <span>每间</span>
            </div>
            <div class="hotel-guest-input">
              <span>2成人</span>
            </div>
          </div>

        </div>
        <div class="hotel-serach">
          <button>查找酒店</button>
        </div>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['city'])
  }
  ,
  data() {
    return {
    }
  },
  methods:{
    chooseCity() {
      this.$router.push({ path:'/city'})
    }
  }
}
</script>

<style lang="less" scoped>
@import '../Hotel.less';
</style>