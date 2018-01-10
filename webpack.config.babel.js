import path from "path";

import webpack from "webpack";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

const config = {
  entry: {
    lib: path.resolve(__dirname, "src/lib/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/lib")],
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, "src/lib")
    },
    extensions: [".js"]
  },
  externals: /^(react|react-virtualized)$/
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(new UglifyJsPlugin());
} else {
  config.devtool = "source-map";
}

export default config;
