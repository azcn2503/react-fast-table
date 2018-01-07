import path from "path";

const config = {
  entry: {
    lib: path.resolve(__dirname, "src/lib/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-dist.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src/lib")],
        loader: "babel-loader"
      }
    ]
  }
};

export default config;
