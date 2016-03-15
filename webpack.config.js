
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
        new ExtractTextPlugin('[name]__[local]___[hash:base64:5].css', {
          allChunks: true
        })
    ],
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    }
};

export default config;
