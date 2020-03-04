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
              <div class="hotel-date-input" @click="handDate">
                <span>{{date.Month1}}月{{date.Day1}}日</span>
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
                <span>{{date.Month2}}月{{date.Day2}}日</span>
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
        <div class="hotel-serach" @click="gotoHotel">
          <button>查找酒店</button>
        </div>
      </div>
      <van-popup v-model="show"  position="bottom" :style="{ height: '100%' }">
        <van-calendar v-model="show" type="range" @confirm="onConfirm"
         color="#ffdb00" confirm-disabled-text="请选择结束时间" :formatter="formatter" />
      </van-popup>
    </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['city']),
    ...mapState(['date'])
  }
  ,
  data() {
    return {
      show:false,
      
    }
  },
  methods:{
    gotoHotel() {
      this.$router.push({path:'/hotelpages'})
    },
    chooseCity() {
      this.$router.push({ path:'/city'})
    },
    handDate() {
      this.show = true
    },
    formatter(day) {
      if (day.type === 'start') {
        day.bottomInfo = '入住';
      } else if (day.type === 'end') {
        day.bottomInfo = '离店';
      }
      return day
    },
    ...mapMutations(['changDate']),
    onConfirm(date) {
      this.show = false;
      var date1 = {}
      date1.Month1 = date[0].getMonth() + 1;
      date1.Day1 = date[0].getDate()
      date1.Month2 = date[1].getMonth() + 1
      date1.Day2 = date[1].getDate()
      this.changDate(date1)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../Hotel.less';
</style>