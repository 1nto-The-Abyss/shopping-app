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
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue: 37.5,
              propList: ['*']
            })
          ]
        }
      }
    },
  }
}
