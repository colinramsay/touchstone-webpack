module.exports = {
    entry: './js/app.js',
    output: {
        path: 'build',
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader' } ,
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            { test: /\.eot\?.*$/, loader: 'file-loader' },
            { test: /\.ttf\?.*$/, loader: 'file-loader' },
            { test: /\.woff\?.*$/, loader: 'file-loader' },
            { test: /\.svg\?.*$/, loader: 'file-loader' }
        ]
    }
};