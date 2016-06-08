module.exports = {
  entry: {
      app:'./App.js'
  },

  output: {
    publicPath: '/build/', //服务器根路径
    path: './build', //编译到当前目录
    filename: 'bundle.js' //编译后的文件名字
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, exclude: /^node_modules$/,loaders: ['style', 'css', 'postcss-loader']}
    ]
  }
}
