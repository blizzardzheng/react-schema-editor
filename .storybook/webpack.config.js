const path = require('path');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: 'React Example Storybook Build',
      warningSound: true,
      failureSound: true,
    }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react', 'stage-2'],
            },
          },
          { loader: 'source-map-loader' },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
      }
    ],
  }
};
