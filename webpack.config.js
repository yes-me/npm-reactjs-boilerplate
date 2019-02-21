const path = require('path');

module.exports = [
    {
        entry: './src/index.js',
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'build'),
            libraryTarget: 'commonjs2'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: { loader: 'babel-loader'},
                    exclude: /(node_modules|build)/
                }
            ]
        },
        externals: {
            'react': 'commonjs react'
        },
        devtool: 'source-map',
        mode: 'production'
    }
]