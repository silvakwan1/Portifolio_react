import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Use caminhos relativos, não caminhos absolutos
      "@src": "/path-to-your-NavBar-component", // O '@src' é um exemplo, você pode personalizá-lo.
    },
  },
});
