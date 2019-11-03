const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        path: path.resolve(__dirname, '_bundles'),
        filename: 'adaptive-scale.js',
        libraryTarget: 'umd',
        library: 'AS',
        umdNamedDefine: true
    },
    optimization: {
        minimize: true,
    },
};