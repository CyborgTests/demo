import test from "@cyborgtests/test";
import { expect } from "@playwright/test";
import { OWNER } from "../tags";

test(
  "products page should be displayed correctly",
  {
    tag: [OWNER.KHOTEMSKYI],
  },
  async ({ page, manualStep }) => {
    await page.goto("/shop/brand/Nizhyn");
    await expect(page.locator(".product-container")).toHaveCount(4);
    await manualStep("Verify that product images are displayed correctly");
    await manualStep("Verify that product details are displayed correctly");
    await manualStep("Verify that product price is displayed correctly");
  }
);

test(
  "product details page should be displayed correctly",
  {
    tag: [OWNER.KHOTEMSKYI],
  },
  async ({ page, manualStep }) => {
    await page.goto("/product/cherry-tomatoes");
    await expect(page.getByPlaceholder("Product Quantity")).toBeVisible();
    await expect(page.getByText("In stock")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Add To Bag" })
    ).toBeVisible();

    await manualStep(`Verify that product details are displayed correctly - 
      CHERRY TOMATOES
      cherry tomatoes, salt, sugar, greens, acetic acid, garlic, spices
      `);
    await manualStep(`Verify that product price is displayed correctly - $95`);
    await manualStep("Verify that product image is displayed correctly");
  }
);

test(
  "product in cart should be displayed correctly",
  {
    tag: [OWNER.KHOTEMSKYI],
  },
  async ({ page, manualStep }) => {
    await page.goto("/product/cherry-tomatoes");
    await page.getByRole("button", { name: "Add To Bag" }).click();
    await expect(
      page.getByRole("button", { name: "Proceed To Checkout" })
    ).toBeVisible();
    await manualStep("Verify that product is added to cart");
  }
);
