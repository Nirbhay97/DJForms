const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'formBuilder.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'FormBuilder',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
  mode: 'development',
};
