import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/", // <- important for GitHub Pages deployment
  server: {
    host: "::",           // listen on all network interfaces during development
    port: 8080,           // local dev server port
    hmr: {
      overlay: false,     // disable HMR error overlay in browser
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // allows imports like "@/components/Button"
    },
  },
});