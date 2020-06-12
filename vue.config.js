// vue.config.js 配置说明 
// 这里只列一部分，具体配置参考官方文档https://cli.vuejs.org/zh/config/#css-loaderoptions
module.exports = {
  publicPath: "/",

  //是否使用eslint
  lintOnSave: false,

  /**
   * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
   *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
   *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
   *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
   * */
  productionSourceMap: false,

  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: "localhost", //也可以直接写IP地址这样方便真机测试
    port: 2011, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
  },

 
};
