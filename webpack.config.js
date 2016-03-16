
import Path from 'path';
import Webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
    entry:  [
        './dist/lib/app/client'
    ],
    output: {
        path: Path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.css']
    },
    plugins: [
        new Webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('styles.css', {
          allChunks: true
        })
    ],
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
              test: /\.css$/i,
              loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]_[local]_[hash:base64:5]'),
            }
        ],
    }
};

export default config;
