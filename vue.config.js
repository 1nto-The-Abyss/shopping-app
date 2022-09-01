module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            hack: `true; @import "@/assets/less/theme.less";`,
          }
        }
      },
      // postcss: {
      //   plugins: [
      //     // 设计稿宽度的1/10，一般移动端为375px
      //     require('postcss-pxtorem')({
      //       rootValue: 37.5,
      //       propList: ['*']
      //     })
      //   ]
      // }
    }
  }
}
