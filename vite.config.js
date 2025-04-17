import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // css: {
  //   plugins: [tailwindcss(), autoprefixer()],
  // },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setup-tests.js"],
  },
  build: {
    lib: {
      entry: "./src/index.js",
      name: "MyReactCompLib",
      fileName: (format) => `ttmfe-component-lib.${format}.js`,
      formats: ["esm", "cjs", "es", "umd"],
    },
    outDir: "dist",
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
