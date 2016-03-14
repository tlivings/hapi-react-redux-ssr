
import Path from 'path';
import Webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
    entry:  [
        './dist/lib/app/universal/routes.js'
    ],
    output: {
        path: Path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', './dist/lib/app'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new Webpack.NoErrorsPlugin()//,
        // new HtmlWebpackPlugin({
        //     template: Path.join(__dirname, '../lib/app/views/index.ejs'),
        //     hash: true,
        //     filename: 'views/index.ejs',
        //     inject: 'body',
        //     minify: {
        //       collapseWhitespace: true
        //     }
        // })
    ],
    devtool: 'inline-source-map',
    module: {
        noParse: /node_modules/,
        loaders: [
            { test: /\.css$/, loader: "css?sourceMap" }
        ]
    }
};

export default config;
