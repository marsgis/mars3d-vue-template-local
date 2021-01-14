# Mars3D项目模版 - Vue版
 Vue技术栈下的一个最简[Mars3D](http://cesium.marsgis.cn)应用的三维地球项目模版。
 这是一个基于 [VueCli](https://cli.vuejs.org/config/)并整合了Cesium、Mars3D的基础项目。

 其他技术栈，请参考 [Mars3D开源导航](https://github.com/marsgis/mars3d)
 
 


## 运行效果 
 [在线Demo](http://cesium.marsgis.cn/project/simple-es5/index.html)  

 ![image](http://cesium.marsgis.cn/project/img/simple-es5.jpg)
 
 [更多项目体验](http://cesium.marsgis.cn/project.html)

 
 

## 运行命令
 
### 首次运行前安装依赖
 `npm install` 或 `cnpm install`
 
### http运行项目
 `npm run serve`  运行后访问：`http://localhost:2011/`  。 修改代码自动热部署，无缓存不用手动刷新

### 打包编译项目
 运行`npm run build`来构建项目。 


## 项目说明
1. 部分第三方库不是npm方式引入，是主页head中静态资源方式引入的。资源放在public目录下。
 主要原因是：
*    （1）一些第三方cesium插件并没有提供NPM包,以模块化的方式引入cesium没办法直接使用这些第三方插件包,通过静态资源的方式可以解决此问题。
*    （2）cesium库有不同版本，并且我们有汉化修复bug，直接引入npm的库没法使用。
2. public目录下文件与 Mars3D基础项目 的目录和文件完全相同，可以直接复制到该目录下进行更新。
 
 
### 更新项目
 此脚手架中类库不保证是最新版本， 请您自行拷贝"基础项目"的 lib目录覆盖至当前项目的public目录下


### 与其他脚手架的区别
1. 与 [mars3d-vue-cli](https://github.com/marsgis/mars3d-vue-cli)区别：
  lib包的引入方式不同，当前是head静态资源引入，mars3d-vue-cli是npm安装import引入方式。

2. 与[mars3d-vue-project-widget](https://github.com/marsgis/mars3d-vue-project-widget)区别：
  比其少了widget模块部分，其他没区别


## 版权说明
1. 当前[Mars3D](http://cesium.marsgis.cn)免费版本可以免费无限制使用.
2. 如有更高需求或商业应用，请联系购买[火星科技](http://cesium.marsgis.cn)进行SDK授权(去除logo、添加授权信息等)。 