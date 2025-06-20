import test from "@cyborgtests/test";
import { OWNER } from "../tags";

test(
  "homepage load and branding",
  {
    annotation: [
      {
        type: "objective",
        description:
          "Verify that the homepage loads correctly and displays essential branding elements",
      },
    ],
    tag: [OWNER.KHOTEMSKYI],
  },
  async ({ page, manualStep }) => {
    await page.goto("/");
    await manualStep("Navigate to the homepage");
    await manualStep(
      "Observe the presence of the site logo and main navigation menu"
    );
    await manualStep(
      "Verify the homepage loads without errors, displaying the site logo and navigation menu prominently"
    );
  }
);

test(
  "product listing display",
  {
    annotation: [
      {
        type: "objective",
        description:
          "Ensure that the product listing page displays products correctly",
      },
    ],
    tag: [OWNER.BILL_GATES],
  },
  async ({ page, manualStep }) => {
    await page.goto("/shop");
    await manualStep(
      "Navigate to a product category or the main product listing page"
    );
    await manualStep("Observe the list of products displayed");
    await manualStep(
      "Verify products are displayed with images, names, prices, and any relevant labels (e.g., 'New', 'Sale')"
    );
  }
);

test(
  "product detail view",
  {
    annotation: [
      {
        type: "objective",
        description:
          "Verify that clicking on a product leads to its detail page with comprehensive information",
      },
    ],
    tag: [OWNER.SAM_ALTMAN],
  },
  async ({ page, manualStep }) => {
    await page.goto("/shop");
    await manualStep("Click on a product from the listing page");
    await manualStep("Observe the product detail page");
    await manualStep(
      "Verify the product detail page displays the product image, name, price, description, available sizes/colors, and an 'Add to Cart' button"
    );
  }
);

test(
  "add to cart functionality",
  {
    annotation: [
      {
        type: "objective",
        description: "Test the ability to add a product to the shopping cart",
      },
    ],
    tag: [OWNER.KHOTEMSKYI],
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
  "user registration process",
  {
    annotation: [
      {
        type: "objective",
        description: "Test the user registration functionality",
      },
    ],
    tag: [OWNER.SAM_ALTMAN],
  },
  async ({ page, manualStep }) => {
    await page.goto("/register");
    await manualStep("Navigate to the registration page");
    await manualStep("Fill in the registration form with valid data");
    await manualStep("Submit the form");
    await manualStep(
      "Verify the user is successfully registered and redirected to a welcome or account page"
    );
  }
);

test(
  "user login with valid credentials",
  {
    annotation: [
      {
        type: "objective",
        description: "Verify that registered users can log in successfully",
      },
    ],
    tag: [OWNER.KHOTEMSKYI],
  },
  async ({ page, manualStep }) => {
    await page.goto("/login");
    await manualStep("Navigate to the login page");
    await manualStep("Enter valid email and password credentials");
    await manualStep("Submit the login form");
    await manualStep(
      "Verify the user is logged in and redirected to their account dashboard or homepage"
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

test(
  "responsive design on mobile devices",
  {
    annotation: [
      {
        type: "objective",
        description:
          "Check that the website layout adapts correctly to mobile screen sizes",
      },
    ],
    tag: [OWNER.SAM_ALTMAN],
  },
  async ({ page, manualStep }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone viewport
    await page.goto("/");
    await manualStep(
      "Open the website on a mobile device or use browser developer tools to simulate a mobile viewport"
    );
    await manualStep(
      "Navigate through various pages (homepage, product listing, product detail, cart)"
    );
    await manualStep(
      "Verify the website layout adjusts appropriately for mobile screens, with readable text, accessible buttons, and functional navigation"
    );
  }
);

test(
  "search functionality",
  {
    annotation: [
      {
        type: "objective",
        description:
          "Verify that the search feature returns relevant product results",
      },
    ],
    tag: [OWNER.KHOTEMSKYI],
  },
  async ({ page, manualStep }) => {
    await page.goto("/");
    await manualStep("Enter a product name or keyword into the search bar");
    await manualStep("Submit the search query");
    await manualStep(
      "Verify the search results page displays products matching the search criteria"
    );
  }
);
