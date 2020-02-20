## 1.div中的文字或链接实现居中（行内元素）（span）  
  text-align:center   //水平居中  在父元素上设置
  line-height:父元素高度   // 垂直居中在子元素上设置

## 2.div中的div（块状元素）实现居中  脱离文档流
1. 用定位
   position    top50% left50% 在margin或者transform 子元素的50%

2. 用flex布局  
    父元素：display：flex   justify-content: center;
  align-items: center;