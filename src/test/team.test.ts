import { describe, expect, it } from "vitest";
import { founders } from "@/data/team";

describe("founder presentation", () => {
  it("keeps Saim Ashraf first", () => {
    expect(founders[0].name).toBe("Saim Ashraf");
  });

  it("includes all four actual founders", () => {
    expect(founders.map(founder => founder.name)).toEqual([
      "Saim Ashraf",
      "Syed Quraib Ali Gillani",
      "Talha Iqbal",
      "Amaan Janjua",
    ]);
  });
});