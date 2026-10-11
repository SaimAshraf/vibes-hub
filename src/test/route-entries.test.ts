// @vitest-environment node
import { describe, expect, it } from "vitest";
import config from "../../vite.config";

describe("public route packaging", () => {
  it("emits the team deep-link entry with the same app document", () => {
    const resolved = config({ mode: "production", command: "build" });
    const plugin = resolved.plugins.find(item => item && typeof item === "object" && "name" in item && item.name === "create-route-entries");
    if (!plugin || !("generateBundle" in plugin) || typeof plugin.generateBundle !== "function") {
      throw new Error("Route entry plugin is missing");
    }
    const emitted: { fileName: string; source: string }[] = [];
    const document = '<html><script src="/assets/app.js"></script></html>';
    plugin.generateBundle.call(
      { emitFile: (asset: { fileName: string; source: string }) => emitted.push(asset) } as never,
      {} as never,
      { "index.html": { type: "asset", fileName: "index.html", source: document } } as never,
      false,
    );
    expect(emitted).toContainEqual({ type: "asset", fileName: "team/index.html", source: document });
    expect(emitted).toContainEqual({ type: "asset", fileName: "products/index.html", source: document });
  });
});