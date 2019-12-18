## 
html(string) 解析 dom 树
css 解析为 cssom
合成 render tree
生成 layout tree
绘制 paint
composite 合成:一个页面有很多分层,最终合成一个平面

## 性能优化
js relayout repaint recomposite

改变了 元素的布局 : width height display (重排)layout ->
改变了 元素的color shadow (重绘) repaint -> 
composite: transform opacity 前提条件: 变化的元素要处于一个独立的‘层’上面



