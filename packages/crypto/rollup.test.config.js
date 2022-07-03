import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

console.clear()

export default {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
    commonjs()
  ],
  output: {
    dir: 'build',
    format: 'esm',
    sourcemap: true
  }
}
