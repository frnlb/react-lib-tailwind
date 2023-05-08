import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import terser from "@rollup/plugin-terser";
import importAssets from "rollup-plugin-import-assets";
import includePaths from "rollup-plugin-includepaths";
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';

let includePathOptions = {
  paths: ["src/lib", "src/*", "src/components"],
  extensions: [".js", ".json", ".html", ".jsx", ".ts", ".tsx"],
};

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      importAssets({
        include: [/\.gif$/i, /\.jpg$/i, /\.png$/i, /\.svg$/i],
        exclude: [],
        emitAssets: true,
        fileNames: "assets/[name]-[hash].[ext]",
        publicPath: "",
      }),
      includePaths(includePathOptions),
      postcss({
        plugins: [
          postcssImport(),
          autoprefixer(),
        ],
        extensions: ['.css'],
        inject: true,
        autoModules: true,
        minimize: true,
        sourceMap: true,
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
