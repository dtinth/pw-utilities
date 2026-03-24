import { expect, test } from "vite-plus/test";
import type { Locator } from "@playwright/test";
import type { LocatorLike } from "../src/index.ts";

test("LocatorLike is structurally compatible with Playwright Locator", () => {
  const locator: Locator = {} as Locator;
  const _compatible: LocatorLike = locator;
  expect(true).toBe(true);
});
