const {resolve} =  require('path')
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.base')
const nodeExternals = require('webpack-node-externals')

const devServerConfig = {
    mode:'development',
    entry:resolve(__dirname,'../src/client/entry-server.js'),
    output:{
        filename:'server-bundle.js',
        //要指定编译的规则
        libraryTarget:'commonjs2',
    },
    target:'node',
    //不要让第三方依赖打包到输出文件
    externals:nodeExternals(),
    module:{
        rules:[
            {
                test: /\.css$/,
                use:'ignore-loader' //忽略css的解析
            }
        ]
    }
}
module.exports = merge(baseConfig,devServerConfig)

