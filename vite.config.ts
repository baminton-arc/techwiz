import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const base = process.env["GITHUB_PAGES_BASE"] ?? "/";

export default defineConfig({
  base,
  plugins: [
    tailwindcss(),
    TanStackRouterVite(),
    tanstackStart(),
    react(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
