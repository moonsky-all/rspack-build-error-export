import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  source: {
    entry: {
      foo: "./src/foo.js",
      bar: "./src/bar.js",
    },
  },
  tools: {
    rspack(ctx) {
      ctx.optimization.minimize = false;
      ctx.optimization.splitChunks.minSize = 1;
      ctx.optimization.splitChunks.maxSize = 100;
    }
  }
});
