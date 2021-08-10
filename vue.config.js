var px2rem = require('postcss-px2rem');
 
// 第一种
module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },
  postcss: function() {
    return [ px2rem({remUnit:75,exclude: /node_modules/i})];
  }
}
