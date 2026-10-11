import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
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
  "team",
  "contact",
];

const createRouteEntries = (): Plugin => ({
  name: "create-route-entries",
  enforce: "post",
  generateBundle(_options, bundle) {
    const entry = bundle["index.html"];
    if (!entry || entry.type !== "asset") return;
    for (const route of appRoutes) {
      this.emitFile({ type: "asset", fileName: `${route}/index.html`, source: entry.source });
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
