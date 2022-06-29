const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {filename: 'bundle.js', path: path.resolve(__dirname, 'public')},
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: false,
        host: `localhost`,
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
          {test: /\.js$/i, exclude: /node_modules/, use: 'babel-loader'},
          {test: /\.tsx?$/i, exclude: /node_modules/, use: 'ts-loader'},
          {test: /\.s[ac]ss$/i, use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']},
          {test: /\.(png|jpe?g|svg)$/i, use: 'file-loader'},
          {test: /\.(woff|woff2|eot|ttf|otf)$/i, use: 'file-loader'},
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({filename: 'bundle.css'})
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [new TsconfigPathsPlugin({configFile: 'tsconfig.json'})]
    },
    devtool: 'source-map'
};
