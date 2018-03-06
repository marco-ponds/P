
const path = require('path');
const MODE = process.env.MODE;

const config = {
    entry: './src/index.js',
    output: {
        library: 'P',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                query: {
                    compact: false // because I want readable output
                }
            }
        ]
    }
};


