const { environment } = require('@rails/webpacker')

const vue = require('./loaders/vue')
environment.loaders.append('vue', vue)

environment.config.merge({
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
})

environment.loaders.append('pug', {
  test: /\.pug$/,
  loader: 'pug-plain-loader'
})

module.exports = environment
