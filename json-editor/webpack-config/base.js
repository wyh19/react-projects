/**
 * Created by 30113 on 2018/6/5.
 */
const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

let config = {
    entry:{
        app:path.join(__dirname,'../src/index.js')
    },
    output:{
        path:path.join(__dirname,'../dist'),
        filename:'[name].[hash].js'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [['env'], 'react'],
                    plugins: [
                        'react-hot-loader/babel',
                        "transform-decorators-legacy",
                        [
                            "import",
                            {
                                "libraryName": "antd",
                                "style": "css"
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, '../public/index.html')
        }),
        new CopyWebpackPlugin([
            {
                from: 'node_modules/monaco-editor/min/vs',
                to: 'vs',
            }
        ]),
    ],
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "../src")
        ],
        extensions: [".js", ".jsx"],
    },
}

module.exports = config