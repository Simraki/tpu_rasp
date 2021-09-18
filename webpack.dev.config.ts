import path from 'path'
// import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ESLintPlugin from "eslint-webpack-plugin"

const config = {
    mode: "development",
    output: {
        publicPath: "/",
    },
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new ESLintPlugin({
            extensions: ["js", "jsx", "ts", "tsx"],
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        static: path.join(__dirname, "build"),
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true
    },
};

export default config;

// export default {
//     entry: "./src/index.tsx",
//     output: {
//         path: path.resolve('build'),
//         filename: '[name].js',
//     },
//
//     resolve: {
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//     },
//
//     mode: process.env.NODE_ENV || 'development',
//
//     optimization: {
//         splitChunks: {
//             chunks: 'all',
//         },
//     },
//
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|js)x?$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: [
//                             "@babel/preset-env",
//                             "@babel/preset-react",
//                             "@babel/preset-typescript",
//                         ],
//                     },
//                 },
//             },
//         ],
//     },
//
//     plugins: [
//         // new CopyWebpackPlugin([path.resolve('./static/index.html')]),
//         new CleanWebpackPlugin(),
//         // new HtmlWebpackPlugin({
//         //     template: './static/index.html',
//         // }),
//     ],
//
//     devServer: {
//         static: path.join(__dirname, 'build'),
//         port: 3000,
//         compress: true,
//         hot: true,
//     },
//
//     devtool: 'cheap-module-source-map',
// }
