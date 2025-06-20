import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss : {api: 'modern-compiler'}
    },

    modules: {localsConvention: 'camelCase'}
  }
});
