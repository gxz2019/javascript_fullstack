所有的vue组件都是一个vue实例


## 生命周期
什么是生命周期，每个vue实例在被创建之前都要经过一系列的初始化过程，这个过程就是vue的生命周期。
！！created、mounted。。。。。不是生命周期。他们只是在生命周期中在本应该的时间点可以进行调用
的钩子函数

什么是钩子函数？
字面理解，该函数绑在生命周期的一个时间点，该时间点，在调用该钩子函数时


钩子函数
## beforeCreate和created钩子函数之前的生命周期
在这个期间进行了初始化事件，进行数据的观测，在时间点到达created时，数据已经和data属性进行了绑定。
注意！！此时没有el节点


## created和beforeMount
再次期间首先会判断是否有el选项，如果有的话，就继续向下编译，如果没有的话，就停止编译，也就意味着
停止了生命周期直到在该vue实例上调用vm.$mounte(el)
在继续判断是否有template，有的话，就编译成render函数，没有的话，就将外部的html作为模板编译
template的优先级要高出html
而render函数的优先级也是要高出template的
但是此时页面还是没画面的，因为节点还没有挂载完成，节点是以虚拟dom的形式存在


## beforeMount和mounted
将el挂载在vue实例（vm）上      挂载中。。。。。 直到mounted挂载完成，页面上有画面

## mounted以后发生的事情 
当data被修改时，会触发对应组件重新渲染，

## beforeUpdate和updated之间

虚拟dom重新渲染并应用更新

## 
beforeDestory钩子函数在销毁之前调用 在这一步 实例任然完全可用
destory在Vue实例销毁后调用


new Vue() -> beforeCreate -> created -> beforeMount -> mounted 
-> beforeDestory -> destory 
-> beforeUpdate -> updated









