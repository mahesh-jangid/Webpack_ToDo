const path = require("path");

module.exports = {
  entry: "./src/toDo.js",
  output: {
    path: path.resolve(".", "Build"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
