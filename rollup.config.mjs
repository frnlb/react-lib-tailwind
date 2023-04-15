import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import terser from "@rollup/plugin-terser";
import importAssets from "rollup-plugin-import-assets";
import includePaths from "rollup-plugin-includepaths";

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
        // files to import
        include: [/\.gif$/i, /\.jpg$/i, /\.png$/i, /\.svg$/i],
        // files to exclude
        exclude: [],
        // copy assets to output folder
        emitAssets: true,
        // name pattern for the asset copied
        fileNames: "assets/[name]-[hash].[ext]",
        // public path of the assets
        publicPath: "",
      }),
      includePaths(includePathOptions),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
