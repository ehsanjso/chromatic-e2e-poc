// @ts-check
import { test, expect } from "@chromaui/test-archiver";

test("main page", async ({ page }) => {
  await page.goto("https://main--elaborate-dusk-f37d8b.netlify.app/");

  // Expect a title "to contain" a substring.
  await expect(
    page.getByRole("heading", { name: "I'm Main page" })
  ).toBeVisible();
});

test("page 1", async ({ page }) => {
  await page.goto("https://main--elaborate-dusk-f37d8b.netlify.app/page1");

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "I'm Page 1" })).toBeVisible();
});

test("page 2", async ({ page }) => {
  await page.goto("https://main--elaborate-dusk-f37d8b.netlify.app/page2");

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: "I'm Page 2" })).toBeVisible();
});
