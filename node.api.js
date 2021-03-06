/**
 * https://github.com/react-static/react-static/blob/master/docs/plugins/node-api.md
 * 自定义 webpack 等
 */
import path from 'path';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default () => ({
  webpack: (config, { stage }) => {
    const baseConfig = [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000,
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: '[path][name].[hash].[ext]',
        },
      },
    ];
    const postcssConfig = {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        plugins: () => [
          require('autoprefixer')({
            flexbox: 'no-2009',
          }),
        ],
      },
    };
    const ecc = [];
    if (stage !== 'node') {
      ecc.push({
        loader: ExtractCssChunks.loader,
        options: {
          hmr: stage === 'dev',
        },
      });
    }
    config.module.rules[0].oneOf.unshift(
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, './src/components'),
          path.resolve(__dirname, './src/layout'),
          path.resolve(__dirname, './src/pages'),
        ],
        use: [...ecc, 'css-loader', postcssConfig, 'sass-loader'],
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, './src/components'),
          path.resolve(__dirname, './src/layout'),
          path.resolve(__dirname, './src/pages'),
        ],
        use: [
          ...ecc,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]-[hash:base64:5]',
            },
          },
          postcssConfig,
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
      }
    );
    config.module.rules[0].oneOf.unshift(...baseConfig);

    config.plugins.push(new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './.nojekyll'),
          to: './'
        }
      ]
    }));
    return config;
  },
});
