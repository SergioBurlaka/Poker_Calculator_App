

module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
             test: /\.(woff|woff2|eot|ttf|otf)$/,
             use: [
                 {
                     loader: 'file-loader',
                     options: {
                         name: '[path][name].[ext]'
                     }
                 }
             ]
       }
        ]
    }

};

