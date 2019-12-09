## babel 
js的语法编译器
clas关键字 -> babel -> es5 的代码
里面有丰富的插件知识
vue 提供了 tranform-vue-jsx 负责将template 编译为JS

h("el-row", [h("el-col", ["12"])]);

<template>
  <div class="my-el-row">
    <slot></slot>
  </div>
  <!-- h('div') -->
</template>

<template>
  <div class="my-el-row">
    <slot></slot>
  </div>
  <!-- h('div') -->
</template>
