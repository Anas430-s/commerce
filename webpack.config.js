var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var path = require('path');

module.exports = {
        
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath : '',
        },

        mode: 'development',

        devServer: {
          contentBase: path.join(__dirname, "/dist"),
          port: 9795,
          writeToDisk: true,
          open: true
          
        },
        

        module: {
            rules: [
              {
                test: /\.html$/i,
                use:[
                    {
                      loader: 'html-loader',
                      options:{
                          minimize: true,
                      }
                    }
                ]
               
              },

              {
                test: /\.css$/i,
                use: [
                  //"style-loader", 
                MiniCssExtractPlugin.loader,
                "css-loader"
              ],
              },
             

            {   
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',

                 options:{
                   name: '[name],[ext]',
                  autputPath: "images",
                 },

                },
              ],

            },


            ],

         
          },
      
           
          plugins:[
              new HtmlWebpackPlugin({
                filename: "index.html",
                template: "./src/index.html",
              }),

              new MiniCssExtractPlugin({filename: "css/style.css"}),
              new OptimizeCssAssetsPlugin({}),

              
          ],
         
          
};


