# html
#### 你是如何理解html语义化的？
> 所谓html语义化就是使用恰当的标签去展示恰当的内容，比如标题就用h1标签，段落就用p标签，列表就用ul、ol标签等等。最开始的时候前端布局是table标签，页面布局很杂乱，后来又使用div+css布局，但是本质上还是没有区分每一块div的作用和意义。所以html语义化是很重要的，这样让页面有良好的结构，dom结构也更加清晰，使得代码更好的维护和可读。

#### meta viewport 是做什么的？怎么写？
```
 <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
> 上面的标签为一个meta标签，name为viewport表示提供移动设备使用，content提供了viewport的属性：
>- width为device-width表示在移动设备下显示的宽度为该设备的宽度
>- user-scalable表示用户能否缩放网页，no表示不能
>- initial-scale表示设备与视口的缩放比例
>- maximum-scale和minimum-scale表示缩放的最大值和最小值，若user-scalable为no则没用

>meta viewport就是专门为网页在移动端设备下显示所设计的。


#### 你用过哪些 HTML 5 标签？
> - article:用于表示一篇文章的具体内容，一般为文字集中显示的区域
> - header: 页面主体上的头部
> - nav：专门用于菜单导航、链接导航的标记
>- section：定义文章，定义文档中的节，类似于div
>- time：定义时间或日期
>- video： 定义视频,src引入资源，constrols视频的控制控件，autoplay是否自动播放
>- audio：定义音频，比如放音乐，constrols音频的控制控件
>- datalist:表单标记，通常放在input标签中，当作列表
>- canvas: 画布标记，使用js来绘制图形            
> ```<canvas id="tutorial" width="150" height="150"></canvas>```
> 这就是一个w150 h150的画布，canvas标签只有两个属性width和height
```
<html>
 <head>
  <script type="application/javascript">
    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
      }
    }
  </script>
 </head>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```
#### h5是什么？
>h5指的是移动端页面，其实是技术的合集而不是一门技术，h5是一种技术的标准，也可以说是一种解决方案，比如要开发一个移动端很炫酷的网页，这个解决方案不仅包含了html5的新增标签，还包含了其他前端的知识。主要是技术的合集

# css
#### 两种盒模型分别说一下
> 
