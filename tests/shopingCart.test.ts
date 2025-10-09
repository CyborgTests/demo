import test from "@cyborgtests/test";
import { OWNER } from "../tags";

test(
  "add to cart functionality",
  {
    annotation: [
      {
        type: "objective",
        description: "Test the ability to add a product to the shopping cart",
      },
    ],
    tag: [OWNER.O_KHOTEMSKYI],
  },
  async ({ page, manualStep }) => {
    await page.goto("/product/cherry-tomatoes");
    await manualStep(
      "On a product detail page, select any required options (e.g., size, color)"
    );
    await manualStep("Click the 'Add to Cart' button");
    await manualStep("Navigate to the shopping cart page");
    await manualStep(
      "Verify the selected product appears in the cart with correct details and quantity"
    );
  }
);

test(
  "shopping cart quantity update",
  {
    annotation: [
      {
        type: "objective",
        description:
          "Ensure that users can update product quantities in the cart",
      },
    ],
    tag: [OWNER.BILL_GATES],
  },
  async ({ page, manualStep }) => {
    await page.goto("/cart");
    await manualStep(
      "In the shopping cart, locate a product with a quantity selector"
    );
    await manualStep("Change the quantity value");
    await manualStep(
      "Verify the cart updates to reflect the new quantity and recalculates the total price accordingly"
    );
  }
);

test(
  "checkout process with empty cart",
  {
    annotation: [
      {
        type: "objective",
        description:
          "Ensure that the checkout process cannot proceed with an empty cart",
      },
    ],
    tag: [OWNER.BILL_GATES],
  },
  async ({ page, manualStep }) => {
    await page.goto("/cart");
    await manualStep("Navigate to the shopping cart page with no items added");
    await manualStep("Attempt to proceed to checkout");
    await manualStep(
      "Verify the system prevents checkout and displays a message indicating that the cart is empty"
    );
  }
);
