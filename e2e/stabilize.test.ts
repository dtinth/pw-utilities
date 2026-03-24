import { test, expect } from "@playwright/test";
import { stabilize } from "../src/stabilize.ts";

test("stabilize waits for element position to settle", async ({ page }) => {
  await page.setContent(`
    <style>
      @keyframes slide-in {
        from { transform: translateY(100px); }
        to { transform: translateY(0); }
      }
      #target {
        position: fixed;
        top: 0;
        left: 0;
        animation: slide-in 0.5s ease forwards;
      }
    </style>
    <div id="target">Hello</div>
  `);

  const locator = page.locator("#target");
  await stabilize(locator);

  const box = await locator.boundingBox();
  expect(box).not.toBeNull();
  expect(box!.y).toBe(0);
});
