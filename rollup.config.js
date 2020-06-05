import typescript from 'rollup-plugin-typescript'
import { terser } from 'rollup-plugin-terser'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json')

export default {
  input: './src/index.ts',
  output: [
    {
      name: pkg.name,
      file: `./dist/umd/${pkg.name}.min.js`,
      format: 'umd',
      plugins: [terser()],
    },
    {
      name: pkg.name,
      file: `./dist/umd/${pkg.name}.js`,
      format: 'umd',
    },
  ],
  plugins: [typescript()],
}
