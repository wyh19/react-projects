/**
 * Created by 30113 on 2018/5/4.
 */
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        app: path.join(__dirname, './src/index.js')
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
                        }
                    }
                ]

            }
        ]
    }
}