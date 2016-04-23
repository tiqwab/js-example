module.exports = {
    entry: {
      bundle: __dirname + "/src/entry1.js",
      other: __dirname + "/src/entry2.js"
    },
    output: {
        path: __dirname + '/js',
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", "css"]
    }
};
