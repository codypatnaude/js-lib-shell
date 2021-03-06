import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/main.ts',
  output: {
    file: 'build/main.min.js',
    format: 'iife',
    sourceMap: 'inline',
  },
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**',
    })
  ]
}