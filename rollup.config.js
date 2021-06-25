import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'repro-case/index.js',
  output: {
    file: "repro-case/bundle.js",
    format: 'es'
  },
  plugins: [nodeResolve()]
};
