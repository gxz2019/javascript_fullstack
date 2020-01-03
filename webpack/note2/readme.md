## webpack 1.0

## webpack 2.0
拆分文件体积
配置很多


rollup: (tree-shaking) 各种工具类库  比如：vue。。。

## webpack 3.0
parcel: 0配置 

## webpack 4.0
0配置

国内(fis)

## tree-shaking
剔除没用的代码

## mode
development
production
webpack 根据两个模式，内置了一些默认的配置

production：自动开启 tree-shakinng功能 

条件：
1. 导入导出 必须使用es module (import export)
   小心一些第三方模块导出可能用的是 commonJS 规范