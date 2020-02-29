<template>
  <div class="container">
    <div class="header">
      <div class="logo" @click="toIndex">
        <img src="../../assets/images/logo123.png" alt="">
      </div>
    </div>
    <div class="title">
      <h3 v-if="show">会员登录</h3>
      <h3 v-else>快速注册</h3>
    </div>
    <div class="input-bar">
      <ul>
        <li>
          <div class="input" style="border-bottom:none">
            <input type="text" placeholder="您的邮箱/手机号">
          </div>
        </li>
        <li>
          <div class="input">
            <input type="text" placeholder="您的密码">
          </div>
        </li>
      </ul>
      <div class="password">
        <span v-if="show">忘记密码?</span>
        <span v-else @click="sign">已是会员?点击登录</span>
      </div>
    </div>
    <div class="sign" @click="sign" :class="show ? 'b': 'a'">
      登录
    </div>
    <div class="sign sign1" @click="register" :class="show ? 'a':'b'">
      注册
    </div>
    {{count1}}
    <button @click="addAction">add</button>
  </div>
</template>

<script>
export default {
  computed:{
  
  },
  data() {
    return {
      show:true
    }
  },
  methods:{
    register() {
      this.show = false
    },
    sign() {
      this.show = true
    },
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  /* margin: 0.5rem */
  text-align: center;
}
.header{
  width: 90%;
  height: 4rem;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  /* margin: 1rem; */
  border-bottom: 2px solid #ffba33
}
.logo{
  width: 7.2rem;
  height: 2rem;
}
img{
  width: 100%;
  height: 100%;
}
.title{
  margin: 1rem
}
h3{
  font-weight: normal;
  color: #ffba33
}
.input-bar{
  width: 100%;
  position: relative
}
.input{
  border: 1px solid #dadada;
  /* border-radius: 0.1rem; */
  height: 2.8rem;
  width: 22rem;
  /* color: #dadada; */
}
input::-webkit-input-placeholder{
  color: #dadada;
  opacity: 1;
}
input{
  border: none;
  height: 2.4rem;
  width: 100%;
  text-indent: 11px;
  font-size: 1.2rem;
  line-height: 2.4rem;
  /* opacity: 0.5; */
}
.password{
  position: absolute;
  right: 0.6rem;
  font-size: 0.6rem;
  opacity: 0.5;
}
.sign{
  margin:2rem 1.5rem 1rem 1.5rem ;
  font-size: 1.2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 5px;
}
.sign1{
  /* margin:0 */
  margin: 0 1.5rem 1rem 1.5rem;
}
.a{
  background-color: #fff;
  border: 1px solid #ffba33;
  color: #ffba33
}
.b{
  color: #ffffff;
  background-color:#ffba33;
}
</style>