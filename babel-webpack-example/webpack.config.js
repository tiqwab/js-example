module.exports = {
    entry: {
      app: __dirname + "/src/entry.js"
    },
    output: {
        path: __dirname + '/js',
        filename: "[name].js"
    },
    module: {
        loaders: [
          {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: "babel",
            query:{
              presets: ['react', 'es2015'],
              plugins: ['transform-runtime']
            }
          }
        ]
    },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", "jsx"]
    }
};
