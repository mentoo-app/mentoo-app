
module.exports = {
  productionSourceMap: false,
  filenameHashing: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/global.scss";`
      }
    }
  }
}