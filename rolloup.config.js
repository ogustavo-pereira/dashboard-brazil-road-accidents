import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/main.tsx',
  output: {
    file: 'public/bundle.js',
    format: 'iife', 
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    resolve(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    isProduction && terser(),
  ],
  external: ['react', 'react-dom'],
};