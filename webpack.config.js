const path = require('path')
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: 'Zui',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts','.tsx','.js','.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg?$/,
                loader: 'svg-sprite-loader',
            },
        ]
    },
}