/* global require, __dirname, module*/

const path = require('path')                         

let conf = { 
   entry: './Modules/20_ajax/script.js',                          
   output: {
      path: path.resolve(__dirname, './js'),
      filename: 'main.js',
      publicPath: 'js/',
   },
   devServer: {
      overlay: true,
      // proxy: {
      //    '**': {
      //        target: 'http://localhost:3000/',
      //        secure: false,
      //       //  changeOrigin: true
      //    }
   //   }
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
         },
         {
            test: /\.css$/,
         },
         {
            test: /\.jpg$/,
         }
      ]
   }
}
module.exports = (env, options) => {
   conf.devtool = options.mode === 'production'
                     ? false
                     : 'cheap-module-eval-source-map'
   return conf
};