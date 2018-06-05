/**
 * Created by 30113 on 2018/6/5.
 */
const webpack = require('webpack')
const path = require('path')
let config = require('./base.js')

config.mode = 'development'
config.devServer = {
    host: 'localhost',
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    overlay: {
        errors: true
    },
    open:true
}
config.entry = {
    app: [
        'react-hot-loader/patch',
        path.join(__dirname, '../src/index.js')
    ]
}
config.plugins.push(new webpack.HotModuleReplacementPlugin())


module.exports = config