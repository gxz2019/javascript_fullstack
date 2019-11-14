<template>
  <!-- <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"> -->
    <div>
     <el-rate
  v-model="value"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
    </div>
</template>

<script>

export default {
    data() {
      return {
        value: 3.7
      }
    }
}
</script>

<style>

</style>