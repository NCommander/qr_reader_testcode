const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'QR Scanner Demo',
      header: 'QR Scanner Demo',
      metaDesc: 'QR Scanner Demo',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /qr-scanner-worker\.min\.js$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  };