const {resolve} =  require('path')
const {merge} = require('webpack-merge');
const MiniCssExtract = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base')

const devConfig = {
    mode:'development',
    entry:resolve(__dirname,'../src/client/entry-client.js'),
    output: {
        filename:'client-bundle.js'
    },
    devServer:{
        static:{
            directory:resolve(__dirname,'../dist'),
        },
        port:'8081',
        historyApiFallback:true,
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtract.loader,'css-loader']
            }
        ]
    },
    plugins:[
        new MiniCssExtract(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname,'../src/client/template.html'),
        })
    ]
}
module.exports = merge(baseConfig,devConfig)

