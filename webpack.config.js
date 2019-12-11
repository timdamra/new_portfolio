const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

require('dotenv').config()

module.exports = {    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
              test: /\.css$/i,
              use: [
                'style-loader',
                'css-loader'
              ]
            },
            {
              test: /\.(png|jpg|gif|mp4|woff|woff2|ttf|otf|eot)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {}
                }
              ]
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['eslint-loader']
            },
            {
              test: /\.svg$/,
              loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            favicon: './public/images/icon.png'
        })
    ],
    resolve: {
      alias: {        
        components: path.resolve(__dirname, 'src/components'),        
        hooks: path.resolve(__dirname, 'src/hooks'),
        public: path.resolve(__dirname, 'public')       
      }
    }
}
