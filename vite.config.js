import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    dts({ exlude: ["**/*,stories.ts", "**/*.test.ts"] }),
    tailwindcss(),
  ],

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setup-tests.js"],
  },
  build: {
    lib: {
      entry: "./src/index.js",
      name: "ttmfe-component-lib",
      fileName: (format) => `ttmfe-component-lib.${format}.js`,
      formats: ["es", "cjs", "esm", "umd"],
    },
    outDir: "dist",
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
