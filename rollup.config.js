import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sveltePreprocess from "svelte-preprocess";
import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

export default {
  input: "./src/App.svelte",
  output: {
    format: "iife",
    name: "ShopifyWidget", // Name of the class we will call on the page
    file: "dist/shopify-widget.js" // the file which we will include on the page
  },
  plugins: [
    svelte({
      emitCss: false,  // Let's store CSS in JS (no-depends), but you can emit it in separate *.css file too
      preprocess: sveltePreprocess({
        postcss: true,  // And tells it to specifically run postcss!
      }),
    }),
    resolve({
      browser: true,
      dedupe: importee => importee === "svelte" || importee.startsWith("svelte/")
    }),
    commonjs(),
    terser(),
    typescript()
  ]
};