/**
 * Created by 30113 on 2018/3/26.
 */
const path  = require('path')
const HTMLPlugin = require('html-webpack-plugin')

let config = {
    entry:{
        index:path.join(__dirname,'../src/index.js')
    },
    output:{
        filename:'[name].[hash].js',
        path:path.join(__dirname,'../dist'),
        publicPath:''
    },
    module:{
        rules:[
            {
                test:/.(js|jsx)$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        //这里配了options，就不要.babelrc文件了
                        options:{
                            presets:["es2015","stage-1","react"],
                            plugins:["react-hot-loader/babel"]
                        }
                    }
                ]
            }

        ]
    },
    plugins:[
        new HTMLPlugin({
            template:path.join(__dirname,'../public/index.html')
        })
    ]
}

module.exports = config