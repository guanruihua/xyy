import path from 'path'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'

const plugins = [
  json(),
  // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
  commonjs(),

  // 配合 commonjs 解析第三方模块
  resolve(),
  babel({
    babelHelpers: 'runtime',
    // runtimeHelpers: true,
    // 只转换源代码，不运行外部依赖
    exclude: 'node_modules/**',
    // tsconfig: 'tsconfig.json',
    include: 'src',
    // babel 默认不支持 ts 需要手动添加
    extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts'],
  }),
  terser(),
]
export default [
  {
    input: './src/bin.cjs',
    output: [
      {
        file: path.join(`./lib/xyy.cjs`),
        format: 'cjs',
        name: 'xyy',
        sourcemap: false,
      },
    ],
    plugins,
  },
  {
    input: './src/index.cjs',
    output: [
      {
        file: path.join(`./lib/index.cjs`),
        format: 'cjs',
        name: 'xyy',
        sourcemap: false,
      },
    ],
    plugins,
  },
]
