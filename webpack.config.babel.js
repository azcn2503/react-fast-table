import path from "path";

import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  entry: {
    lib: path.resolve(__dirname, "src/lib/index.js"),
    demo: path.resolve(__dirname, "src/demo/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-dist.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/demo/index.html"),
      chunks: ["demo"]
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src/lib"),
          path.resolve(__dirname, "src/demo")
        ],
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "src/lib"),
      demo: path.resolve(__dirname, "src/demo")
    },
    extensions: [".js"]
  }
};

if (process.env.NODE_ENV !== "production") {
  config.devtool = "source-map";
}

export default config;
