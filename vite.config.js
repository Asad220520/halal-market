/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  // ,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@features": path.resolve(__dirname, "./src/app/features"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
      "@layouts": path.resolve(__dirname, "./src/app/layouts"),
      "@hooks": path.resolve(__dirname, "./src/app/hooks"),
      "@services": path.resolve(__dirname, "./src/app/services"),
      "@constants": path.resolve(__dirname, "./src/app/constants"),
      "@utils": path.resolve(__dirname, "./src/app/utils"),
      "@app": path.resolve(__dirname, "./src/app"),
    },
  },
});
