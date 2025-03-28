
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postCss from 'rollup-plugin-postcss';

const packageJson = require("./package.json");

export default [{
    input: "src/index.ts",
    output: [{
        file: packageJson.main,
        format: "cjs",
        sourceMap: true
    }, {
        file: packageJson.module,
        format: "esm",
        sourceMap: true
    }],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({  tsconfig: "./tsconfig.json" }),
        terser(),
        postCss()
    ],
    external: ["react", "react-dom"]
}, {
    input: "src/index.ts",
    output: [{ file: packageJson.types}],
    plugins: [dts.default()],
    external: [/\.css/],
}]