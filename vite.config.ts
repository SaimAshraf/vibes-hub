import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { copyFileSync, mkdirSync } from "node:fs";
import { componentTagger } from "lovable-tagger";

const appRoutes = [
  "services",
  "products",
  "products/nexpos",
  "products/bizzops",
  "products/fms",
  "products/mess-erp",
  "products/pims",
  "work",
  "about",
  "contact",
];

const createRouteEntries = () => ({
  name: "create-route-entries",
  closeBundle() {
    for (const route of appRoutes) {
      const routeDirectory = path.resolve(__dirname, "dist", route);
      mkdirSync(routeDirectory, { recursive: true });
      copyFileSync(
        path.resolve(__dirname, "dist/index.html"),
        path.resolve(routeDirectory, "index.html"),
      );
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), createRouteEntries()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
