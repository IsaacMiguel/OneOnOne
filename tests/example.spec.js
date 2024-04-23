// @ts-check
import { test, expect, } from "@playwright/test"

test("has title", async ({ page, },) => {
  await page.goto("http://localhost:5173",)

  expect(page.locator("tag=h1",).getByText("Header Title",),).toBeTruthy()

  await expect(page,).toHaveTitle("One on One",)
},)
