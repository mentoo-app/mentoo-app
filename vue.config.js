
module.exports = {
  productionSourceMap: false,
  filenameHashing: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/global.scss";`
      },
      less: {
        modifyVars: {
          // overide with less vars
          'text-color': '#5fbf44',
          'blue': '#5fbf44',
          'gray-7' : '#606060',
          'tabbar-background-color' : '#DEDFD8',
          'base-font-family':'"archia"',
          'card-background-color': '#ECEBE5'
        }
      }
    }
  }
}