let loadingNode = document.createElement('div');
loadingNode.style.backgroundColor = '#008c8c';
loadingNode.style.opacity = '.6';
loadingNode.style.position = 'absolute';
loadingNode.style.left = 0
loadingNode.style.top = 0
loadingNode.style.right = 0
loadingNode.style.bottom = 0
function toggleLoading(el,binding) {
  if(binding.value){
    el.appendChild(loadingNode)
  }else{
    el.contains(loadingNode) && el.removeChild(loadingNode)
  }
}

let plugin = {};
plugin.install = function (Vue) {
  Vue.directive('loading',{
    bind:function(el,binding) {
      // console.log(el,binding)
      //第一次绑定只会调用一次
      toggleLoading(el,binding);
    },
    update(el,binding) {
      toggleLoading(el,binding);
  
    }
  })
}
// vue 插件 提供全局的方法
//导出

if(typeof exports === 'object') {
  modules.exports = plugin
}else {
  window.Vue.use(plugin);
}