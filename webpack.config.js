const path = require('path')

//2、导入在内存中生成HTML的插件
//插件的作用：自动在内存中根据指定页面生成一个内存的页面；自动把打包好的bundle.js追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//这个配置文件，起始就是一个js文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
    //入口，表示要使用webpack打包哪个文件
    entry: './src/main.js',
    //输出文件相关配置
    output: {
        path: path.resolve(__dirname, './dist'),   //指定打包好的文件，输出到哪个目录中去
        filename: 'bundle.js'   //指定输出文件的名称
    },
    mode: 'development',
    devServer: { //配置dev-server命令参数的第二种方法，相对来说麻烦一点
        open: true, //自动打开浏览器
        port: 8080, //设置启动时候的运行端口
        contentBase: path.join(__dirname, "src"), //指定托管的根目录
        hot: true, //热更新
    },
    plugins: [
        new htmlWebpackPlugin({ //第三部，创建一个在内存中生成HTML页面的插件
            template: path.join(__dirname, './src/index.html'), //指定模板页面的路径
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {  //这个节点用于配置所有的第三方模块加载器
        rules: [    //所有第三方模块的匹配规则
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        alias: {//修改vue导入时包的路径
            "vue$": "vue/dist/vue.js"
        }
    }
}