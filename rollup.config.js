import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/js/main.js',
  name: 'meditationCalculator',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  output: {
    file: 'src/js/bundle.js',
    format: 'umd',
  }
};