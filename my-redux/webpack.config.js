/**
 * Created by 30113 on 2018/3/26.
 */
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        index:path.join(__dirname,'./src/index.js')
    },
    output:{
        filename:'[name].[hash].js',
        path:path.join(__dirname,'./dist'),
        publicPath:''
    },
    module:{
        rules:[
            {
                test:/.(js|jsx)$/,
                include: /src/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new HTMLPlugin({
            inject: true,
            template:path.join(__dirname,'./public/index.html')
        })
    ]
}