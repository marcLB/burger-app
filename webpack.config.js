const path = require('path');

module.exports = {
    entry: "./app", //entrée du projet
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js" 
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true, //mémoire 
        port: 9000,
        historyApiFallback: true
    },

	devtool: 'cheap-module-eval-source-map', //débugage, retrouver les erreurs en dehors du fichier bundle.js

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader', //envoie tous les fichiers js à babel pour utiliser la dernière version de js
                query: {
                    presets: [['env', { 
                        modules: false,
                        targets: { browsers: ["last 2 versions"] }
                    }]]
                }
            }
        ]
    }

}