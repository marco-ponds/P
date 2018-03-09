
const path = require('path');
const MODE = process.env.MODE;

const config = {
    entry: './src/index.js',
    output: {
        library: 'P',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'P.js',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ]
    },
    target: 'web'
};

module.exports = config;