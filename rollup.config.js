import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "src/lib/index.js",
  output: {
    file: "dist/lib.js",
    format: "cjs"
  },
  external: ["react", "react-proptypes"],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**"
    })
  ]
};
