const path = require('path');
module.exports = {
  entry: './src/main.js', // 指定入口文件 entry：[String|Array|Object]
  output: { // 输出配置
    path: path.join(__dirname, './dist'), // 指定编译文件输出路径 通常是当前dist目录下（注：必须是绝对路径）
    filename: '[name].js', // 编译文件输出后的文件名 自动分配（）, 也可以固定写法（比如：filename: 'bundle.js'）
    publicPath: '/' // 指定资源文件引用的目录 如 publicPath: '/dist'   src='/dist/main.js'
  }
}
