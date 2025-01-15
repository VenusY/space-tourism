const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: false,
    port: '5000',
    open: true,
    hot: true,
    liveReload: true,
  },
});
