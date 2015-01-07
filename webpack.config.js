module.exports = {
    entry: './js/app.js',
    output: {
        filename: './build/bundle.js'       
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' } ,
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