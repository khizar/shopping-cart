const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: ['react-hot-loader/patch', 'babel-polyfill', './app/index.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: '[name].[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.p?css$/,
                include: [
                    path.resolve(__dirname, 'app/styles'),
                    path.resolve(__dirname, 'app/components')
                ],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[local]---[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.jsx', 'pcss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
