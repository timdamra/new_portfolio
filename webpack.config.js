const HtmlWebPackPlugin = require ('html-webpack-plugin');
const path = require ('path');

require ('dotenv').config ();

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|mp4|woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin ({
      template: './src/index.html',
      filename: './index.html',
      favicon: './public/images/icon.png',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      components: path.resolve (__dirname, 'src/components'),
      hooks: path.resolve (__dirname, 'src/hooks'),
      state: path.resolve (__dirname, 'src/state'),
      actions: path.resolve (__dirname, 'src/actions'),
      public: path.resolve (__dirname, 'public'),
    },
  },
};
