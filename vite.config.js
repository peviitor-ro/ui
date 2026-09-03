import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [react()],
  define: {
    global: "window",
  },
  resolve: {
    alias: [
      { find: /^src\//, replacement: `${path.resolve(__dirname, "src")}/` },
      {
        find: /^components\//,
        replacement: `${path.resolve(__dirname, "src/components")}/`,
      },
      {
        find: /^redux\//,
        replacement: `${path.resolve(__dirname, "src/redux")}/`,
      },
      {
        find: /^screens\//,
        replacement: `${path.resolve(__dirname, "src/screens")}/`,
      },
      {
        find: /^styles\//,
        replacement: `${path.resolve(__dirname, "src/styles")}/`,
      },
      {
        find: /^utils\//,
        replacement: `${path.resolve(__dirname, "src/utils")}/`,
      },
      {
        find: /^assets\//,
        replacement: `${path.resolve(__dirname, "src/assets")}/`,
      },
    ],
  },
  server: {
    port: 3000,
    open: false,
  },
});
