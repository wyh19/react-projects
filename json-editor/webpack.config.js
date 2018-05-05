/**
 * Created by 30113 on 2018/5/4.
 */
const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        //app: path.join(__dirname, './src/index.js')
        app:[
            'react-hot-loader/patch',
            path.join(__dirname, './src/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[hash].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [["env"], 'react'],
                            plugins:["react-hot-loader/babel"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, './public/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: [".js", ".json", ".jsx", ".css"],
    },
    devServer:{
        host:'0.0.0.0',
        port:'8888',
        contentBase:path.join(__dirname, './dist'),
        hot:true,
        overlay:{
            errors:true
        }
    }
}