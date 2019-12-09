<template>
<!-- 24 -->
  <!-- <el-row>
    <el-col :span="12">12</el-col>
    <el-col :span="6">6</el-col>
    <el-col :span="6">6</el-col>
  </el-row> -->
  
    <myrow tag="section">
      <myCol :span="12">12</myCol>
      <myCol :span="6">6</myCol>
      <myCol :span="6">6</myCol>
    </myrow>
    <!-- <! -->
</template>

<script>
import myrow from './myrow'
import myCol from './my-col'
export default {
  components:{
    myrow,
    myCol
  }
}
</script>

<style>

</style>