import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "./src", // Substitua isso pelo caminho real para o diretório onde o arquivo "NavBar" está localizado.
    },
  },
});
