import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // "./" keeps asset paths relative, so the build works on Netlify,
  // Vercel, GitHub Pages or even opened from a folder.
  base: "./",
  server: { host: true, port: 5173 },
  preview: { port: 4173 },
  build: { outDir: "dist" },
});
