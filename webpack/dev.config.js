/* eslint-disable */
const webpack = require('webpack');
const config = require('./../webpack.config');

config.stats = {
    colors: true,
    hash: false,
    version: false,
    timings: false,
    assets: true,
    chunks: true,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false
};

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    })
);

config.devtool = 'eval-source-map';

module.exports = config;
