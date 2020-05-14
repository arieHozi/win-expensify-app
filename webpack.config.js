const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env === "production";
  return {
    entry: "./src/app.js",
    //entry: "./src/playground/hoc.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },

    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
              },
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    devtool: isProduction ? "source-map" : "inline-source-map",

    devServer: {
      contentBase: path.join(__dirname, "public"),
      publicPath: "/dist/",
      historyApiFallback: true,
    },
  };
};
