/**
 * Created by 30113 on 2018/3/26.
 */
let fs = require('fs');
let webpack = require('webpack');
let config = require('./base.js');
let path = require('path');

config.entry = {
    app:[
        'react-hot-loader/patch',
        path.join(__dirname,'../src/index.js')
    ]
}

config.devServer = {
    host: '0.0.0.0',
    port:'3333',
    contentBase:path.join(__dirname,'../dist'),
    hot:true,
    overlay:{
        errors:true
    },


}
config.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = config